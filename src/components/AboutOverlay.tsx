import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Minus,
  Plus,
  X,
} from "lucide-react"
import { ABOUT } from "../data"
import Chip from "./Chip"
import Frame from "./Frame"

export default function AboutOverlay({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [resumeZoom, setResumeZoom] = useState(100)

  useEffect(() => {
    if (!resumeOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResumeOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [resumeOpen])

  const copyEmail = async () => {
    const email = "changrila.souksamlane@gmail.com"
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const input = document.createElement("textarea")
      input.value = email
      input.style.position = "fixed"
      input.style.opacity = "0"
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      input.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Frame title="ABOUT ME" label="About me" onClose={onClose}>
      <div className="scrollbar-gold mr-[clamp(10px,1.4vw,19px)] h-full overflow-y-auto pb-12 pl-[clamp(28px,5.4vw,79px)] pr-[clamp(14px,3vw,40px)] pt-6">
        <div
          className="grid gap-10 lg:grid-cols-[320px_1fr]"
          style={{ animation: "fade-in 0.5s both" }}
        >
          <aside>
            <div className="relative aspect-[4/5] max-w-[320px] overflow-hidden border-l-4 border-cream bg-ink shadow-[0_0_30px_rgba(254,230,168,0.12)]">
              <img
                alt={ABOUT.name}
                src={ABOUT.portrait}
                className="absolute inset-0 size-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(5,12,24,0.95)] to-transparent px-4 pb-4 pt-16">
                <p className="font-sf-bold text-[23px] font-[790] text-white">
                  {ABOUT.name}
                </p>
                <p className="font-sf text-[18px] text-white/85">
                  {ABOUT.role}
                </p>
              </div>
            </div>
            <p className="mt-4 flex max-w-[320px] gap-2 font-sf text-[14px] leading-[1.4] text-white/75">
              <span className="relative mt-[6px] size-2 shrink-0 rounded-full bg-cream">
                <span className="absolute inset-0 animate-ping rounded-full bg-cream/70" />
              </span>
              {ABOUT.now}
            </p>
            <ul className="mt-5 grid max-w-[320px] grid-cols-2 gap-2">
              {ABOUT.contact.map((contact) => (
                <li key={contact.label}>
                  {contact.label === "Email" ? (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="flex w-full cursor-pointer items-center justify-between rounded-[6px] border border-gold/60 px-3 py-2 font-sf text-[14px] text-gold-soft transition-colors hover:bg-gold hover:text-ink"
                    >
                      {copied ? "Copied" : contact.label}
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  ) : contact.label === "Resume" ? (
                    <button
                      type="button"
                      onClick={() => setResumeOpen(true)}
                      className="flex w-full cursor-pointer items-center justify-between rounded-[6px] border border-gold/60 px-3 py-2 font-sf text-[14px] text-gold-soft transition-colors hover:bg-gold hover:text-ink"
                    >
                      {contact.label}
                      <ExternalLink size={15} />
                    </button>
                  ) : (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-[6px] border border-gold/60 px-3 py-2 font-sf text-[14px] text-gold-soft transition-colors hover:bg-gold hover:text-ink"
                    >
                      {contact.label}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <p className="max-w-[640px] font-sf text-[clamp(18px,1.8vw,24px)] leading-[1.45] text-white">
              {ABOUT.intro}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {Object.entries(ABOUT.skills).map(([group, items]) => (
                <div key={group}>
                  <h3 className="mb-3 font-display text-[18px] text-gold">
                    {group}
                  </h3>
                  <div className="flex flex-wrap gap-[6px]">
                    {items.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-12 font-display text-[22px] text-white">
              JOURNEY
            </h3>
            <ol className="relative mt-5 space-y-7 border-l border-gold/50 pl-7">
              {ABOUT.journey.map((j) => (
                <li key={j.title} className="relative font-sf">
                  <span className="absolute -left-[33px] top-[5px] size-[11px] rotate-45 border border-cream bg-gold" />
                  <p className="text-[13px] tracking-[0.08em] text-gold">
                    {j.year}
                  </p>
                  <p className="text-[17px] text-white">{j.title}</p>
                  <p className="text-[14px] text-white/70">{j.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>

      {resumeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Résumé viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050812]/90 p-[clamp(12px,3vw,40px)] backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setResumeOpen(false)
          }}
        >
          <div className="flex h-full w-full max-w-[1000px] flex-col overflow-hidden rounded-[10px] border border-gold/70 bg-panel shadow-[0_0_45px_rgba(201,168,76,0.25)]">
            <div className="flex shrink-0 items-center justify-between border-b border-gold/40 px-4 py-3">
              <p className="font-display text-[16px] tracking-[0.05em] text-white">
                RÉSUMÉ
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={() =>
                    setResumeZoom((zoom) => Math.max(50, zoom - 25))
                  }
                  className="grid size-8 cursor-pointer place-items-center rounded-[5px] border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-[54px] text-center font-sf text-[13px] text-white/80">
                  {resumeZoom}%
                </span>
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() =>
                    setResumeZoom((zoom) => Math.min(200, zoom + 25))
                  }
                  className="grid size-8 cursor-pointer place-items-center rounded-[5px] border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <Plus size={16} />
                </button>
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-8 place-items-center rounded-[5px] border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-ink"
                  aria-label="Open résumé in a new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  type="button"
                  aria-label="Close résumé"
                  onClick={() => setResumeOpen(false)}
                  className="grid size-8 cursor-pointer place-items-center rounded-[5px] border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <X size={17} />
                </button>
              </div>
            </div>
            <iframe
              key={resumeZoom}
              title="Changrila Souksamlane résumé"
              src={`/assets/resume.pdf#toolbar=1&navpanes=0&zoom=${resumeZoom}`}
              className="min-h-0 w-full flex-1 bg-white"
            />
          </div>
        </div>
      )}
    </Frame>
  )
}
