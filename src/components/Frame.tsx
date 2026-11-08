import { useEffect } from "react"
import { A } from "../data"

type Props = {
  title?: string
  header?: React.ReactNode
  onClose: () => void
  children: React.ReactNode
  label: string
}

/** The gold-trimmed control-panel frame from the Figma "Project Overlay" (2:220). */
export default function Frame({
  title,
  header,
  onClose,
  children,
  label,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="pointer-events-auto relative mx-auto flex h-full w-full max-w-[1288px] flex-col"
      style={{ animation: "fade-up 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-[-9.45%_-6.14%_-9.29%_-6.16%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={A("2a6d2.svg")}
          />
        </div>
      </div>

      <header className="relative flex shrink-0 items-start justify-between pl-[clamp(28px,4vw,52px)] pr-[clamp(16px,4.5vw,75px)] pt-[7.41px]">
        {header ?? (
          <div>
            <h2 className="font-display text-[clamp(34px,4.4vw,57.016px)] not-italic leading-[normal] text-white">
              {title}
            </h2>
            <div className="mt-1 h-[3.15px] w-[min(479.907px,60vw)] bg-white" />
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="group mt-[10px] grid size-[56px] shrink-0 cursor-pointer place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-cream"
        >
          <img
            alt=""
            className="h-[52.239px] w-[52.211px] -rotate-45 transition-transform duration-300 group-hover:rotate-45 group-hover:drop-shadow-[0_0_8px_rgba(254,230,168,0.8)]"
            src={A("d761c.svg")}
          />
        </button>
      </header>

      <div className="relative min-h-0 flex-1">{children}</div>
    </section>
  )
}

/** Filter pill matching "Filter All" / "Filter UX UI" (2:242–2:260). */
export function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="relative shrink-0 cursor-pointer p-[4.5px] outline-none focus-visible:[&>span:first-child]:ring-2 focus-visible:[&>span:first-child]:ring-cream"
    >
      <span
        className={`relative flex h-[28px] min-w-[80px] items-center justify-center rounded-[66.139px] border-[1.14px] border-solid bg-[rgba(0,0,0,0.4)] px-[12px] font-sf-bold text-[clamp(12px,1.05vw,14.5px)] tracking-[0.04em] font-[790] leading-[normal] whitespace-nowrap transition-colors ${
          active
            ? "border-gold-soft text-gold-soft"
            : "border-steel text-steel hover:border-gold-soft/70 hover:text-gold-soft/90"
        }`}
      >
        {children}
      </span>
      {active && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ animation: "fade-in 0.3s both" }}
        >
          <span className="absolute inset-0 rounded-[22px] border-[1.14px] border-gold-soft" />
          <img
            alt=""
            className="absolute bottom-[4px] left-[8px] size-[5.5px]"
            src={A("ea269.svg")}
          />
          <img
            alt=""
            className="absolute right-[10px] top-0 size-[5.5px]"
            src={A("ea269.svg")}
          />
        </span>
      )}
    </button>
  )
}
