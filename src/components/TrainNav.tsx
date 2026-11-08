import { A } from "../data"
import Sprite from "./Sprite"

export type NavKey = "projects" | "labs" | "about"

interface Car {
  key: NavKey
  label: string
  /** Cut-away interior shown while the wagon is hovered. */
  open: string
}

const CARS: Car[] = [
  { key: "projects", label: "PROJECTS", open: A("wagon-open-projects.png") },
  { key: "labs", label: "LABS", open: A("wagon-open-labs.png") },
  { key: "about", label: "ABOUT ME", open: A("wagon-open-about.png") },
]

type Props = {
  active: NavKey | null
  onNavigate: (key: NavKey) => void
  onHome: () => void
}

/** Navigation bar drawn as the train itself: three carriages and the locomotive. */
export default function TrainNav({ active, onNavigate, onHome }: Props) {
  return (
    <nav
      aria-label="Main"
      className="pointer-events-auto relative flex items-end"
      style={{ gap: "clamp(2px, 0.4vw, 6px)" }}
    >
      {/* rail */}
      <div
        aria-hidden
        className="absolute -left-[4%] -right-[4%] bottom-[3px] h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#c8b06f]/70 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -left-[6%] -right-[6%] bottom-0 h-[2px] bg-[#0b0d14]/80"
      />

      {CARS.map(({ key, label, open }, i) => {
        const isActive = active === key
        return (
          <div
            key={key}
            className="relative flex items-end hover:z-20 focus-within:z-20"
          >
            <button
              type="button"
              onClick={() => onNavigate(key)}
              aria-current={isActive ? "page" : undefined}
              className="group relative block cursor-pointer outline-none"
              style={{ width: "clamp(84px, 11.2vw, 168px)" }}
            >
              <div
                className={`transition-[transform,filter] duration-300 ease-out ${
                  isActive
                    ? "-translate-y-[3px] drop-shadow-[0_0_14px_rgba(254,230,168,0.55)]"
                    : "group-hover:-translate-y-[2px] group-hover:drop-shadow-[0_0_10px_rgba(254,230,168,0.35)]"
                } group-focus-visible:drop-shadow-[0_0_12px_rgba(254,230,168,0.8)]`}
                style={{
                  animation: `bob ${2.4 + i * 0.2}s ease-in-out infinite`,
                }}
              >
                <div className="relative">
                  {/* Lights on only in the carriage you're in */}
                  {isActive ? (
                    <Sprite
                      crop="car"
                      className="w-full transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
                    />
                  ) : (
                    <img
                      alt=""
                      src={A("wagon-unlit.png")}
                      className="block w-full brightness-[0.88] transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
                    />
                  )}
                  {/* Opened wagon, matched to the closed car's roof-to-wheel height */}
                  <img
                    alt=""
                    src={open}
                    className="pointer-events-none absolute bottom-[3.2%] left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 origin-bottom scale-[0.94] opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
                  />
                </div>
              </div>
              {/* label tag while the plate is hidden behind the open view */}
              <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[3px] border border-gold/60 bg-panel/90 px-2 py-0.5 font-sf text-[11px] tracking-[0.12em] text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
              </span>
              {/* brass name plate over the carriage's ornament panel */}
              <span
                className={`absolute left-1/2 top-[58%] -translate-x-1/2 whitespace-nowrap rounded-[3.239px] border-[1.867px] px-[0.6em] py-[0.15em] font-sf font-[457.8999938964844] leading-[normal] transition-[color,border-color,opacity] duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ${
                  isActive
                    ? "border-cream bg-[#242329] text-cream shadow-[0_0_10px_rgba(254,230,168,0.45)]"
                    : "border-[#3c3b41] bg-[#242329]/95 text-white group-hover:border-gold group-hover:text-cream"
                } shadow-[inset_0px_-3px_2px_0px_rgba(0,0,0,0.31)]`}
                style={{
                  fontSize: "clamp(9px, 1.05vw, 15px)",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </span>
            </button>
            {/* coupler */}
            <span
              aria-hidden
              className="absolute -right-[7px] bottom-[18%] h-[3px] w-[10px] rounded-full bg-[#7a6232]"
            />
          </div>
        )
      })}

      <button
        type="button"
        onClick={onHome}
        aria-label="Home"
        aria-current={active === null ? "page" : undefined}
        className="group relative block cursor-pointer outline-none"
        style={{ width: "clamp(96px, 12.6vw, 190px)" }}
      >
        {/* steam / lantern spark from the chimney */}
        <span aria-hidden className="absolute right-[24%] top-[2%]">
          {[0, 1, 2].map((n) => (
            <span
              key={n}
              className="absolute size-[7px] rounded-full bg-cream/80 blur-[1.5px]"
              style={{ animation: `steam 2.8s ${n * 0.9}s ease-out infinite` }}
            />
          ))}
        </span>
        <div
          className={`transition-[transform,filter] duration-300 group-hover:-translate-y-[2px] group-focus-visible:drop-shadow-[0_0_12px_rgba(254,230,168,0.8)] ${
            active === null
              ? "drop-shadow-[0_0_14px_rgba(254,230,168,0.45)]"
              : ""
          }`}
          style={{ animation: "bob 2.2s ease-in-out infinite" }}
        >
          <Sprite crop="loco" flip className="w-full" />
        </div>
        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[3px] border border-gold/60 bg-panel/90 px-2 py-0.5 font-sf text-[11px] tracking-[0.12em] text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          HOME
        </span>
      </button>
    </nav>
  )
}
