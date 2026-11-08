import { useEffect } from "react"
import { RefreshCw, Sparkles, Wrench, X } from "lucide-react"
import { CHANGELOG, type ChangeEntry, type ChangeKind } from "../data"

const KIND: Record<ChangeKind, {
  Icon: typeof Wrench
  title: string
  tint: string
  glow: string
}> = {
  Added: {
    Icon: Sparkles,
    title: "New",
    tint: "#c9a84c",
    glow: "rgba(201,168,76,0.55)",
  },
  Changed: {
    Icon: RefreshCw,
    title: "Update",
    tint: "#5b5ff0",
    glow: "rgba(91,95,240,0.6)",
  },
  Fixed: {
    Icon: Wrench,
    title: "Fix",
    tint: "#8f6fe0",
    glow: "rgba(143,111,224,0.6)",
  },
}

const fmt = (d: string) =>
  new Date(`${d}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  })

/** Compact changelog popover anchored to the CHAN-1.0 badge. */
export default function ChangelogOverlay({
  onClose,
  mobile,
}: {
  onClose: () => void
  mobile: boolean
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <section
      role="dialog"
      aria-label="Changelog"
      className={`pointer-events-auto flex max-h-[min(460px,62vh)] w-[min(372px,calc(100vw-24px))] flex-col ${
        mobile ? "origin-top-right" : "origin-bottom-left"
      }`}
      style={{ animation: "pop-in 0.32s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <header className="flex items-center justify-between px-1 pb-2">
        <h2 className="font-display text-[18px] tracking-[0.06em] text-white">
          CHANGELOG
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close changelog"
          className="grid size-7 cursor-pointer place-items-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-cream hover:text-cream"
        >
          <X size={14} />
        </button>
      </header>
      <ol className="no-scrollbar -mx-1 min-h-0 flex-1 space-y-3 overflow-y-auto px-1 pb-1 pt-1">
        {CHANGELOG.map((c, i) => (
          <li
            key={`${c.date}-${c.summary}`}
            style={{
              animation: `fade-up 0.4s ${0.04 * i + 0.08}s cubic-bezier(0.22,1,0.36,1) both`,
            }}
          >
            <Entry entry={c} />
          </li>
        ))}
      </ol>
    </section>
  )
}

function Entry({ entry }: { entry: ChangeEntry }) {
  const k = KIND[entry.kind]
  return (
    <div className="relative flex items-center pl-[30px]">
      {/* round emblem */}
      <div className="absolute left-0 top-1/2 z-10 -translate-y-[38%]">
        <span className="absolute -left-[5px] -top-[3px] size-[3px] rounded-full bg-white/80" />
        <span className="absolute -bottom-[2px] -right-[4px] size-[3px] rounded-full bg-white/70" />
        <div
          className="grid size-[50px] place-items-center rounded-full border-[2.5px] border-white text-white"
          style={{
            background: `radial-gradient(circle at 35% 30%, ${k.tint}, #1d1a46 92%)`,
            boxShadow: `0 0 12px ${k.glow}`,
          }}
        >
          <k.Icon size={20} strokeWidth={2.2} />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        {/* slanted title banner */}
        <div
          className="relative ml-[14px] h-[34px] overflow-hidden"
          style={{
            clipPath:
              "polygon(10px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 10px)",
            background: `linear-gradient(100deg, ${k.tint}cc 0%, #2a2160 48%, #17142f 100%)`,
          }}
        >
          <span
            aria-hidden
            className="absolute left-[22%] top-0 h-full w-[38%] opacity-40"
            style={{
              background:
                "linear-gradient(135deg, transparent 45%, rgba(255,255,255,0.35) 46%, transparent 60%), linear-gradient(45deg, transparent 55%, rgba(0,0,0,0.35) 56%)",
            }}
          />
          <span className="absolute left-[30px] top-1/2 -translate-y-1/2 font-sf text-[11px] uppercase tracking-[0.12em] text-white/70">
            {fmt(entry.date)}
          </span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-sf-heavy text-[12px] font-[943] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            {k.title}
          </span>
        </div>
        {/* notch */}
        <span
          aria-hidden
          className="relative z-10 -mt-[3px] ml-[38px] block size-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-cream"
        />
        {/* one-line summary pill */}
        <p className="-mt-[2px] rounded-full border border-white/15 bg-[rgba(14,12,34,0.92)] py-[7px] pl-[28px] pr-4 font-sf text-[13px] leading-[1.3] text-white/90 shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
          {entry.summary}
        </p>
      </div>
    </div>
  )
}
