import { useEffect, useRef, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  GitBranch,
  Globe,
  MousePointer2,
  PenTool,
} from "lucide-react"
import { PROJECTS, type Project } from "../data"
import Chip from "./Chip"
import FlavourIqCaseStudy from "./FlavourIqCaseStudy"
import Frame from "./Frame"
import MindsproutCaseStudy from "./MindsproutCaseStudy"
import RealswipeCaseStudy from "./RealswipeCaseStudy"
import ScrollRail from "./ScrollRail"
import { CoverArt } from "./ProjectsOverlay"

type Props = {
  project: Project
  onBack: () => void
  onClose: () => void
  onNext: (id: string) => void
}

export default function ProjectDetail({
  project,
  onBack,
  onClose,
  onNext,
}: Props) {
  const scroller = useRef<HTMLDivElement>(null)
  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length]

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 })
  }, [project.id])

  return (
    <Frame
      label={`${project.title} case study`}
      onClose={onClose}
      header={
        <button
          type="button"
          onClick={onBack}
          className="group mt-[22px] flex cursor-pointer items-center gap-3 font-sf text-[16px] text-white/85 outline-none transition-colors hover:text-cream focus-visible:text-cream"
        >
          <span className="grid size-[34px] place-items-center rounded-[6px] border border-gold/70 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
            <ArrowLeft size={18} />
          </span>
          Back to Projects
        </button>
      }
    >
      <div className="relative h-full">
        <div
          ref={scroller}
          className="no-scrollbar h-full overflow-x-hidden overflow-y-auto pb-16 pl-[clamp(24px,5vw,79px)] pr-[clamp(40px,7vw,110px)]"
        >
          {project.id === "realswipe" ? (
            <RealswipeCaseStudy
              key={project.id}
              onNext={() => onNext(next.id)}
            />
          ) : project.id === "flavouriq" ? (
            <FlavourIqCaseStudy
              key={project.id}
              onNext={() => onNext(next.id)}
            />
          ) : project.id === "mindsprout" ? (
            <MindsproutCaseStudy
              key={project.id}
              onNext={() => onNext(next.id)}
            />
          ) : (
            <div
              key={project.id}
              className="mx-auto max-w-[980px]"
              style={{ animation: "fade-in 0.5s both" }}
            >
              <div data-scroll-section="Overview">
                <Hero project={project} />
                <Context project={project} />
              </div>
              {project.storyHeading !== "" && (
                <Divider>
                  {project.storyHeading ?? "STORYTELLING NARRATIVE"}
                </Divider>
              )}
              <div data-scroll-section="Story">
                <Story project={project} />
              </div>
              <div data-scroll-section="Metrics">
                <Metrics project={project} />
              </div>
              <div data-scroll-section="Key Decisions">
                <Features project={project} />
              </div>
              <div data-scroll-section="Architecture">
                <Architecture project={project} />
              </div>
              <div data-scroll-section="Learnings">
                <Learnings project={project} />
              </div>
              <div data-scroll-section="Prototype">
                <Prototype project={project} />
              </div>
              <div data-scroll-section="Links">
                <Footer project={project} next={next} onNext={onNext} />
              </div>
            </div>
          )}
        </div>

        <ScrollRail
          target={scroller}
          className="absolute bottom-[clamp(48px,9%,76px)] right-[clamp(12px,1.8vw,26px)] top-0"
        />
      </div>
    </Frame>
  )
}

