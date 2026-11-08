import { useState } from "react"
import { LABS, PROJECTS, type LabItem } from "../data"
import { ChanCalculator } from "./Chan"
import Frame, { FilterPill } from "./Frame"
import { SproutIdle, TargetRings } from "./HomeScene"
import { CoverArt } from "./ProjectsOverlay"
import Sprite from "./Sprite"

const KINDS = [
  "All",
  "Characters",
  "Hackathons",
  "Motion",
  "Prototypes",
] as const
type Kind = typeof KINDS[number]

export default function LabsOverlay({ onClose }: { onClose: () => void }) {
  const [kind, setKind] = useState<Kind>("All")
  const list = kind === "All" ? LABS : LABS.filter((l) => l.kind === kind)

  return (
    <Frame title="LABS" label="Labs" onClose={onClose}>
      <div className="flex h-full flex-col">
        <p className="shrink-0 pl-[clamp(28px,4vw,52px)] pr-6 font-sf text-[clamp(14px,1.3vw,17px)] text-white/70">
          Characters, hackathons, motion studies and side experiments from the
          engine room.
        </p>
        <div className="no-scrollbar mt-3 flex shrink-0 gap-[2px] overflow-x-auto pl-[clamp(22px,3.6vw,46px)] pr-6">
          {KINDS.map((k) => (
            <FilterPill key={k} active={kind === k} onClick={() => setKind(k)}>
              {k.toUpperCase()}
            </FilterPill>
          ))}
        </div>
        <div className="scrollbar-gold mr-[clamp(10px,1.4vw,19px)] mt-6 min-h-0 flex-1 overflow-y-auto pb-10 pl-[clamp(24px,5.4vw,79px)] pr-[clamp(14px,2.6vw,34px)]">
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-7">
            {list.map((item, i) => (
              <li
                key={item.id}
                style={{
                  animation: `fade-up 0.5s ${0.05 * i}s cubic-bezier(0.22,1,0.36,1) both`,
                }}
              >
                <LabCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  )
}

function LabCard({ item }: { item: LabItem }) {
  return (
    <article className="group chamfer-sm relative h-full bg-gold/60 p-px transition-colors hover:bg-gold-soft">
      <div className="chamfer-sm h-full bg-panel">
        <div
          className="relative h-[190px] overflow-hidden border-b border-gold/40"
          style={{
            background:
              "radial-gradient(70% 70% at 50% 60%, rgba(201,168,76,0.16), transparent 70%), linear-gradient(#0f1a2e, #0d0a14)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(199,221,253,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(199,221,253,0.25) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
            <Art item={item} />
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between font-sf text-[12px] uppercase tracking-[0.1em] text-gold">
            <span>{item.kind}</span>
            <span className="text-white/50">{item.year}</span>
          </div>
          <h3 className="mt-1 font-sf-heavy text-[18px] font-[943] text-white">
            {item.title}
          </h3>
          <p className="mt-2 font-sf text-[14px] leading-[1.45] text-white/75">
            {item.body}
          </p>
        </div>
      </div>
    </article>
  )
}

function Centered({
  scale,
  w,
  h,
  children,
}: {
  scale: number
  w: number
  h: number
  children: React.ReactNode
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: w,
        height: h,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      {children}
    </div>
  )
}

function Art({ item }: { item: LabItem }) {
  switch (item.art) {
    case "chan":
      return (
        <Centered scale={1.5} w={84} h={106}>
          <div className="animate-[bob_3s_ease-in-out_infinite]">
            <ChanCalculator />
          </div>
        </Centered>
      )
    case "sprout":
      return (
        <Centered scale={1.4} w={60} h={90}>
          <SproutIdle />
        </Centered>
      )
    case "orbit":
      return (
        <Centered scale={0.38} w={467} h={467}>
          <TargetRings />
        </Centered>
      )
    case "flask":
      return (
        <div className="absolute inset-x-4 inset-y-3">
          <Sprite crop="flask" className="mx-auto h-full" />
        </div>
      )
    case "image":
      return (
        <img
          alt=""
          src={item.image}
          className="absolute inset-0 size-full object-cover opacity-80"
        />
      )
    case "mascots":
      return (
        <CoverArt cover={PROJECTS.find((p) => p.id === "realswipe")!.cover} />
      )
  }
}
