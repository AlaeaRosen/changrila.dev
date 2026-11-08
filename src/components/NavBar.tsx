import { A } from "../data"

export type NavKey = "projects" | "labs" | "about"
type Item = NavKey | "home"

export const NAV_W = 688
export const NAV_H = 122

/** Icon centers in the 688×122 "Nav bar" frame (107:9); the Target ring snaps to these. */
const CENTER: Record<Item, number> = {
  home: 48,
  projects: 262.5,
  labs: 466,
  about: 656.5,
}

/** Compass "Project icon" (107:18), assembled around its center point. */
function ProjectIcon() {
  const cx = 48.5
  const cy = 48
  const tick = 40.6
  return (
    <>
      {/* star points */}
      <div
        className="absolute h-[42.419px] w-[12.344px]"
        style={{ left: cx - 6.172, top: cy - 42.419 }}
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={A("0facc.svg")}
        />
      </div>
      <div
        className="absolute flex h-[12.345px] w-[42.419px] items-center justify-center"
        style={{ left: cx, top: cy - 6.1725 }}
      >
        <div className="flex-none rotate-90">
          <div className="relative h-[42.419px] w-[12.345px]">
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={A("81850.svg")}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[42.419px] w-[12.344px] items-center justify-center"
        style={{ left: cx - 6.172, top: cy }}
      >
        <div className="flex-none rotate-180">
          <div className="relative h-[42.419px] w-[12.344px]">
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={A("7cda0.svg")}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[12.345px] w-[42.419px] items-center justify-center"
        style={{ left: cx - 42.419, top: cy - 6.1725 }}
      >
        <div className="flex-none -rotate-90">
          <div className="relative h-[42.419px] w-[12.345px]">
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={A("11294.svg")}
            />
          </div>
        </div>
      </div>

      {/* quarter arcs */}
      <div
        className="absolute h-[10.856px] w-[10.721px]"
        style={{ left: cx - 10.721, top: cy - 10.856 }}
      >
        <div className="absolute inset-[0_-0.22%_-0.19%_0]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("d7065.svg")}
          />
        </div>
      </div>
      <div
        className="absolute flex h-[10.72px] w-[10.857px] items-center justify-center"
        style={{ left: cx, top: cy - 10.72 }}
      >
        <div className="flex-none rotate-90">
          <div className="relative h-[10.857px] w-[10.72px]">
            <div className="absolute inset-[0_-0.22%_-0.18%_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("e3df7.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[10.856px] w-[10.721px] items-center justify-center"
        style={{ left: cx, top: cy }}
      >
        <div className="flex-none rotate-180">
          <div className="relative h-[10.856px] w-[10.721px]">
            <div className="absolute inset-[0_-0.22%_-0.18%_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("6aa9d.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[10.721px] w-[10.857px] items-center justify-center"
        style={{ left: cx - 10.857, top: cy }}
      >
        <div className="flex-none -rotate-90">
          <div className="relative h-[10.857px] w-[10.721px]">
            <div className="absolute inset-[0_-0.22%_-0.19%_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("f42ea.svg")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* tip ticks */}
      <div
        className="absolute flex h-[5.387px] w-0 items-center justify-center"
        style={{ left: cx, top: cy - tick - 5.387 }}
      >
        <div className="flex-none -rotate-90">
          <div className="relative h-0 w-[5.387px]">
            <div className="absolute inset-[-0.45px_4.17%_0_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("52247.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-0 w-[5.387px]"
        style={{ left: cx + tick, top: cy }}
      >
        <div className="absolute inset-[-0.45px_4.17%_0_0]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("21c02.svg")}
          />
        </div>
      </div>
      <div
        className="absolute flex h-[5.387px] w-0 items-center justify-center"
        style={{ left: cx, top: cy + tick }}
      >
        <div className="flex-none rotate-90">
          <div className="relative h-0 w-[5.387px]">
            <div className="absolute inset-[-0.45px_4.17%_0_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("92745.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-0 w-[5.387px] items-center justify-center"
        style={{ left: cx - tick - 5.387, top: cy }}
      >
        <div className="flex-none rotate-180">
          <div className="relative h-0 w-[5.387px]">
            <div className="absolute inset-[-0.45px_4.17%_0_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("ec6b5.svg")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ring */}
      <div
        className="absolute h-[53.967px] w-[54.258px]"
        style={{ left: cx - 27.129, top: cy - 26.9835 }}
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={A("8cbba.svg")}
        />
      </div>
    </>
  )
}

