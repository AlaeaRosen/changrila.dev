import { useEffect, useRef, useState } from "react"

const DOTS = 8

/**
 * Decorative scrollbar: indigo end caps, a column of steel dots and a glowing
 * gold orb that tracks the scroll position. Click a dot or drag the orb to scroll.
 */
export default function ScrollRail({
  target,
  className = "",
}: {
  target: React.RefObject<HTMLElement | null>
  className?: string
}) {
  const track = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [scrollable, setScrollable] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const computeActiveSection = (el: HTMLElement) => {
    const nodes = Array.from(
      el.querySelectorAll<HTMLElement>("[data-scroll-section]"),
    )
    if (nodes.length === 0) {
      setActiveSection("")
      return
    }
    const elRect = el.getBoundingClientRect()
    const max = el.scrollHeight - el.clientHeight
    const ratio = max > 0 ? el.scrollTop / max : 0
    if (ratio >= 0.96) {
      setActiveSection(
        nodes[nodes.length - 1].getAttribute("data-scroll-section") ?? "",
      )
      return
    }
    const threshold = elRect.top + el.clientHeight * 0.32
    let current = nodes[0].getAttribute("data-scroll-section") ?? ""
    for (const node of nodes) {
      const rect = node.getBoundingClientRect()
      if (rect.top <= threshold) {
        current = node.getAttribute("data-scroll-section") ?? current
      } else {
        break
      }
    }
    setActiveSection(current)
  }

  useEffect(() => {
    const el = target.current
    if (!el) return
    const update = () => {
      const max = el.scrollHeight - el.clientHeight
      setScrollable(max > 4)
      setProgress(max > 0 ? el.scrollTop / max : 0)
      computeActiveSection(el)
    }
    update()
    el.addEventListener("scroll", update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    if (el.firstElementChild) ro.observe(el.firstElementChild)
    return () => {
      el.removeEventListener("scroll", update)
      ro.disconnect()
    }
  }, [target])

  const scrollTo = (ratio: number, smooth = true) => {
    const el = target.current
    if (!el) return
    const r = Math.min(1, Math.max(0, ratio))
    el.scrollTo({
      top: r * (el.scrollHeight - el.clientHeight),
      behavior: smooth ? "smooth" : "auto",
    })
    computeActiveSection(el)
  }

  const ratioAt = (clientY: number) => {
    const box = track.current!.getBoundingClientRect()
    return (clientY - box.top) / box.height
  }

  if (!scrollable) return null

  return (
    <div
      aria-hidden
      className={`flex w-[22px] flex-col items-center ${className}`}
    >
      <span className="h-[clamp(24px,8%,64px)] w-[2px] shrink-0 rounded-full bg-[#5b5ff0] shadow-[0_0_6px_rgba(91,95,240,0.9)]" />
      <div
        ref={track}
        className="relative my-3 min-h-0 w-full flex-1 cursor-pointer"
        onPointerDown={(e) => {
          const node = e.currentTarget
          node.setPointerCapture(e.pointerId)
          setDragging(true)
          scrollTo(ratioAt(e.clientY), false)
          const move = (ev: PointerEvent) =>
            scrollTo(ratioAt(ev.clientY), false)
          const up = () => {
            setDragging(false)
            node.removeEventListener("pointermove", move)
            node.removeEventListener("pointerup", up)
            node.removeEventListener("pointercancel", up)
          }
          node.addEventListener("pointermove", move)
          node.addEventListener("pointerup", up)
          node.addEventListener("pointercancel", up)
        }}
      >
        {Array.from({ length: DOTS }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2a2d3a] bg-[#8d909e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] transition-opacity"
            style={{
              top: `${(i / (DOTS - 1)) * 100}%`,
              opacity: Math.abs(i / (DOTS - 1) - progress) < 0.06 ? 0 : 0.85,
            }}
          />
        ))}
        {dragging && activeSection && (
          <div
            className="pointer-events-none absolute right-full mr-3 -translate-y-1/2 whitespace-nowrap rounded-[6px] border border-[#c9a84c]/80 bg-[#13101e]/95 px-3 py-1 font-display text-[12px] tracking-[1.2px] uppercase text-[#fee6a8] shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_12px_rgba(201,168,76,0.35)]"
            style={{ top: `${progress * 100}%` }}
          >
            {activeSection}
          </div>
        )}
        <span
          className="absolute left-1/2 size-[17px] -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none rounded-full border border-[#fff7dc] bg-[radial-gradient(circle_at_35%_30%,#fffbea_0%,#fee6a8_35%,#c9a84c_75%,#8a6a22_100%)] shadow-[0_0_10px_3px_rgba(254,230,168,0.65)] active:cursor-grabbing"
          style={{ top: `${progress * 100}%` }}
          onPointerDown={(e) => {
            e.stopPropagation()
            const node = e.currentTarget
            node.setPointerCapture(e.pointerId)
            setDragging(true)
            const move = (ev: PointerEvent) =>
              scrollTo(ratioAt(ev.clientY), false)
            const up = () => {
              setDragging(false)
              node.removeEventListener("pointermove", move)
              node.removeEventListener("pointerup", up)
              node.removeEventListener("pointercancel", up)
            }
            node.addEventListener("pointermove", move)
            node.addEventListener("pointerup", up)
            node.addEventListener("pointercancel", up)
          }}
        />
      </div>
      <span className="h-[clamp(24px,8%,64px)] w-[2px] shrink-0 rounded-full bg-[#5b5ff0] shadow-[0_0_6px_rgba(91,95,240,0.9)]" />
    </div>
  )
}
