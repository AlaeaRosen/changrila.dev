import { useEffect, useId, useRef, useState } from "react"
import { A, PROJECTS, type Category, type Cover, type Project } from "../data"
import Chip from "./Chip"
import Frame, { FilterPill } from "./Frame"
import ScrollRail from "./ScrollRail"

const FILTERS: ("ALL" | Category)[] = ["ALL", "UX/UI", "DATA", "DEV"]

export default function ProjectsOverlay({
  onClose,
  onOpen,
}: {
  onClose: () => void
  onOpen: (id: string) => void
}) {
  const [filter, setFilter] = useState<"ALL" | Category>("ALL")
  const scroller = useRef<HTMLDivElement>(null)
  const list =
    filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
  const count = (f: typeof FILTERS[number]) =>
    f === "ALL"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === f).length

  return (
    <Frame title="PROJECTS" label="Projects" onClose={onClose}>
      <div className="flex h-full flex-col">
        <div className="no-scrollbar flex shrink-0 gap-[2px] overflow-x-auto pl-[clamp(22px,3.6vw,46px)] pr-6 pt-[clamp(12px,1.6vw,22px)]">
          {FILTERS.map((f) => (
            <FilterPill
              key={f}
              active={filter === f}
              onClick={() => setFilter(f)}
            >
              {f} ({count(f)})
            </FilterPill>
          ))}
        </div>
        <div className="relative mt-[clamp(16px,2.6vw,36px)] min-h-0 flex-1">
          {/* Stop the scroll area above the frame's bottom gold trim */}
          <div
            ref={scroller}
            className="no-scrollbar absolute inset-x-0 top-0 bottom-[clamp(48px,9%,76px)] overflow-y-auto pb-6 pl-[max(36px,6.2%)] pr-[clamp(44px,5vw,72px)] pt-[6px] [mask-image:linear-gradient(to_bottom,#000_calc(100%-28px),transparent)]"
          >
            <ul className="grid grid-cols-1 items-start gap-x-[clamp(16px,2.2vw,36px)] gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <li
                  key={p.id}
                  style={{
                    animation: `fade-up 0.5s ${0.05 * i}s cubic-bezier(0.22,1,0.36,1) both`,
                  }}
                >
                  <ProjectCard project={p} onOpen={() => onOpen(p.id)} />
                </li>
              ))}
            </ul>
          </div>
          <ScrollRail
            target={scroller}
            className="absolute bottom-[clamp(48px,9%,76px)] right-[clamp(12px,1.8vw,26px)] top-0"
          />
        </div>
      </div>
    </Frame>
  )
}

const CARD_W = 359.786
const CARD_H = 527.826
/** Picture outline from the "Cadre" vector (top-right and bottom-left chamfers). */
const PICTURE_CLIP =
  "polygon(0 0, 325.56px 0, 100% 58.12px, 100% 100%, 34.23px 100%, 0 295.3px)"

/**
 * Lays out the card at its native Figma width and scales it to the column.
 * Returns the scale and the card's natural (unscaled) height, which grows
 * when the skills wrap onto extra rows.
 */
function useFitCard() {
  const outer = useRef<HTMLButtonElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(CARD_H)
  useEffect(() => {
    const o = outer.current
    const i = inner.current
    if (!o || !i) return
    const ro = new ResizeObserver(() => {
      setScale(o.clientWidth / CARD_W)
      setHeight(Math.max(CARD_H, i.offsetHeight))
    })
    ro.observe(o)
    ro.observe(i)
    return () => ro.disconnect()
  }, [])
  return { outer, inner, scale, height }
}

