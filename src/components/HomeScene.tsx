import { useEffect, useRef, useState } from "react"
import { A, PROJECTS, type Project } from "../data"
import Character from "./Character"
import Chip from "./Chip"

/** Short hover intent so sweeping the cursor across the sky does not thrash the target. */
const HOVER_MS = 60

/** Planet centres in the 1440×1024 Figma frame. */
export const PLANETS = {
  realswipe: { cx: 218.55, cy: 491.37, card: { x: 392, y: 262 } },
  flavouriq: { cx: 715.66, cy: 295.66, card: { x: 972, y: 118 } },
  mindsprout: { cx: 1100.66, cy: 757.66, card: { x: 920, y: 150 } },
} as const
type PlanetId = keyof typeof PLANETS

const byId = (id: string) => PROJECTS.find((p) => p.id === id)!

type Props = {
  onOpenProject: (id: string) => void
  onFirstScan: (id: string) => void
  inert?: boolean
}

export default function HomeScene({
  onOpenProject,
  onFirstScan,
  inert,
}: Props) {
  const [target, setTarget] = useState<PlanetId>("flavouriq")
  const [preview, setPreview] = useState(false)
  const [scanKey, setScanKey] = useState(0)
  const timer = useRef<number | null>(null)

  const select = (id: PlanetId) => {
    setTarget(id)
    setPreview(true)
    setScanKey((k) => k + 1)
    onFirstScan(id)
  }

  const aim = (id: PlanetId) => {
    if (target === id && preview) return
    select(id)
  }
  const startHover = (id: PlanetId) => {
    cancelHover()
    timer.current = window.setTimeout(() => aim(id), HOVER_MS)
  }
  const cancelHover = () => {
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = null
  }
  useEffect(() => cancelHover, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const t = PLANETS[target]
  const project = byId(target)

  return (
    <div className="absolute inset-0" inert={inert}>
      {/* Celestial Orrays (2:316) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          alt=""
          className="absolute left-[816px] top-[-251px] size-[1079px] max-w-none opacity-45"
          src={A("82f02.svg")}
        />
        <img
          alt=""
          className="absolute left-[816px] top-[-137px] size-[1079px] max-w-none opacity-45"
          src={A("e1899.png")}
        />
        <img
          alt=""
          className="absolute left-[-771px] top-[-836px] h-[1830px] w-[1883px] max-w-none opacity-45"
          src={A("0eb35.svg")}
        />
        <img
          alt=""
          className="absolute left-[159px] top-[-770px] size-[1079px] max-w-none opacity-45"
          src={A("82f02.svg")}
        />
        <img
          alt=""
          className="absolute left-[-191px] top-[-102px] size-[614px] max-w-none opacity-45"
          src={A("aa05b.png")}
        />
      </div>

      <RealSwipeArt />
      <MindsproutArt />
      {/* Project 2 - FlavourIQ (2:380) */}
      <div
        aria-hidden
        className="absolute left-[603px] top-[183px] size-[225.32px]"
      >
        <div className="absolute inset-[0_-1.78%_-3.55%_-1.78%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("1b001.png")}
          />
        </div>
      </div>

      <PlanetLabels />

      {/* Target Circle (2:349) — glides to the scanned planet */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 size-[466.806px]"
        style={{
          transform: `translate(${t.cx - 232.66}px, ${t.cy - 232.66}px)`,
          transition: "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <TargetRings />
        {preview && (
          <div
            key={scanKey}
            className="absolute left-1/2 top-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="absolute inset-0 rounded-full border-2 border-cream"
              style={{ animation: "ping-ring 0.7s 0.3s ease-out both" }}
            />
          </div>
        )}
      </div>

      {/* Planet hit areas: hover (or tap) to target, click to open */}
      {(Object.keys(PLANETS) as PlanetId[]).map((id) => {
        const p = PLANETS[id]
        const locked = preview && target === id
        return (
          <button
            key={id}
            type="button"
            aria-label={
              locked ? `Open ${byId(id).title}` : `Target ${byId(id).title}`
            }
            className="group absolute size-[236px] cursor-pointer touch-manipulation select-none rounded-full outline-none"
            style={{ left: p.cx - 118, top: p.cy - 118 }}
            onPointerEnter={(e) => e.pointerType !== "touch" && startHover(id)}
            onPointerLeave={cancelHover}
            onFocus={() => aim(id)}
            onClick={() => {
              cancelHover()
              if (locked) onOpenProject(id)
              else select(id)
            }}
          >
            <span className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(254,230,168,0.18),transparent_60%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
            <span className="absolute inset-0 rounded-full ring-0 ring-cream/70 transition-[box-shadow] group-focus-visible:ring-2" />
            {/* glance: a light sweep across the planet when the target locks on */}
            {preview && target === id && (
              <span
                key={scanKey}
                className="absolute inset-[6px] overflow-hidden rounded-full"
              >
                <span
                  className="absolute -inset-y-1/4 left-0 w-full bg-gradient-to-r from-transparent via-white/45 to-transparent"
                  style={{ animation: "glance 0.9s 0.3s ease-in-out both" }}
                />
              </span>
            )}
          </button>
        )
      })}

      <Character
        look={(t.cx - 720) / 480}
        className="pointer-events-none absolute left-[600px] top-[612px] h-[420px] w-[240px]"
      />

      {preview && (
        <PreviewCard
          key={scanKey}
          project={project}
          index={PROJECTS.indexOf(project) + 1}
          style={{ left: t.card.x, top: t.card.y }}
          onOpen={() => onOpenProject(project.id)}
          onClose={() => setPreview(false)}
        />
      )}
    </div>
  )
}

function PreviewCard({
  project,
  index,
  style,
  onOpen,
  onClose,
}: {
  project: Project
  index: number
  style: React.CSSProperties
  onOpen: () => void
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-label={`${project.title} preview`}
      className="chamfer-sm absolute w-[340px] bg-gold p-[1.5px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      style={{
        ...style,
        animation: "fade-up 0.35s 0.25s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <div className="chamfer-sm relative bg-panel/95 px-6 pb-6 pt-4 backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-[6px] bg-copper" />
        <div className="mt-2 flex items-center justify-between font-sf text-[10.535px] uppercase tracking-[0.18em] text-gold">
          <span className="flex items-center gap-2">
            <span
              className="size-[6px] rounded-full bg-cream"
              style={{ animation: "blink 1.2s infinite" }}
            />
            Target acquired · {String(index).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="-mr-2 grid size-7 cursor-pointer place-items-center rounded-full text-steel transition-colors hover:text-white"
          >
            <img
              alt=""
              src={A("d761c.svg")}
              className="size-[18px] rotate-45"
            />
          </button>
        </div>
        <p className="mt-3 font-sf text-[10.535px] font-[457.8999938964844] leading-[normal] text-gold">
          {project.label}
        </p>
        <p className="font-sf-heavy text-[22px] font-[943] leading-[normal] text-white">
          {project.title}
        </p>
        <div className="mt-3 h-[3px] w-full bg-gold" />
        <p className="mt-4 font-sf text-[15.803px] font-[457.8999938964844] leading-[1.35] text-white/90">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-[4.214px]">
          {project.skills.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-[4px] bg-gold px-4 py-2 font-sf-bold text-[14px] font-[790] tracking-[0.08em] text-ink transition-[background,box-shadow] hover:bg-gold-soft hover:shadow-[0_0_18px_rgba(219,194,140,0.5)]"
        >
          VIEW PROJECT <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  )
}

export function TargetRings() {
  return (
    <>
      <div className="absolute left-[29.04px] top-[29.59px] flex size-[407.648px] items-center justify-center">
        <div className="-rotate-46 flex-none">
          <img
            alt=""
            className="block size-[288.295px] max-w-none"
            src={A("5fd5d.svg")}
          />
        </div>
      </div>
      <div className="absolute left-[16.68px] top-[17.76px] flex size-[432.387px] items-center justify-center">
        <div className="-rotate-46 flex-none">
          <div className="relative size-[305.79px]">
            <div className="absolute inset-[-0.12%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("08bef.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex size-[466.806px] items-center justify-center animate-spin-slow">
        <div className="-rotate-46 flex-none">
          <img
            alt=""
            className="block size-[330.132px] max-w-none"
            src={A("327f7.png")}
          />
        </div>
      </div>
      <div className="absolute left-[75.29px] top-[74.74px] flex size-[317.299px] items-center justify-center animate-spin-rev">
        <div className="-rotate-46 flex-none">
          <img
            alt=""
            className="block size-[224.398px] max-w-none"
            src={A("769e4.svg")}
          />
        </div>
      </div>
      <div className="absolute left-[30.66px] top-[31.74px] flex size-[404.421px] items-center justify-center">
        <div className="-rotate-46 flex-none">
          <img
            alt=""
            className="block size-[286.013px] max-w-none"
            src={A("61670.png")}
          />
        </div>
      </div>
    </>
  )
}

function RealSwipeArt() {
  return (
    <div aria-hidden className="pointer-events-none">
      <img
        alt=""
        className="absolute left-[68.7px] top-[389.3px] size-[30.6px] max-w-none"
        src={A("49392.svg")}
      />
      <img
        alt=""
        className="absolute left-[68.7px] top-[374px] size-[13.5px] max-w-none"
        src={A("ca991.svg")}
      />
      <img
        alt=""
        className="absolute left-[57px] top-[378.5px] size-[54px] max-w-none"
        src={A("d24c6.svg")}
      />
      <div className="absolute left-[111.39px] top-[383.52px] size-[212px]">
        <div className="absolute inset-[-21.42%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("4d115.svg")}
          />
        </div>
      </div>
      <div className="absolute left-[52.15px] top-[344px] flex h-[262.93px] w-[196.734px] items-center justify-center">
        <div className="flex-none rotate-[112.8deg]">
          <div className="relative h-[113.584px] w-[237.469px]">
            <div className="absolute inset-[-0.48%_-0.58%_-3.08%_-1.46%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("a5b2c.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[104px] top-[374px] h-[233px] w-[227.879px]">
        <div className="absolute inset-[-24.95%_-25.51%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("3f16d.svg")}
          />
        </div>
      </div>
      {/* Planet (4:653) */}
      <div className="absolute left-[105.89px] top-[378.71px] size-[225.317px] overflow-clip rounded-[204.611px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="pointer-events-none absolute inset-0 rounded-[204.611px] bg-[rgba(0,0,0,0.1)]" />
        <div className="absolute left-[-331px] top-[-135px] h-[496px] w-[909px]">
          <img
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            src={A("ab0f0.png")}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_15.087px_3.772px_3.772px_0px_rgba(255,255,255,0.25)]" />
      </div>
      <div className="absolute left-[129.44px] top-[446.02px] h-[152.887px] w-[223.442px]">
        <div className="absolute inset-[-2.45%_-1.67%_-2.29%_-1.57%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("948b7.svg")}
          />
        </div>
      </div>
      <img
        alt=""
        className="absolute left-[337.39px] top-[389.52px] h-[47.5px] w-[33px] max-w-none"
        src={A("2879f.svg")}
      />
      <div className="absolute left-[44px] top-[532.68px] flex h-[68.984px] w-[60.24px] items-center justify-center">
        <div className="flex-none rotate-7">
          <img
            alt=""
            className="block h-[63px] w-[52.957px] max-w-none"
            src={A("2987e.svg")}
          />
        </div>
      </div>
      <img
        alt=""
        className="absolute left-[268px] top-[567px] size-[73px] max-w-none"
        src={A("8327d.svg")}
      />
      <img
        alt=""
        className="absolute left-[324px] top-[612px] size-[22px] max-w-none"
        src={A("aa4f7.svg")}
      />
      <img
        alt=""
        className="absolute left-[280px] top-[580px] size-[48px] max-w-none"
        src={A("6f70a.svg")}
      />
    </div>
  )
}

export function SproutIdle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[85.121px] w-[54px] ${className}`}>
      {([
        ["-2.1% 0 4.49% 0", "ab14f.svg"],
        ["77.35% 5.87% 2.56% 9.05%", "dfd0f.svg"],
        ["54.37% 35.34% 37.78% 56.78%", "fbbe3.svg"],
        ["54.47% 57.5% 37.68% 34.62%", "dfdd9.svg"],
      ] as const).map(([inset, file]) => (
        <div key={file} className="absolute" style={{ inset }}>
          <img
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            src={A(file)}
          />
        </div>
      ))}
    </div>
  )
}

function MindsproutArt() {
  return (
    <div aria-hidden className="pointer-events-none">
      <div className="absolute left-[988px] top-[645px] size-[225.32px]">
        <div className="absolute inset-[-20.15%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("95163.svg")}
          />
        </div>
      </div>
      <img
        alt=""
        className="absolute left-[988px] top-[645px] size-[225.32px] max-w-none"
        src={A("1799c.png")}
      />
      <div className="absolute left-[1074px] top-[572.88px]">
        <SproutIdle />
      </div>
    </div>
  )
}

function Label({
  text,
  dot,
  line,
  box,
  flip,
}: {
  text: string
  dot: {
    x: number
    y: number
  }
  line: {
    x: number
    y: number
    w: number
    h: number
    src: string
    inset: string
  }
  box: {
    x: number
    y: number
  }
  flip?: boolean
}) {
  return (
    <div aria-hidden className="pointer-events-none">
      <img
        alt=""
        className={`absolute size-[33px] max-w-none ${
          flip ? "-scale-y-100" : ""
        }`}
        style={{ left: dot.x, top: dot.y }}
        src={A("2f016.svg")}
      />
      <img
        alt=""
        className={`absolute size-[16px] max-w-none ${
          flip ? "-scale-y-100" : ""
        }`}
        style={{ left: dot.x + 8, top: dot.y + (flip ? 8 : 9) }}
        src={A("f65be.svg")}
      />
      <div
        className={`absolute ${flip ? "-scale-y-100" : ""}`}
        style={{ left: line.x, top: line.y, width: line.w, height: line.h }}
      >
        <div className="absolute" style={{ inset: line.inset }}>
          <img alt="" className="block size-full max-w-none" src={line.src} />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center px-[40px] py-[17px]"
        style={{
          left: box.x,
          top: box.y,
          backgroundImage:
            "linear-gradient(-90deg, rgba(13, 17, 39, 0.133) 0%, rgba(0, 0, 0, 0.19) 46.154%, rgba(13, 17, 39, 0.133) 99.519%)",
        }}
      >
        <p className="whitespace-nowrap font-inter text-[30px] font-normal not-italic leading-[normal] text-white">
          {text}
        </p>
      </div>
    </div>
  )
}

function PlanetLabels() {
  const l1 = {
    w: 249,
    h: 126,
    src: A("6c919.svg"),
    inset: "-1.19% -0.6% -1.19% -1.03%",
  }
  return (
    <>
      <Label
        text="RealSwipe"
        dot={{ x: 148, y: 557 }}
        line={{ x: 94, y: 573, ...l1 }}
        box={{ x: 114, y: 640 }}
      />
      <Label
        text="FlavourIQ"
        dot={{ x: 647, y: 360 }}
        line={{ x: 593, y: 376, ...l1 }}
        box={{ x: 613, y: 443 }}
      />
      <Label
        text="Mindsprout"
        flip
        dot={{ x: 1049, y: 670 }}
        line={{
          x: 999,
          y: 559,
          w: 212,
          h: 127,
          src: A("be0f0.svg"),
          inset: "-1.18% -0.71% -1.18% -1.17%",
        }}
        box={{ x: 981, y: 502 }}
      />
    </>
  )
}
