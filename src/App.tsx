import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { Hand } from "lucide-react"
import { A, PROJECTS } from "./data"
import AboutOverlay from "./components/AboutOverlay"
import { ChanBadge } from "./components/Chan"
import HomeScene, { PLANETS } from "./components/HomeScene"
import LabsOverlay from "./components/LabsOverlay"
import ChangelogOverlay from "./components/ChangelogOverlay"
import ProfileCard from "./components/ProfileCard"
import ProjectDetail from "./components/ProjectDetail"
import ProjectsOverlay from "./components/ProjectsOverlay"
import Starfield from "./components/Starfield"
import NavBar, { NAV_H, NAV_W, type NavKey } from "./components/NavBar"

type Route = { view: "home" } | { view: "projects" } | {
  view: "project"
  id: string
} | { view: "labs" } | { view: "about" } | { view: "changelog" }

function parse(hash: string): Route {
  const [, a, b] = hash.replace(/^#/, "").split("/")
  if (a === "projects")
    return b && PROJECTS.some((p) => p.id === b)
      ? { view: "project", id: b }
      : { view: "projects" }
  if (a === "labs") return { view: "labs" }
  if (a === "about") return { view: "about" }
  if (a === "changelog") return { view: "changelog" }
  return { view: "home" }
}

function useRoute() {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash))
  useEffect(() => {
    const sync = () => setRoute(parse(window.location.hash))
    window.addEventListener("hashchange", sync)
    window.addEventListener("popstate", sync)
    return () => {
      window.removeEventListener("hashchange", sync)
      window.removeEventListener("popstate", sync)
    }
  }, [])
  const go = useCallback((path: string) => {
    const url = path
      ? `#${path}`
      : window.location.pathname + window.location.search
    window.history.pushState(null, "", url)
    setRoute(parse(path ? `#${path}` : ""))
  }, [])
  return [route, go] as const
}

const STAGE_W = 1440
const WINDOW_H = 900 // window sill sits at y=900 in the 1440×1024 frame
const BAR_H = 14

function useLayout(compactNav: boolean) {
  const measure = () => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const mobile = vw < 760
    // Nav bar keeps clear of the CHAN badge on desktop; phones move the badge up.
    const navScaleCap = compactNav ? 0.52 : 0.68
    const navHeightCap = (vh * (compactNav ? 0.1 : 0.14)) / NAV_H
    const navS = Math.min(
      mobile ? 0.72 : navScaleCap,
      navHeightCap,
      (vw - (mobile ? 24 : 260)) / NAV_W,
    )
    const navH = NAV_H * navS
    const wallH = navH + Math.max(10, navH * 0.16)
    const sky = vh - wallH - BAR_H
    const widthScale = vw / STAGE_W
    const heightScale = sky / WINDOW_H
    const s = mobile
      ? Math.max(widthScale, heightScale * 0.8)
      : Math.min(widthScale, Math.max(heightScale, widthScale * 0.82))
    return {
      vw,
      vh,
      s,
      wallH,
      navS,
      navH,
      sky,
      mobile,
      stageTop: sky - WINDOW_H * s,
      stageW: STAGE_W * s,
    }
  }
  const [l, setL] = useState(measure)
  useEffect(() => {
    const on = () => setL(measure())
    on()
    window.addEventListener("resize", on)
    return () => window.removeEventListener("resize", on)
  }, [compactNav])
  return l
}