/** Background card (10fa6) redrawn for any height so the chamfers never stretch. */
function CardPanel({ height }: { height: number }) {
  const id = useId()
  const b = height + 1.58032
  const d = `M1.58032 1.58032H327.141L361.366 58.9986V${b}H35.8059L1.58032 ${b - 47.4096}V1.58032Z`
  return (
    <svg
      aria-hidden
      className="absolute left-[-1.58px] top-[-1.58px] block"
      width={362.946}
      height={height + 3.16064}
      fill="none"
    >
      <path d={d} fill="#13101E" />
      <mask
        id={id}
        maskUnits="userSpaceOnUse"
        x={-0.42}
        y={-0.42}
        width={364}
        height={height + 5}
        fill="black"
      >
        <rect
          fill="white"
          x={-0.42}
          y={-0.42}
          width={364}
          height={height + 5}
        />
        <path d={d} />
      </mask>
      <path d={d} stroke="#C9A84C" strokeWidth={3.16064} mask={`url(#${id})`} />
    </svg>
  )
}

/** Card Project (4:705): chamfered panel, framed key visual, details, skills. */
export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  const { outer, inner, scale, height } = useFitCard()
  return (
    <button
      ref={outer}
      type="button"
      onClick={onOpen}
      aria-label={`${project.title}, ${project.label}`}
      style={{ height: height * scale }}
      className="group relative mx-auto block w-full max-w-[400px] cursor-pointer text-left outline-none transition-[transform,filter] duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_18px_rgba(201,168,76,0.35)] focus-visible:drop-shadow-[0_0_14px_rgba(254,230,168,0.8)]"
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: CARD_W, transform: `scale(${scale})` }}
      >
        <CardPanel height={height} />
        {/* Picture: key visual clipped to the cadre outline, then the cadre */}
        <div
          className="absolute left-0 top-0 h-[323.439px] w-[359.786px] overflow-hidden"
          style={{ clipPath: PICTURE_CLIP }}
        >
          <CoverArt
            cover={project.cover}
            className="transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="absolute left-0 top-0 h-[323.439px] w-[359.786px]">
          <div className="absolute inset-[-0.49%_-0.44%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={A("30a1d.svg")}
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 h-[81.65px] w-[359.786px]">
          <div className="absolute inset-[-1.94%_-0.44%_-6.86%_-0.44%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={A("1e6ca.svg")}
            />
          </div>
        </div>

        <p className="absolute left-[22.12px] top-[333.97px] w-[277.609px] font-sf text-[10.535px] font-[457.8999938964844] leading-[normal] text-gold [word-break:break-word]">
          {project.label}
        </p>
        <p className="absolute left-[22.12px] top-[346.62px] w-[277.609px] font-sf-heavy text-[15.803px] font-[943] leading-[normal] text-white [word-break:break-word]">
          {project.title}
        </p>
        <div className="absolute left-[15.8px] top-[377.7px] h-0 w-[322.912px]">
          <div className="absolute inset-[-3.16px_0_0_0]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={A("92b96.svg")}
            />
          </div>
        </div>
        <p className="absolute left-[15.8px] top-[402.45px] line-clamp-4 w-[335.028px] font-sf text-[15.803px] font-[457.8999938964844] leading-[normal] text-white [word-break:break-word]">
          {project.summary}
        </p>
        {/* Skills sit in flow so extra rows push the card's bottom edge down */}
        <div ref={inner} className="relative pb-[9.907px] pt-[490px]">
          <div className="ml-[43.9px] flex min-h-[27.919px] w-[277.083px] flex-wrap items-center gap-[4.214px]">
            {project.skills.slice(0, 3).map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}

export function CoverArt({
  cover,
  className = "",
}: {
  cover: Cover
  className?: string
}) {
  if (cover.kind === "image") {
    return (
      <img
        alt={cover.alt}
        src={cover.src}
        className={`absolute inset-0 size-full object-cover ${cover.imageClassName ?? ""} ${className}`}
      />
    )
  }
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(90% 80% at 50% 55%, ${cover.tint} 0%, #0b0c22 70%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 78% 18%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 64% 82%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 30% 70%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 88% 60%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 45% 12%, #fff 50%, transparent 51%)",
        }}
      />
      <img
        alt={cover.alt}
        src={cover.src}
        className={
          cover.imageClassName ??
          "absolute left-1/2 top-1/2 h-[78%] max-w-none -translate-x-1/2 -translate-y-[46%]"
        }
      />
    </div>
  )
}