function Hero({ project }: { project: Project }) {
  return (
    <section className="relative pt-4">
      <div className="chamfer-sm relative h-[clamp(220px,34vw,380px)] overflow-hidden border border-gold/40 bg-panel">
        <CoverArt cover={project.cover} />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
      </div>
      <div className="relative -mt-[clamp(60px,9vw,110px)] ml-[clamp(12px,3vw,40px)] max-w-[560px] bg-white px-6 py-5 text-ink shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <h1 className="font-display text-[clamp(26px,3.4vw,40px)] uppercase leading-[1.05]">
          {project.title}
        </h1>
        <span className="mt-3 inline-block rounded-full border border-ink/50 px-3 py-[2px] font-sf text-[13px]">
          {project.label}
        </span>
        <div className="mt-3 flex flex-wrap gap-[6px]">
          {project.skills.map((s) => (
            <Chip key={s} active>
              {s}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  )
}

function Context({ project }: { project: Project }) {
  return (
    <section className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
      <dl className="space-y-2 border-l-2 border-gold pl-5 font-sf text-[16px] leading-[1.45] text-white/90">
        {([
          ["What", project.what],
          ["Who", project.who],
          ["Context", project.context],
        ] as const).map(([k, v]) => (
          <div key={k}>
            <dt className="inline text-gold">{k}: </dt>
            <dd className="inline">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="border-l-2 border-gold pl-5 font-sf text-[16px] leading-[1.45]">
        <p className="text-gold">My Role</p>
        <p className="text-white">{project.role}</p>
        <p className="text-white/70">{project.timeline}</p>
      </div>
    </section>
  )
}

function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 flex items-center gap-5">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
      <h2 className="font-display text-[clamp(18px,2vw,24px)] tracking-[0.06em] text-white">
        {children}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}

function Placeholder({
  caption,
  children,
}: {
  caption: string
  children?: React.ReactNode
}) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden border border-white/40 bg-ink/60">
        {children ?? (
          <svg
            className="absolute inset-0 size-full text-white/25"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}
      </div>
      <figcaption className="mt-2 text-center font-sf text-[12px] uppercase tracking-[0.08em] text-white/70">
        {caption}
      </figcaption>
    </figure>
  )
}

function Chapter({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title?: string
  body: string
}) {
  return (
    <div className="font-sf">
      {title && (
        <h3 className="mb-2 font-display text-[22px] text-gold">{title}</h3>
      )}
      <p className="text-[15px] text-gold-soft">{eyebrow}</p>
      <p className="mt-2 text-[16px] leading-[1.5] text-white/85">{body}</p>
    </div>
  )
}

function Story({ project }: { project: Project }) {
  return (
    <div className="space-y-14">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <Placeholder caption="Problem scenario screenshot" />
        <Chapter
          eyebrow="Chapter 1: The Problem"
          body={project.chapters.problem}
        />
      </section>

      <section className="grid items-center gap-8 md:grid-cols-2">
        <Chapter
          title="THE EXPLORATION"
          eyebrow="Chapter 2: Defining the Concept"
          body={project.chapters.exploration}
        />
        <Placeholder caption="Wireframes, sketches, iterations">
          <div className="grid size-full grid-cols-2 gap-3 p-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-[6px] border border-white/30 p-2"
              >
                <div
                  className={`h-1/3 border border-white/30 ${
                    i % 2 ? "w-full" : "w-2/3"
                  }`}
                />
                <div className="h-[3px] w-3/4 bg-white/30" />
                <div className="h-[3px] w-1/2 bg-white/30" />
                <div className="h-[3px] w-2/3 bg-white/20" />
              </div>
            ))}
          </div>
        </Placeholder>
      </section>

      <section className="text-center">
        <h3 className="font-display text-[clamp(22px,2.6vw,30px)] text-white">
          THE SOLUTION
        </h3>
        <p className="mt-1 font-sf text-[15px] text-gold-soft">
          Chapter 3: The Breakthrough
        </p>
        <p className="mx-auto mt-2 max-w-[620px] font-sf text-[16px] leading-[1.5] text-white/85">
          {project.chapters.solution}
        </p>
        <figure className="mx-auto mt-6 max-w-[760px]">
          <div className="relative aspect-[16/9] overflow-hidden border border-gold bg-ink shadow-[0_0_30px_rgba(201,168,76,0.35),inset_0_0_30px_rgba(201,168,76,0.15)]">
            <CoverArt cover={project.cover} />
            {([
              "left-0 top-0",
              "right-0 top-0",
              "left-0 bottom-0",
              "right-0 bottom-0",
            ] as const).map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} size-3 bg-cream shadow-[0_0_10px_#fee6a8]`}
              />
            ))}
          </div>
          <figcaption className="mt-2 font-sf text-[12px] uppercase tracking-[0.08em] text-white/70">
            Finalized UI concept reveal
          </figcaption>
        </figure>
      </section>
    </div>
  )
}

