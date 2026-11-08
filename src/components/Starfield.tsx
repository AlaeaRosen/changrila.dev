import { useEffect, useRef } from "react"

/**
 * Recreates the Figma "Planet Window Screen" star shader: density ramps from
 * 0.10 to 0.47 and travel from 0.217 to 0.449 over 20s (ease 0.5,0,0.5,1).
 * Stars drift right-to-left in parallax layers, as seen from a moving train.
 */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let w = 0
    let h = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    type Star = {
      x: number
      y: number
      z: number
      r: number
      tw: number
      threshold: number
    }
    let stars: Star[] = []

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 1400)
      stars = Array.from({ length: count }, () => {
        const z = Math.random()
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.35 + z * z * 1.6,
          tw: Math.random() * Math.PI * 2,
          threshold: Math.random(),
        }
      })
    }

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    const start = performance.now()
    let last = start

    const frame = (now: number) => {
      const dt = Math.min(50, now - last)
      last = now
      const p = reduce ? 1 : ease(Math.min(1, (now - start) / 20000))
      const density = 0.1 + (0.47 - 0.1) * p
      const travel = 0.217 + (0.449 - 0.217) * p
      const visible = 0.45 + density * 1.15

      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        if (s.threshold > visible) continue
        if (!reduce) {
          s.x -= (0.004 + s.z * s.z * 0.05) * travel * dt
          if (s.x < -4) {
            s.x = w + 4
            s.y = Math.random() * h
          }
        }
        const twinkle = 0.65 + 0.35 * Math.sin(now * 0.0012 + s.tw)
        ctx.globalAlpha = (0.25 + s.z * 0.75) * twinkle * 0.42 * 2
        ctx.fillStyle = s.z > 0.92 ? "#fff6dd" : "#dfe8ff"
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
        if (s.z > 0.96) {
          ctx.globalAlpha *= 0.25
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, #1b1a46 0%, #11123a 40%, #0a0c24 75%, #070818 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(13,38,66,0.27)]" />
      <canvas ref={ref} className="absolute inset-0 size-full" />
    </div>
  )
}