export default function App() {
  const [route, go] = useRoute()
  const changelog = route.view === "changelog"
  const overlay = route.view !== "home" && !changelog
  const L = useLayout(overlay)
  const pan = useRef<HTMLDivElement>(null)
  const [scanned, setScanned] = useState(
    () => localStorage.getItem("scanned") === "1",
  )

  const active: NavKey | null =
    route.view === "projects" || route.view === "project"
      ? "projects"
      : route.view === "labs" || route.view === "about"
        ? route.view
        : null

  // Center the panorama on phones.
  useLayoutEffect(() => {
    const el = pan.current
    if (el && L.mobile) el.scrollLeft = (L.stageW - L.vw) / 2
  }, [L.mobile, L.stageW, L.vw])

  const onScan = (id: string) => {
    if (!scanned) {
      setScanned(true)
      localStorage.setItem("scanned", "1")
    }
    const el = pan.current
    const p = PLANETS[(id as keyof typeof PLANETS)]
    if (el && L.mobile && p) {
      const focus = ((p.cx + p.card.x + 170) / 2) * L.s
      el.scrollTo({ left: focus - L.vw / 2, behavior: "smooth" })
    }
  }

  const close = () => go("")
  const navBottom = (L.wallH - L.navH) / 2

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#0a0c22] select-none">
      <Starfield />

      {/* The window: the celestial scene behind the glass */}
      <div
        ref={pan}
        className={`absolute inset-x-0 top-0 ${
          L.mobile
            ? "no-scrollbar overflow-x-auto overflow-y-hidden"
            : "overflow-hidden"
        }`}
        style={{ height: L.sky }}
      >
        <div
          className="relative h-full"
          style={{ width: Math.max(L.stageW, L.vw) }}
        >
          <div
            className="absolute origin-top-left"
            style={{
              width: STAGE_W,
              height: 1024,
              left: Math.max(0, (L.vw - L.stageW) / 2),
              top: L.stageTop,
              transform: `scale(${L.s})`,
            }}
          >
            <HomeScene
              inert={overlay}
              onOpenProject={(id) => go(`/projects/${id}`)}
              onFirstScan={onScan}
            />
          </div>
        </div>
        {/* digital-window lattice (Figma "Pattern" 22:768), kept faint */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 opacity-[0.09] mix-blend-screen"
          style={{
            height: L.sky,
            backgroundImage: `url(${A("9a313.svg")})`,
            backgroundSize: "53.75px 113.32px",
            maskImage:
              "radial-gradient(120% 100% at 50% 45%, rgba(0,0,0,0.55) 30%, #000 100%)",
          }}
        />
        {/* glass reflection + vignette */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0"
          style={{
            height: L.sky,
            background:
              "linear-gradient(115deg, rgba(199,221,253,0.05) 0%, transparent 28%, transparent 62%, rgba(199,221,253,0.04) 70%, transparent 78%), radial-gradient(120% 90% at 50% 40%, transparent 60%, rgba(4,6,18,0.6) 100%)",
          }}
        />
      </div>

      {/* Window sill + carriage wall */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{ height: L.wallH + BAR_H }}
      >
        <div className="h-[14px] border-y border-[#3a3324] bg-gradient-to-b from-[#6b5a35] via-[#2b2618] to-[#16130d] shadow-[0_-6px_18px_rgba(201,168,76,0.12)]" />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            top: BAR_H,
            background:
              "radial-gradient(60% 120% at 50% 0%, rgba(201,168,76,0.08), transparent 70%), linear-gradient(#141428, #0b0b18 60%, #07070f)",
          }}
        >
          <div className="absolute inset-x-0 top-[38%] h-px bg-gold/15" />
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute top-[18%] size-[4px] rounded-full bg-[#3b3424] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
              style={{ left: `${(i + 0.5) * (100 / 24)}%` }}
            />
          ))}
        </div>
      </div>

      {/* HUD */}
      <div
        className="absolute left-[clamp(12px,2vw,28px)] top-[clamp(12px,2.4vh,28px)] origin-top-left"
        style={{
          transform: `scale(${Math.min(0.82, Math.max(0.58, L.s * 0.82))})`,
        }}
      >
        <ProfileCard onClick={() => go("/about")} />
      </div>

      {!scanned && !overlay && (
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/50 bg-[rgba(5,12,24,0.7)] px-4 py-2 font-sf text-[13px] tracking-[0.04em] text-cream backdrop-blur-sm"
          style={{
            bottom: L.wallH + BAR_H + 16,
            animation: "fade-up 0.6s 1.2s both",
          }}
        >
          <Hand size={15} className="mr-2 inline -translate-y-px" />
          {L.mobile ? "Tap" : "Hover"} a planet to target it
          {L.mobile ? ", swipe to look around" : ""}
        </div>
      )}

      {/* Backdrop for overlays */}
      <div
        aria-hidden
        onClick={close}
        className={`absolute inset-0 bg-[rgba(4,6,18,0.55)] backdrop-blur-[3px] transition-opacity duration-500 ${
          overlay ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {changelog && (
        <div aria-hidden className="absolute inset-0" onClick={close} />
      )}

      <div
        className={
          L.mobile
            ? "absolute right-3 top-3 origin-top-right scale-[0.8]"
            : "absolute"
        }
        style={
          L.mobile
            ? undefined
            : {
                left: "clamp(16px,2vw,32px)",
                bottom: Math.max(10, (L.wallH - 74) / 2),
              }
        }
      >
        <ChanBadge onClick={() => (changelog ? close() : go("/changelog"))} />
      </div>

      {/* Constellation navigation */}
      <div
        className="pointer-events-none absolute inset-x-0 flex justify-center"
        style={{ bottom: navBottom }}
      >
        <NavBar
          active={active}
          scale={L.navS}
          onNavigate={(k) => go(k === "about" ? "/about" : `/${k}`)}
          onHome={close}
        />
      </div>

      {overlay && (
        <div
          className="pointer-events-none absolute inset-x-0 px-[clamp(20px,7vw,110px)]"
          style={{ top: "max(16px, 3vh)", bottom: L.wallH + BAR_H + 10 }}
        >
          {route.view === "projects" && (
            <ProjectsOverlay
              onClose={close}
              onOpen={(id) => go(`/projects/${id}`)}
            />
          )}
          {route.view === "project" && (
            <ProjectDetail
              project={PROJECTS.find((p) => p.id === route.id)!}
              onBack={() => go("/projects")}
              onClose={close}
              onNext={(id) => go(`/projects/${id}`)}
            />
          )}
          {route.view === "labs" && <LabsOverlay onClose={close} />}
          {route.view === "about" && <AboutOverlay onClose={close} />}
        </div>
      )}
      {changelog && (
        <div
          className="pointer-events-none absolute"
          style={
            L.mobile
              ? { right: 12, top: 12 + 74 * 0.8 + 10 }
              : {
                  left: "clamp(16px,2vw,32px)",
                  bottom: Math.max(10, (L.wallH - 74) / 2) + 74 + 14,
                }
          }
        >
          <ChangelogOverlay onClose={close} mobile={L.mobile} />
        </div>
      )}
    </main>
  )
}