function Metrics({ project }: { project: Project }) {
  return (
    <section className="mt-14 grid grid-cols-1 divide-y divide-gold/40 rounded-[6px] border border-gold/70 bg-ink/50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {project.metrics.map((m) => (
        <div key={m.label} className="px-6 py-5 text-center">
          <p className="font-display text-[clamp(26px,3vw,36px)] text-gold-soft">
            {m.value}
          </p>
          <p className="font-sf text-[13px] text-white/75">{m.label}</p>
        </div>
      ))}
    </section>
  )
}

function Features({ project }: { project: Project }) {
  const [a, b, c, d] = project.decisions
  const Note = ({
    n,
    side,
  }: {
    n: typeof project.decisions[number]
    side: "l" | "r"
  }) => (
    <div
      className={`relative font-sf ${
        side === "l" ? "md:pr-10 md:text-right" : "md:pl-10"
      }`}
    >
      <span
        aria-hidden
        className={`absolute top-3 hidden h-px w-8 bg-gold md:block ${
          side === "l" ? "right-0" : "left-0"
        }`}
      />
      <p className="text-[14px] text-gold">{n.title}</p>
      <p className="text-[14px] leading-[1.4] text-white/80">{n.body}</p>
    </div>
  )
  return (
    <section className="mt-16">
      <h3 className="mb-8 text-center font-display text-[22px] text-white">
        FEATURE SHOWCASE
      </h3>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="order-2 space-y-10 md:order-1">
          {a && <Note n={a} side="l" />}
          {b && <Note n={b} side="l" />}
        </div>
        <div className="order-1 mx-auto w-[190px] rounded-[30px] border-2 border-white/60 bg-ink p-3 md:order-2">
          <div className="mx-auto mb-3 h-[6px] w-16 rounded-full bg-white/30" />
          <div className="space-y-2 rounded-[18px] border border-white/20 p-3">
            <div className="h-2 w-2/3 rounded bg-gold/80" />
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-6 rounded-[6px] border border-white/25"
              />
            ))}
            <div className="mx-auto h-5 w-1/2 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="order-3 space-y-10">
          {c && <Note n={c} side="r" />}
          {d && <Note n={d} side="r" />}
        </div>
      </div>
    </section>
  )
}