const LABEL =
  "pointer-events-none absolute -translate-x-1/2 whitespace-nowrap font-syne text-[14px] font-medium leading-[normal] text-white transition-colors duration-200 group-hover:text-cream group-focus-visible:text-cream"
const ICON =
  "pointer-events-none absolute transition-[filter] duration-200 group-hover:drop-shadow-[0_0_8px_rgba(254,230,168,0.55)] group-focus-visible:drop-shadow-[0_0_8px_rgba(254,230,168,0.8)]"

type Props = {
  active: NavKey | null
  scale: number
  onNavigate: (key: NavKey) => void
  onHome: () => void
}

/** Constellation nav bar (Figma 107:9). The Target ring marks the open page and only moves on navigation. */
export default function NavBar({ active, scale, onNavigate, onHome }: Props) {
  const current: Item = active ?? "home"
  const labelStyle = { fontSize: Math.max(14, 12 / scale) }
  const btn = (item: Item, left: number, width: number, label: string) => ({
    type: "button" as const,
    "aria-label": label,
    "aria-current": current === item ? "page" as const : undefined,
    onClick: () => (item === "home" ? onHome() : onNavigate(item)),
    className:
      "group absolute top-0 h-full cursor-pointer rounded-[12px] outline-none",
    style: { left, width },
  })

  return (
    <nav
      aria-label="Main"
      className="pointer-events-auto relative"
      style={{ width: NAV_W * scale, height: NAV_H * scale }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: NAV_W, height: NAV_H, transform: `scale(${scale})` }}
      >
        <div className="absolute left-[103px] top-[43.5px] h-[9px] w-[512.007px]">
          <img
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            src={A("40626.svg")}
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute top-0 size-[96px] transition-[left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ left: CENTER[current] - 48 }}
        >
          <img
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            src={A("9a821.svg")}
          />
        </div>

        <button {...btn("home", 0, 96, "Home")}>
          <span
            className={`${ICON} left-[17.653px] top-[28.5px] h-[38.999px] w-[60.694px]`}
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={A("9e4ac.svg")}
            />
          </span>
          <span
            className={`${LABEL} left-[48px] top-[101px]`}
            style={labelStyle}
          >
            Home
          </span>
        </button>

        <button {...btn("projects", 214, 97, "Projects")}>
          <span className={`${ICON} inset-0`}>
            <ProjectIcon />
          </span>
          <span
            className={`${LABEL} left-[48.5px] top-[100px]`}
            style={labelStyle}
          >
            Project
          </span>
        </button>

        <button {...btn("labs", 426, 80, "Labs")}>
          <span
            className={`${ICON} left-[25px] top-[21px] h-[53.301px] w-[30.577px]`}
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={A("54bd0.svg")}
            />
          </span>
          <span
            className={`${LABEL} left-[40px] top-[104px]`}
            style={labelStyle}
          >
            Labs
          </span>
        </button>

        <button {...btn("about", 610, 78, "About me")}>
          <span className={`${ICON} left-[17px] top-[24px] size-[59px]`}>
            <span className="absolute inset-[0_0_-0.93%_0]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={A("90934.svg")}
              />
            </span>
          </span>
          <span
            className={`${LABEL} left-[43.5px] top-[104px]`}
            style={labelStyle}
          >
            About me
          </span>
        </button>
      </div>
    </nav>
  )
}