function Architecture({ project }: { project: Project }) {
  const [hover, setHover] = useState<number | null>(null)
  const [open, setOpen] = useState<number | null>(null)
  const layers = project.architecture
  const active = hover ?? open
  return (
    <section className="mt-20">
      <h3 className="font-display text-[clamp(24px,2.8vw,32px)] text-white">
        APP ARCHITECTURE
      </h3>
      <p className="font-sf text-[14px] text-white/60">
        Exploded view. Hover a layer, click to expand it.
      </p>
      <div className="mt-8 grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <ol className="flex flex-col gap-3">
          {layers.map((l, i) => (
            <li key={l.name}>
              <button
                type="button"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className={`w-full cursor-pointer rounded-[3px] border px-3 py-1 text-left font-sf text-[13px] uppercase tracking-[0.06em] transition-colors ${
                  active === i
                    ? "border-gold bg-gold text-ink"
                    : "border-gold/60 bg-copper/20 text-gold-soft"
                }`}
              >
                {l.name}
              </button>
              {open === i && (
                <p
                  className="mt-2 max-w-[260px] font-sf text-[14px] leading-[1.4] text-white/80"
                  style={{ animation: "fade-in 0.3s both" }}
                >
                  {l.detail}
                </p>
              )}
            </li>
          ))}
        </ol>
        <div className="relative mx-auto h-[clamp(300px,36vw,420px)] w-full max-w-[460px] [perspective:1200px]">
          {layers.map((l, i) => {
            const on = active === i
            const gap = 100 / (layers.length + 1)
            return (
              <button
                key={l.name}
                type="button"
                tabIndex={-1}
                aria-hidden
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setOpen(open === i ? null : i)}
                className="absolute left-1/2 h-[46%] w-[68%] cursor-pointer"
                style={{
                  top: `${gap * (i + 0.2)}%`,
                  transform: `translate(-50%, -30%) rotateX(58deg) rotateZ(-38deg) translateZ(${
                    on ? 26 : 0
                  }px)`,
                  transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                  zIndex: layers.length - i,
                }}
              >
                <span
                  className={`absolute inset-0 rounded-[10px] border-2 transition-[border-color,background,box-shadow] ${
                    on
                      ? "border-gold bg-[#2a2210]/90 shadow-[0_0_30px_rgba(201,168,76,0.55)]"
                      : "border-white/50 bg-ink/85"
                  }`}
                >
                  <span className="absolute left-[10%] top-[16%] h-[8%] w-[40%] rounded bg-white/25" />
                  <span className="absolute left-[10%] top-[34%] h-[6%] w-[70%] rounded bg-white/15" />
                  <span className="absolute left-[10%] top-[48%] h-[6%] w-[55%] rounded bg-white/15" />
                  <span
                    className={`absolute bottom-[14%] right-[12%] size-[18%] rounded-full border-2 ${
                      on ? "border-gold" : "border-white/30"
                    }`}
                  />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Learnings({ project }: { project: Project }) {
  return (
    <section className="mt-16 font-sf">
      <h3 className="font-display text-[26px] text-white">Learnings</h3>
      <p className="text-[15px] text-gold-soft">What I learned</p>
      <ul className="mt-3 space-y-1 text-[16px] text-white/85">
        {project.learnings.map((l) => (
          <li key={l} className="flex gap-3">
            <span
              aria-hidden
              className="mt-[9px] size-[6px] shrink-0 rotate-45 bg-gold"
            />
            {l}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Prototype({ project }: { project: Project }) {
  return (
    <section className="mt-14">
      <div className="relative aspect-[16/9] overflow-hidden border-2 border-gold/80 bg-ink shadow-[0_0_34px_rgba(201,168,76,0.3)]">
        {project.links.prototype ? (
          <iframe
            title={`${project.title} prototype`}
            src={project.links.prototype}
            className="absolute inset-0 size-full"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-center">
            <div className="absolute inset-3 border border-dashed border-white/15" />
            <div>
              <p className="font-display text-[clamp(18px,2.2vw,26px)] text-white">
                Interactive Prototype
              </p>
              <p className="mt-1 font-sf text-[14px] text-white/60">
                Embed your Figma prototype here
              </p>
              <MousePointer2 className="mx-auto mt-4 text-white/80" size={26} />
            </div>
          </div>
        )}
        {([
          "left-0 top-0",
          "right-0 top-0",
          "left-0 bottom-0",
          "right-0 bottom-0",
        ] as const).map((pos) => (
          <span
            key={pos}
            className={`absolute ${pos} size-2 bg-cream shadow-[0_0_10px_#fee6a8]`}
          />
        ))}
      </div>
    </section>
  )
}

interface FooterLink {
  label: string
  href: string
  Icon: typeof Globe
}

function Footer({
  project,
  next,
  onNext,
}: {
  project: Project
  next: Project
  onNext: (id: string) => void
}) {
  const links = [
    project.links.figma && {
      label: "Figma Design",
      href: project.links.figma,
      Icon: PenTool,
    },
    project.links.github && {
      label: "GitHub Repository",
      href: project.links.github,
      Icon: GitBranch,
    },
    project.links.live && {
      label: "Live Demo",
      href: project.links.live,
      Icon: Globe,
    },
  ].filter(Boolean) as FooterLink[]
  return (
    <section className="mt-10 flex flex-wrap items-center justify-between gap-6">
      <div className="flex flex-wrap gap-6">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2 font-sf text-[15px] text-white/85 transition-colors hover:text-cream"
          >
            <Icon size={18} className="text-gold" />
            {label}
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onNext(next.id)}
        className="group flex cursor-pointer items-center gap-3 rounded-[6px] bg-gold px-5 py-3 font-sf-bold text-[15px] font-[790] tracking-[0.06em] text-ink transition-[background,box-shadow] hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(219,194,140,0.5)]"
      >
        NEXT PROJECT
        <span className="font-sf text-[12px] font-normal opacity-70">
          {next.title}
        </span>
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </section>
  )
}
