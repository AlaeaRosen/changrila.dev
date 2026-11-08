import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

const assetPathPrefix = "/assets"
const imgProperty1Active = `${assetPathPrefix}/ffafb.svg`
const imgGroup = `${assetPathPrefix}/b2a55.svg`
const imgProperty1Inactive = `${assetPathPrefix}/eeb84.svg`
const imgProperty1Default = `${assetPathPrefix}/4432e.svg`
const imgProperty1Active1 = `${assetPathPrefix}/72c5d.svg`
const imgRectangle = `${assetPathPrefix}/a8490.png`
const imgMapEvent = `${assetPathPrefix}/a7426.png`
const imgMapHosting = `${assetPathPrefix}/0a6fb.png`
const imgRectangle1142 = `${assetPathPrefix}/3506d.png`
const imgRectangle1 = `${assetPathPrefix}/268b2.png`
const imgRectangle2 = `${assetPathPrefix}/7480b.png`
const imgRectangle3 = `${assetPathPrefix}/44bd1.png`
const imgRectangle4 = `${assetPathPrefix}/46b4b.png`
const imgRectangle5 = `${assetPathPrefix}/54018.png`
const imgRectangle6 = `${assetPathPrefix}/a38d4.png`
const imgRectangle7 = `${assetPathPrefix}/05ba0.png`
const imgLine30 = `${assetPathPrefix}/7c6a2.svg`
const imgFigma = `${assetPathPrefix}/f0362.svg`
const imgGlobe = `${assetPathPrefix}/95966.svg`
const imgCheetah = `${assetPathPrefix}/ad076.svg`
const imgCheetah1 = `${assetPathPrefix}/27acd.svg`
const imgGroup1 = `${assetPathPrefix}/e8931.svg`

type PandaProps = {
  className?: string
}

function Panda({ className }: PandaProps) {
  return (
    <div
      className={className || "relative size-[20px] overflow-clip"}
      data-node-id="139:187"
    >
      <img
        alt=""
        className="absolute inset-0 block size-full max-w-none"
        src={imgProperty1Active}
      />
    </div>
  )
}

type ProfileProps = {
  className?: string
}

function Profile({ className }: ProfileProps) {
  return (
    <div
      className={className || "relative size-[20px] overflow-clip"}
      data-node-id="139:178"
    >
      <div
        className="absolute inset-[0_7.97%]"
        data-node-id="139:179"
        data-name="Group"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={imgGroup}
        />
      </div>
    </div>
  )
}

type ChatProps = {
  className?: string
}

function Chat({ className }: ChatProps) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="139:163">
      <img
        alt=""
        className="absolute inset-0 block size-full max-w-none"
        src={imgProperty1Inactive}
      />
    </div>
  )
}

type ConnectProps = {
  className?: string
}

function Connect({ className }: ConnectProps) {
  return (
    <div
      className={className || "relative size-[20px] overflow-clip"}
      data-node-id="139:121"
    >
      <img
        alt=""
        className="absolute inset-0 block size-full max-w-none"
        src={imgProperty1Default}
      />
    </div>
  )
}

type CheetahProps = {
  className?: string
}

function Cheetah({ className }: CheetahProps) {
  return (
    <div
      className={className || "relative size-[20px] overflow-clip"}
      data-node-id="139:51"
    >
      <img
        alt=""
        className="absolute inset-0 block size-full max-w-none"
        src={imgProperty1Active1}
      />
    </div>
  )
}

type NavigationBarProps = {
  className?: string
}

function NavigationBar({ className }: NavigationBarProps) {
  return (
    <div
      className={
        className ||
        "relative flex w-[366px] items-center justify-center rounded-[9999px] bg-[rgba(41,41,41,0.25)] p-[4px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[40px]"
      }
      data-node-id="139:236"
    >
      <div
        className="relative mr-[-10px] flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip rounded-[100px] bg-[rgba(255,255,255,0.6)] p-[8px] backdrop-blur-[5.35px]"
        data-node-id="139:237"
        data-name="Home"
      >
        <Cheetah className="relative size-[20px] shrink-0 overflow-clip" />
        <p
          className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Semi_Bold'] text-[10px] font-semibold not-italic leading-[normal] text-[#060606]"
          data-node-id="139:241"
        >
          Cheetah
        </p>
      </div>
      <div
        className="relative mr-[-10px] flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip p-[8px]"
        data-node-id="139:242"
        data-name="Home"
      >
        <Connect className="relative size-[20px] shrink-0 overflow-clip" />
        <p
          className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Regular'] text-[10px] font-normal not-italic leading-[normal] text-white"
          data-node-id="139:246"
        >
          Connection
        </p>
      </div>
      <div
        className="relative mr-[-10px] flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip rounded-[100px] p-[8px]"
        data-node-id="139:247"
        data-name="Chat"
      >
        <Chat className="relative size-[20px] shrink-0" />
        <p
          className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Regular'] text-[10px] font-normal not-italic leading-[normal] text-white"
          data-node-id="139:252"
        >
          Chat
        </p>
      </div>
      <div
        className="relative flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip p-[8px]"
        data-node-id="139:253"
        data-name="Profile"
      >
        <Profile className="relative size-[20px] shrink-0 overflow-clip" />
        <p
          className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Regular'] text-[10px] font-normal not-italic leading-[normal] text-white"
          data-node-id="139:256"
        >
          Profile
        </p>
      </div>
    </div>
  )
}

type ButtonProps = {
  className?: string
}

function SecondaryButton({ className }: ButtonProps) {
  return (
    <div
      className={className || "relative h-[49px] w-[301px]"}
      data-node-id="139:22"
    >
      <div
        className="absolute inset-0 rounded-[90px] border border-solid border-[#e5e5e5] bg-[rgba(232,232,232,0.2)]"
        data-node-id="139:23"
      />
      <p
        className="[word-break:break-word] absolute inset-[14.29%_38.87%] whitespace-nowrap text-center font-['Inter:Black'] text-[15px] font-black not-italic leading-[35px] tracking-[-0.5px] text-white"
        data-node-id="139:24"
      >
        Continue
      </p>
    </div>
  )
}

type HotspotFrameProps = {
  className?: string
}

const MAP_SLIDES = [
  {
    id: "hotspot",
    nodeId: "141:882",
    rectNodeId: "141:883",
    labelNodeId: "141:884",
    src: imgRectangle,
    label: "MAP",
  },
  {
    id: "event",
    nodeId: "141:879",
    rectNodeId: "141:880",
    labelNodeId: "141:881",
    src: imgMapEvent,
    label: "EVENT SCREEN",
  },
  {
    id: "hosting",
    nodeId: "141:885",
    rectNodeId: "141:886",
    labelNodeId: "141:887",
    src: imgMapHosting,
    label: "HOSTING EVENT",
  },
] as const

function HotspotFrame({ className }: HotspotFrameProps) {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const startX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const goTo = (next: number) => {
    const len = MAP_SLIDES.length
    setIndex(((next % len) + len) % len)
  }

  const activeSlide = MAP_SLIDES[index]

  return (
    <div
      className={
        className || "relative flex w-full flex-col items-center gap-[10px]"
      }
      data-node-id={activeSlide.nodeId}
    >
      <div
        ref={containerRef}
        className="group relative aspect-[1158/639] w-full shrink-0 cursor-grab touch-pan-y select-none overflow-hidden rounded-[12px] border border-solid border-[#c9a84c] active:cursor-grabbing"
        data-node-id={activeSlide.rectNodeId}
        data-name="Rectangle"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("button")) return
          startX.current = e.clientX
          setDragOffset(0)
          e.currentTarget.setPointerCapture(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (startX.current === null) return
          setDragOffset(e.clientX - startX.current)
        }}
        onPointerUp={() => {
          if (startX.current === null) return
          const threshold = (containerRef.current?.clientWidth ?? 600) * 0.1
          if (dragOffset < -threshold) {
            goTo(index + 1)
          } else if (dragOffset > threshold) {
            goTo(index - 1)
          }
          startX.current = null
          setDragOffset(0)
        }}
        onPointerCancel={() => {
          startX.current = null
          setDragOffset(0)
        }}
      >
        <div
          className={`flex size-full ${
            startX.current === null
              ? "transition-transform duration-300 ease-out"
              : ""
          }`}
          style={{
            transform: `translateX(calc(${-index * 100}% + ${dragOffset}px))`,
          }}
        >
          {MAP_SLIDES.map((slide) => (
            <div key={slide.id} className="relative size-full shrink-0">
              <img
                alt={slide.label}
                draggable={false}
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                src={slide.src}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous map screen"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#c9a84c]/70 bg-[#152741]/80 text-[#c9a84c] backdrop-blur-sm transition hover:bg-[#c9a84c] hover:text-[#152741]"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next map screen"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#c9a84c]/70 bg-[#152741]/80 text-[#c9a84c] backdrop-blur-sm transition hover:bg-[#c9a84c] hover:text-[#152741]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p
          className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id={activeSlide.labelNodeId}
        >
          {activeSlide.label}
        </p>
        <div className="flex items-center gap-2">
          {MAP_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show ${slide.label}`}
              onClick={() => goTo(i)}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                i === index
                  ? "w-6 bg-[#c9a84c]"
                  : "w-2 bg-[#c9a84c]/35 hover:bg-[#c9a84c]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RealswipeCaseStudy({ onNext }: { onNext: () => void }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[1204px] pt-2 pb-8"
      style={{ animation: "fade-in 0.5s both" }}
      data-node-id="139:291"
      data-name="Realswipe - ici"
    >
      {/* Hero Title */}
      <p
        data-scroll-section="Overview"
        className="[word-break:break-word] max-w-[984px] font-['Gugi:Regular'] text-[clamp(34px,4.2vw,57.016px)] not-italic leading-[normal] text-white"
        data-node-id="139:294"
      >
        From Dating Vibes to Social Discovery
      </p>

      {/* Hero Collage + Overlapping White Project Card */}
      <div className="relative mt-[36px]">
        <div
          className="relative aspect-[1204/628] w-full rounded-[20px]"
          data-node-id="139:292"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
            <img
              alt=""
              className="absolute left-[-0.97%] top-[-2.44%] h-[104.18%] w-[101.94%] max-w-none"
              src={imgRectangle1142}
            />
          </div>
        </div>

        <div
          className="relative -mt-[clamp(110px,19vw,236px)] ml-[clamp(12px,2vw,23px)] w-[calc(100%-24px)] max-w-[621px] rounded-[12px] border-2 border-solid border-black bg-white px-[24px] pt-[15px] pb-[17px]"
          data-node-id="139:293"
        >
          <div
            className="flex w-full max-w-[570px] flex-col items-start gap-[5px]"
            data-node-id="139:295"
          >
            <p
              className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 font-['SF_Compact:Semibold'] text-[20px] font-[656.2000122070312] leading-[normal] text-[#c9a84c]"
              data-node-id="139:296"
            >
              UX/UI Project
            </p>
            <p
              className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 font-['Gugi:Regular'] text-[clamp(34px,4.2vw,57.016px)] not-italic leading-[normal] text-black"
              data-node-id="139:297"
            >
              REALSWIPE
            </p>
            <div
              className="relative h-0 w-full shrink-0"
              data-node-id="139:298"
            >
              <div className="absolute inset-[-3.15px_0_0_0]">
                <img
                  alt=""
                  className="block size-full max-w-none"
                  src={imgLine30}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] relative w-full max-w-[580px] shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] text-black"
              data-node-id="139:299"
            >
              RealSwipe was being mistaken for a dating app by 100% of new
              users.
            </p>
          </div>

          <div className="mt-[19px] flex flex-wrap items-center gap-[12px]">
            <div
              className="flex items-center justify-center rounded-[37.401px] border border-solid border-black bg-[#c9a84c] px-[10.009px] py-[2.107px]"
              data-node-id="139:301"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[15.803px] font-[457.8999938964844] leading-[normal] text-black"
                data-node-id="139:302"
              >
                Figma
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-[37.401px] border border-solid border-black bg-[#c9a84c] px-[10.009px] py-[2.107px]"
              data-node-id="139:303"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[15.803px] font-[457.8999938964844] leading-[normal] text-black"
                data-node-id="139:304"
              >
                Prototyping
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-[37.401px] border border-solid border-black bg-[#c9a84c] px-[10.009px] py-[2.107px]"
              data-node-id="139:305"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[15.803px] font-[457.8999938964844] leading-[normal] text-black"
                data-node-id="139:306"
              >
                User Research
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview + Role / Team / Timeline */}
      <div className="mt-[30px] grid grid-cols-1 items-start gap-[36px] lg:grid-cols-[minmax(0,860px)_229px] lg:justify-between">
        <div
          className="rounded-[12px] border border-solid border-white px-[23px] py-[36px]"
          data-node-id="139:332"
          data-name="Rectangle"
        >
          <p
            className="[word-break:break-word] font-['Gugi:Regular'] text-[35px] not-italic leading-[normal] text-white"
            data-node-id="139:300"
          >
            Overview
          </p>
          <p
            className="[word-break:break-word] mt-[19px] max-w-[804px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
            data-node-id="139:307"
          >{`RealSwipe helps people discover events and connect around shared interests (nightlife, sports, meetups). The app was functionally sound but perceptually broken: 100% of new users assumed it was a dating app before reading any content. `}</p>
          <p
            className="[word-break:break-word] mt-[32px] max-w-[784px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
            data-node-id="139:308"
          >{`The core challenge: how do we redesign RealSwipe's core experience so first-time users immediately understand it as social discovery, not dating?`}</p>
        </div>

        <div className="flex flex-col gap-[38px] pt-[15px] text-[25px] text-white">
          <div
            className="[word-break:break-word] flex w-[229px] flex-col items-center gap-[6px] text-white"
            data-node-id="139:444"
          >
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Semibold'] text-[18px] font-[656.2000122070312] leading-[normal] text-gold"
              data-node-id="139:445"
            >
              MY ROLE
            </p>
            <div
              className="relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0]"
              data-node-id="139:446"
            >
              <p className="mb-0 text-[23px] leading-[normal]">User Research</p>
              <p className="mb-0 text-[23px] leading-[normal]">
                UX and UI Designer
              </p>
              <p className="text-[23px] leading-[normal]">Prototyping</p>
            </div>
          </div>

          <div
            className="[word-break:break-word] flex w-[136px] flex-col items-end gap-[6px] text-white"
            data-node-id="139:447"
          >
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Semibold'] text-[18px] font-[656.2000122070312] leading-[normal] text-gold"
              data-node-id="139:448"
            >
              TEAM
            </p>
            <div
              className="relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0]"
              data-node-id="139:449"
            >
              <p className="mb-0 text-[23px] leading-[normal]">5 people</p>
              <p className="text-[23px] leading-[normal]">1 mentor</p>
            </div>
          </div>

          <div
            className="[word-break:break-word] flex w-[110px] flex-col items-center gap-[6px] leading-[normal] text-white"
            data-node-id="139:450"
          >
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Semibold'] text-[18px] font-[656.2000122070312] text-gold"
              data-node-id="139:451"
            >
              TIMELINE
            </p>
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Regular'] text-[23px] font-[457.8999938964844]"
              data-node-id="139:452"
            >
              8 weeks
            </p>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="mx-auto w-full max-w-[1158px]">
        <div
          className="mt-[40px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:309"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="Research"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[35px] not-italic leading-[normal] text-[#c9a84c]"
          data-node-id="139:310"
        >
          Research
        </p>
        <p
          className="[word-break:break-word] mt-[13px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:311"
        >
          Finding the root cause, not just the symptoms
        </p>
        <div
          className="[word-break:break-word] mt-[22px] whitespace-pre-wrap font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
          data-node-id="139:312"
        >
          <p className="mb-0 text-[20px]">
            <span className="leading-[1.6]">{`We benchmarked `}</span>
            <span className="[word-break:break-word] font-['SF_Compact:Semibold'] font-[656.2000122070312] leading-[1.6]">
              four
            </span>
            <span className="leading-[1.6]">{` competitors: `}</span>
          </p>
          <p className="mb-0 text-[20px] leading-[1.6]">{`Meetup, Nomadtable, Ripple, and Bunchups and ran usability testing and heuristic analysis on the original RealSwipe. `}</p>
          <p className="text-[20px] leading-[1.6]">
            Three root causes surfaced:
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-1 items-start gap-[36px] lg:grid-cols-[minmax(0,530px)_minmax(0,570px)] lg:justify-between">
          <div
            className="flex w-full flex-col items-start"
            data-node-id="139:313"
            data-name="Frame"
          >
            <div
              className="relative flex w-full shrink-0 items-start gap-[16px] rounded-tl-[8px] rounded-tr-[8px] border-t border-r border-l border-solid border-[#c9a84c] bg-[#1c3354] p-[20px]"
              data-node-id="139:314"
              data-name="Frame"
            >
              <div
                className="relative h-[60px] w-[6px] shrink-0 rounded-[3px] bg-[#c9a84c]"
                data-node-id="139:315"
                data-name="Frame"
              />
              <div
                className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[6px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                data-node-id="139:316"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[15px] uppercase leading-[normal] tracking-[1px] text-[#c9a84c]"
                  data-node-id="139:317"
                >
                  01 — Romantic Visual Cues
                </p>
                <p
                  className="relative w-[min-content] min-w-full shrink-0 whitespace-pre-wrap text-[20px] leading-[1.5] text-[#c8d0da]"
                  data-node-id="139:318"
                >{`Heart logo, red-black palette, Tinder  style swipe gestures sent an unambiguous signal before any content was read.`}</p>
              </div>
            </div>

            <div
              className="relative flex w-full shrink-0 items-start gap-[16px] border-r border-l border-solid border-[#c9a84c] bg-[#162a42] p-[20px]"
              data-node-id="139:319"
              data-name="Frame"
            >
              <div
                className="relative h-[60px] w-[6px] shrink-0 rounded-[3px] bg-[#c9a84c]"
                data-node-id="139:320"
                data-name="Frame"
              />
              <div
                className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[6px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                data-node-id="139:321"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[15px] uppercase leading-[normal] tracking-[1px] text-[#c9a84c]"
                  data-node-id="139:322"
                >
                  02 — Profile-First Structure
                </p>
                <p
                  className="relative w-[min-content] min-w-full shrink-0 text-[20px] leading-[1.5] text-[#c8d0da]"
                  data-node-id="139:323"
                >
                  People were shown in isolation, stripped of activity context,
                  reinforcing a dating framing where you judge a face, not a
                  shared interest.
                </p>
              </div>
            </div>

            <div
              className="relative flex w-full shrink-0 items-start gap-[16px] rounded-br-[8px] rounded-bl-[8px] border-r border-b border-l border-solid border-[#c9a84c] bg-[#1c3354] p-[20px]"
              data-node-id="139:324"
              data-name="Frame"
            >
              <div
                className="relative h-[60px] w-[6px] shrink-0 rounded-[3px] bg-[#c9a84c]"
                data-node-id="139:325"
                data-name="Frame"
              />
              <div
                className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[6px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                data-node-id="139:326"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[15px] uppercase leading-[normal] tracking-[1px] text-[#c9a84c]"
                  data-node-id="139:327"
                >
                  03 — Ambiguous Language
                </p>
                <p
                  className="relative w-[min-content] min-w-full shrink-0 text-[20px] leading-[1.5] text-[#c8d0da]"
                  data-node-id="139:328"
                >{`"Match", "swipe", minimal bios, no community framing or social proof, vocabulary reinforced a romantic reading at every turn.`}</p>
              </div>
            </div>
          </div>

          <div
            className="flex w-full flex-col items-center gap-[12px] lg:pt-[12px]"
            data-node-id="139:329"
            data-name="Frame"
          >
            <div
              className="relative aspect-[570/463] w-full shrink-0 rounded-[12px] border border-solid border-[#c9a84c]"
              data-node-id="139:330"
              data-name="Rectangle"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[12px]"
              >
                <img
                  alt=""
                  className="absolute size-full max-w-none rounded-[12px] object-cover"
                  src={imgRectangle1}
                />
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img
                    alt=""
                    className="absolute left-[-18.42%] top-[0.1%] h-full w-[144.87%] max-w-none"
                    src={imgRectangle2}
                  />
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
              data-node-id="139:331"
            >
              Realswipe, first impression
            </p>
          </div>
        </div>

        <p
          className="[word-break:break-word] mt-[58px] text-center font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] leading-[1.55] text-[#8a94a0]"
          data-node-id="139:333"
        >
          We ran a controlled A/B test (original vs. redesign) with 54
          participants, measuring perception, trust, and task completion.
        </p>

        {/* The Redesign */}
        <div
          className="mt-[78px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:334"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="The Redesign"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
          data-node-id="139:335"
        >
          The Redesign
        </p>
        <p
          className="[word-break:break-word] mt-[6px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:336"
        >
          Three decisions. Each one deliberate.
        </p>
        <div
          className="[word-break:break-word] mt-[12px] whitespace-pre-wrap font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
          data-node-id="139:337"
        >
          <p className="mb-0 text-[20px] leading-[1.58]">{`Every change was grounded in a root cause and tested against user perception. `}</p>
          <p className="text-[20px] leading-[1.58]">{`Here's what we changed, why, and what it fixed.`}</p>
        </div>

        {/* 01 Onboarding */}
        <div
          className="mt-[40px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:338"
          data-name="Rectangle"
        />
        <div
          data-scroll-section="Onboarding"
          className="relative mt-[40px] flex items-center gap-[12px]"
          data-node-id="139:339"
          data-name="Frame"
        >
          <div
            className="relative size-[32px] shrink-0 rounded-[16px] bg-[#c9a84c]"
            data-node-id="139:340"
            data-name="Rectangle"
          />
          <p
            className="[word-break:break-word] pointer-events-none absolute inset-[2092px_56px_-2054px_128px] overflow-hidden text-ellipsis font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741] opacity-0"
            data-node-id="139:341"
          >
            01
          </p>
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[30px] not-italic leading-[normal] text-[#c9a84c]"
            data-node-id="139:342"
          >
            Onboarding
          </p>
        </div>
        <p
          className="[word-break:break-word] mt-[14px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:343"
        >
          Replace romantic signals with social proof on the very first screen
        </p>
        <div
          className="[word-break:break-word] mt-[14px] whitespace-pre-wrap font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
          data-node-id="139:344"
        >
          <p className="mb-0 text-[20px] leading-[1.58]">{`Dating interpretation formed in under 3 seconds. `}</p>
          <p className="text-[20px] leading-[1.58]">
            We replaced the heart-led, dark-red first screen with warm neutrals,
            group imagery showing nightlife/sports/meetup use cases, an event
            count for social proof, and a community CTA — actively establishing
            community framing, not just removing a heart.
          </p>
        </div>
        <div
          className="mt-[40px] flex w-full flex-col items-center"
          data-node-id="139:345"
          data-name="Onboarding image"
        >
          <div
            className="relative aspect-[1158/639] w-full shrink-0 rounded-[12px] border border-solid border-[#c9a84c]"
            data-node-id="139:346"
            data-name="Rectangle"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[12px]"
            >
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[12px] object-cover"
                src={imgRectangle1}
              />
              <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                <img
                  alt=""
                  className="absolute left-0 top-[-1.96%] h-[101.88%] w-full max-w-none"
                  src={imgRectangle3}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Map & Events */}
        <div
          className="mt-[39px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:349"
          data-name="Rectangle"
        />
        <div
          data-scroll-section="Map & Events"
          className="mt-[40px] flex items-center gap-[12px]"
          data-node-id="139:350"
          data-name="Frame"
        >
          <div
            className="relative size-[32px] shrink-0 rounded-[16px] bg-[#c9a84c]"
            data-node-id="139:351"
            data-name="Rectangle"
          />
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[30px] not-italic leading-[normal] text-[#c9a84c]"
            data-node-id="139:352"
          >{`Map & Events`}</p>
        </div>
        <p
          className="[word-break:break-word] mt-[14px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:353"
        >
          Turn a passive map into an active discovery engine
        </p>
        <div
          className="[word-break:break-word] mt-[14px] whitespace-pre-wrap font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
          data-node-id="139:354"
        >
          <p className="mb-0 text-[20px] leading-[1.58]">{`Before: city dots required deliberate user search with no ambient discovery. `}</p>
          <p className="mb-0 leading-[1.58]">​</p>
          <p className="mb-0 text-[20px] leading-[1.58]">{`After: a vertical-scroll discovery view with live hotspots, a Hotspots/Events toggle, search and filters (activity/date/group size, no dating categories), and a "+" to create events. `}</p>
          <p className="text-[20px] leading-[1.58]">{`We prototyped map-only vs. vertical scroll and chose scroll so events surface ambiently. A "What's happening around?" bottom sheet updates as the map moves, positioning RealSwipe as a hosting platform too.`}</p>
        </div>
        <HotspotFrame className="mt-[40px] flex w-full flex-col items-center gap-[10px]" />

        {/* Profile Card */}
        <div
          className="mt-[39px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:355"
          data-name="Rectangle"
        />
        <div
          data-scroll-section="Profile Card"
          className="relative mt-[40px] flex items-center gap-[12px]"
          data-node-id="139:356"
          data-name="Frame"
        >
          <div
            className="relative size-[32px] shrink-0 rounded-[16px] bg-[#c9a84c]"
            data-node-id="139:357"
            data-name="Rectangle"
          />
          <p
            className="[word-break:break-word] pointer-events-none absolute inset-[4566px_169px_-4528px_115px] overflow-hidden text-ellipsis font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741] opacity-0"
            data-node-id="139:358"
          >
            03
          </p>
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[30px] not-italic leading-[normal] text-[#c9a84c]"
            data-node-id="139:359"
          >
            Profile Card
          </p>
        </div>
        <p
          className="[word-break:break-word] mt-[14px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:360"
        >
          Stop showing people. Show people in context.
        </p>
        <div
          className="[word-break:break-word] mt-[14px] whitespace-pre-wrap font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
          data-node-id="139:361"
        >
          <p className="mb-0 text-[20px] leading-[1.58]">{`Before: photo, name, left/right swipe,  no hobbies, no events. `}</p>
          <p className="mb-0 leading-[1.58]">​</p>
          <p className="mb-0 text-[20px] leading-[1.58]">{`After: bio, hobbies, and upcoming events lead the card; activity establishes context before identity follows. "Connect" replaces swipe/Match. `}</p>
          <p className="mb-0 leading-[1.58]">​</p>
          <p className="text-[20px] leading-[1.58]">{`Low engineering cost, high perceptual impact →  the same face reads completely differently when it's next to "Going to: Board Game Night + 2 more".`}</p>
        </div>
        <div
          className="mt-[40px] flex w-full flex-col items-center"
          data-node-id="139:347"
          data-name="Profile card image"
        >
          <div
            className="relative aspect-[1158/639] w-full shrink-0 rounded-[12px] border border-solid border-[#c9a84c]"
            data-node-id="139:348"
            data-name="Rectangle"
          >
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
              src={imgRectangle4}
            />
          </div>
        </div>

        {/* Design System */}
        <div
          className="mt-[80px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:362"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="Design System"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
          data-node-id="139:363"
        >
          Design System
        </p>
        <p
          className="[word-break:break-word] mt-[6px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:364"
        >
          Visual Language: Gen Z Native
        </p>

        <div className="mt-[28px] grid grid-cols-1 items-start gap-[28px] xl:grid-cols-[minmax(0,512px)_minmax(0,605px)] xl:justify-between">
          <div
            className="[word-break:break-word] font-['SF_Compact:Regular'] text-[0px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
            data-node-id="139:365"
          >
            <p className="mb-0 font-['SF_Compact:Semibold'] text-[25px] font-[656.2000122070312] leading-[1.58]">
              Typeface: Inter Display
            </p>
            <p className="text-[20px] leading-[1.58]">
              Inter Display was chosen for its clean, modern geometry that feels
              social and approachable nothing romantic, nothing corporate. It
              scales effortlessly from small UI labels to bold hero text,
              keeping every screen sharp, legible, and Gen Z native.
            </p>
          </div>

          <div
            className="[word-break:break-word] flex min-h-[338px] w-full items-center justify-center gap-[16px] overflow-x-auto rounded-[8px] bg-[#1c3354] px-[16px] py-[10px] text-[0px] leading-[0] text-[rgba(255,255,255,0.8)]"
            data-node-id="139:455"
            data-name="Frame"
          >
            <div
              className="relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] font-[457.8999938964844]"
              data-node-id="139:456"
            >
              <p className="mb-0 whitespace-pre font-['Inter:Bold'] text-[20px] font-bold not-italic leading-[1.58]">
                Inter Display
              </p>
              <p className="mb-0 whitespace-pre font-['Inter:Bold'] text-[17px] font-bold not-italic leading-[1.58]">
                Display - Bold
              </p>
              <p className="mb-0 whitespace-pre font-['Inter:Regular'] text-[15px] font-normal not-italic leading-[1.58]">
                Hero headings, screen titles
              </p>
              <p className="mb-0 whitespace-pre text-[15px] leading-[1.58]">​</p>
              <p className="mb-0 whitespace-pre font-['Inter:Semi_Bold'] text-[17px] font-semibold not-italic leading-[1.58]">
                Heading - Semi Bold
              </p>
              <p className="mb-0 whitespace-pre font-['Inter:Regular'] text-[15px] font-normal not-italic leading-[1.58]">
                Section labels, card names
              </p>
              <p className="mb-0 whitespace-pre text-[15px] leading-[1.58]">​</p>
              <p className="mb-0 whitespace-pre font-['Inter:Medium'] text-[17px] font-medium not-italic leading-[1.58]">
                Body - Medium
              </p>
              <p className="mb-0 whitespace-pre font-['Inter:Regular'] text-[15px] font-normal not-italic leading-[1.58]">
                Descriptions, bios, event info
              </p>
              <p className="mb-0 whitespace-pre text-[15px] leading-[1.58]">​</p>
              <p className="mb-0 whitespace-pre font-['Inter:Regular'] text-[17px] font-normal not-italic leading-[1.58]">
                Caption - Regular
              </p>
              <p className="whitespace-pre font-['Inter:Regular'] text-[15px] font-normal not-italic leading-[1.58]">
                date, location, count
              </p>
            </div>
            <div
              className="relative h-[303px] w-[345px] shrink-0 whitespace-pre-wrap font-['Inter:Regular'] font-normal not-italic"
              data-node-id="139:457"
            >
              <p className="mb-0 text-[20px] leading-[1.58]">​</p>
              <p className="mb-0 font-['Inter:Bold'] text-[14px] font-bold leading-[1.58]">
                ABCDEFGHIJKLMNOPQRST abcdefghijklmnopqrst
              </p>
              <p className="mb-0 font-['Inter:Bold'] text-[14px] font-bold leading-[1.58]">{`123456789&%$#@!?*`}</p>
              <p className="mb-0 text-[20px] leading-[1.58]">​</p>
              <p className="mb-0 font-['Inter:Semi_Bold'] text-[14px] font-semibold leading-[1.58]">
                ABCDEFGHIJKLMNOPQRST abcdefghijklmnopqrst
              </p>
              <p className="mb-0 font-['Inter:Semi_Bold'] text-[14px] font-semibold leading-[1.58]">{`123456789&%$#@!?*`}</p>
              <p className="mb-0 text-[20px] leading-[1.58]">​</p>
              <p className="mb-0 font-['Inter:Medium'] text-[14px] font-medium leading-[1.58]">
                ABCDEFGHIJKLMNOPQRST abcdefghijklmnopqrst
              </p>
              <p className="mb-0 font-['Inter:Medium'] text-[14px] font-medium leading-[1.58]">{`123456789&%$#@!?*`}</p>
              <p className="mb-0 text-[20px] leading-[1.58]">​</p>
              <p className="mb-0 text-[14px] leading-[1.58]">
                ABCDEFGHIJKLMNOPQRST abcdefghijklmnopqrst
              </p>
              <p className="text-[14px] leading-[1.58]">{`123456789&%$#@!?*`}</p>
            </div>
          </div>
        </div>

        <div className="mt-[39px] grid grid-cols-1 items-start gap-[28px] xl:grid-cols-[minmax(0,530px)_minmax(0,605px)] xl:justify-between">
          <div
            className="[word-break:break-word] font-['SF_Compact:Regular'] text-[0px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
            data-node-id="139:366"
          >
            <p className="mb-0 font-['SF_Compact:Semibold'] text-[25px] font-[656.2000122070312] leading-[1.58]">
              Colour Palette
            </p>
            <p className="text-[20px] leading-[1.58]">{`Every colour in RealSwipe's palette was chosen with intention. Black grounds the experience, orange drives action, and the greys create depth without distraction. No pink, no red nothing that reads romantic.`}</p>
          </div>

          <div
            className="[word-break:break-word] flex h-[323px] w-full items-start justify-center gap-[10px] overflow-x-auto overflow-y-clip whitespace-nowrap rounded-[8px] bg-[#1c3354] px-[16px] py-[10px] text-center"
            data-node-id="139:458"
            data-name="Frame"
          >
            <div
              className="relative h-[337px] w-[90px] shrink-0 overflow-clip rounded-[15px] bg-[#0e0e0e] text-white"
              data-node-id="139:459"
            >
              <div
                className="absolute left-[46px] top-[29px] -translate-x-1/2 font-['SF_Compact:Bold'] text-[15px] font-[790] leading-[0]"
                data-node-id="139:460"
              >
                <p className="mb-0 leading-[1.18]">Primary</p>
                <p className="leading-[1.18]">Black</p>
              </div>
              <p
                className="absolute left-[45.5px] top-[98px] -translate-x-1/2 font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] leading-[1.18] tracking-[-0.78px]"
                data-node-id="139:461"
              >
                HEX: 0E0E0E
              </p>
            </div>

            <div
              className="relative h-[337px] w-[90px] shrink-0 overflow-clip rounded-[15px] leading-[0] text-white"
              data-node-id="139:462"
              style={{
                backgroundImage:
                  "linear-gradient(92.54538204496598deg, rgb(182, 77, 58) 6.8435%, rgb(208, 85, 60) 33.725%, rgb(252, 111, 11) 92.865%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
              }}
            >
              <div
                className="absolute left-[46px] top-[29px] -translate-x-1/2 font-['SF_Compact:Bold'] text-[15px] font-[790]"
                data-node-id="139:463"
              >
                <p className="mb-0 leading-[1.18]">Primary</p>
                <p className="leading-[1.18]">CTA</p>
              </div>
              <div
                className="absolute left-[45.5px] top-[98px] -translate-x-1/2 font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] tracking-[-0.78px]"
                data-node-id="139:464"
              >
                <p className="mb-0 leading-[1.18]">HEX: B64D3A</p>
                <p className="mb-0 leading-[1.18]">HEX: D0553C</p>
                <p className="leading-[1.18]">HEX: FC6F0B</p>
              </div>
            </div>

            <div
              className="relative h-[337px] w-[90px] shrink-0 overflow-clip rounded-[15px] bg-white text-black"
              data-node-id="139:465"
            >
              <div
                className="absolute left-[46px] top-[29px] -translate-x-1/2 font-['SF_Compact:Bold'] text-[15px] font-[790] leading-[0]"
                data-node-id="139:466"
              >
                <p className="mb-0 leading-[1.18]">Primary</p>
                <p className="leading-[1.18]">White</p>
              </div>
              <p
                className="absolute left-[45.5px] top-[98px] -translate-x-1/2 font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] leading-[1.18] tracking-[-0.78px]"
                data-node-id="139:467"
              >
                HEX: FFFFFF
              </p>
            </div>

            <div
              className="relative h-[337px] w-[90px] shrink-0 overflow-clip rounded-[15px] bg-[#2a2a2a] text-white"
              data-node-id="139:468"
            >
              <div
                className="absolute left-[46px] top-[29px] -translate-x-1/2 font-['SF_Compact:Bold'] text-[15px] font-[790] leading-[0]"
                data-node-id="139:469"
              >
                <p className="mb-0 whitespace-pre leading-[1.18]">{` Frosted `}</p>
                <p className="whitespace-pre leading-[1.18]">panels</p>
              </div>
              <p
                className="absolute left-[45.5px] top-[98px] -translate-x-1/2 font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] leading-[1.18] tracking-[-0.78px]"
                data-node-id="139:470"
              >
                HEX: 2A2A2A
              </p>
            </div>

            <div
              className="relative h-[337px] w-[90px] shrink-0 overflow-clip rounded-[15px] bg-[#b0b0b0] text-black"
              data-node-id="139:471"
            >
              <div
                className="absolute left-[45.5px] top-[29px] -translate-x-1/2 font-['SF_Compact:Bold'] text-[15px] font-[790] leading-[0]"
                data-node-id="139:472"
              >
                <p className="mb-0 whitespace-pre leading-[1.18]">{`Subtext, `}</p>
                <p className="mb-0 whitespace-pre leading-[1.18]">{`inactive `}</p>
                <p className="whitespace-pre leading-[1.18]">states</p>
              </div>
              <p
                className="absolute left-[45.5px] top-[98px] -translate-x-1/2 font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] leading-[1.18] tracking-[-0.78px]"
                data-node-id="139:473"
              >
                HEX: B0B0B0
              </p>
            </div>

            <div
              className="relative h-[337px] w-[90px] shrink-0 overflow-clip rounded-[15px] bg-[#f5f5f5] text-black"
              data-node-id="139:474"
            >
              <div
                className="absolute left-[45.5px] top-[29px] -translate-x-1/2 font-['SF_Compact:Bold'] text-[15px] font-[790] leading-[0]"
                data-node-id="139:475"
              >
                <p className="mb-0 whitespace-pre leading-[1.18]">{`Light `}</p>
                <p className="mb-0 whitespace-pre leading-[1.18]">{`mode `}</p>
                <p className="whitespace-pre leading-[1.18]">cards</p>
              </div>
              <p
                className="absolute left-[45.5px] top-[98px] -translate-x-1/2 font-['SF_Compact:Regular'] text-[13px] font-[457.8999938964844] leading-[1.18] tracking-[-0.78px]"
                data-node-id="139:476"
              >
                HEX: F5F5F5
              </p>
            </div>
          </div>
        </div>

        <div
          className="[word-break:break-word] mt-[66px] grid grid-cols-1 gap-[36px] font-['SF_Compact:Regular'] text-[0px] font-[457.8999938964844] leading-[0] text-[#c8d0da] lg:grid-cols-2 lg:justify-between"
          data-node-id="139:367"
        >
          <div className="max-w-[530px]" data-node-id="139:368">
            <p className="mb-0 font-['SF_Compact:Semibold'] text-[25px] font-[656.2000122070312] leading-[1.58]">
              Buttons
            </p>
            <p className="text-[20px] leading-[1.58]">
              Buttons are the moment of commitment. The primary orange CTA
              demands attention without being aggressive, while the secondary
              sits quietly in support. Every button is full-width, bold, and
              built for thumbs.
            </p>
          </div>
          <div className="max-w-[530px]" data-node-id="139:369">
            <p className="mb-0 font-['SF_Compact:Semibold'] text-[25px] font-[656.2000122070312] leading-[1.58]">{`Buttons & Navigation`}</p>
            <p className="text-[20px] leading-[1.58]">
              Navigation should never get in the way. Four focused tabs, always
              visible, always clear. The Cheetah and Panda toggle sits above the
              map one tap switches your entire social mode without leaving the
              screen.
            </p>
          </div>
        </div>

        <div className="mt-[36px] grid grid-cols-1 gap-[24px] md:grid-cols-[minmax(280px,344fr)_minmax(0,782fr)] lg:gap-[32px]">
          <div
            className="flex h-[243px] w-full flex-col items-center justify-center gap-[31px] overflow-clip rounded-[8px] bg-[#1c3354] px-[16px] py-[10px]"
            data-node-id="141:1489"
            data-name="Frame button 1"
          >
            <button
              type="button"
              className="relative flex h-[56px] w-full max-w-[312px] shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-[48px]"
              data-node-id="141:1490"
              style={{
                backgroundImage:
                  "linear-gradient(132.8430418493851deg, rgb(182, 77, 58) 6.8435%, rgb(208, 85, 60) 33.725%, rgb(252, 111, 11) 92.865%), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)",
              }}
              data-name="Join event button"
            >
              <div
                className="[word-break:break-word] flex flex-col items-center justify-center whitespace-nowrap text-center font-['Plus_Jakarta_Sans:Bold'] text-[16px] font-bold leading-[0] text-white"
                data-node-id="I141:1490;474:8944"
              >
                <p className="leading-[24px]">JOIN EVENT</p>
              </div>
            </button>
            <SecondaryButton className="relative h-[49px] w-full max-w-[301px] shrink-0" />
          </div>

          <div
            className="flex h-[243px] w-full items-center justify-center gap-[clamp(24px,5vw,92px)] overflow-x-auto overflow-y-clip rounded-[8px] bg-[#1c3354] px-[16px] py-[10px]"
            data-node-id="141:1492"
            data-name="Frame button 2"
          >
            <div
              className="relative flex shrink-0 flex-col items-start gap-[31px]"
              data-node-id="141:1493"
            >
              <div
                className="sticky top-0 flex w-[366px] shrink-0 items-center justify-center rounded-[9999px] bg-[rgba(41,41,41,0.25)] p-[4px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[40px]"
                data-node-id="139:482"
                data-name="Navigation Bar"
              >
                <div
                  className="relative mr-[-10px] flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip rounded-[100px] bg-[rgba(255,255,255,0.6)] p-[8px] backdrop-blur-[5.35px]"
                  data-node-id="I139:482;488:12082"
                  data-name="Home"
                >
                  <Panda className="relative size-[20px] shrink-0 overflow-clip" />
                  <p
                    className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Semi_Bold'] text-[10px] font-semibold not-italic leading-[normal] text-[#060606]"
                    data-node-id="I139:482;488:12086"
                  >
                    Panda
                  </p>
                </div>
                <div
                  className="relative mr-[-10px] flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip p-[8px]"
                  data-node-id="I139:482;488:12087"
                  data-name="Home"
                >
                  <Connect className="relative size-[20px] shrink-0 overflow-clip" />
                  <p
                    className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Regular'] text-[10px] font-normal not-italic leading-[normal] text-white"
                    data-node-id="I139:482;488:12091"
                  >
                    Connection
                  </p>
                </div>
                <div
                  className="relative mr-[-10px] flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip rounded-[100px] p-[8px]"
                  data-node-id="I139:482;488:12092"
                  data-name="Chat"
                >
                  <Chat className="relative size-[20px] shrink-0" />
                  <p
                    className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Regular'] text-[10px] font-normal not-italic leading-[normal] text-white"
                    data-node-id="I139:482;488:12097"
                  >
                    Chat
                  </p>
                </div>
                <div
                  className="relative flex min-w-px max-w-[260px] flex-[1_0_0] flex-col items-center justify-center gap-[2px] overflow-clip p-[8px]"
                  data-node-id="I139:482;488:12098"
                  data-name="Profile"
                >
                  <Profile className="relative size-[20px] shrink-0 overflow-clip" />
                  <p
                    className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Inter:Regular'] text-[10px] font-normal not-italic leading-[normal] text-white"
                    data-node-id="I139:482;488:12101"
                  >
                    Profile
                  </p>
                </div>
              </div>
              <NavigationBar className="sticky top-0 flex w-[366px] shrink-0 items-center justify-center rounded-[9999px] bg-[rgba(41,41,41,0.25)] p-[4px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[40px]" />
            </div>

            <div
              className="relative flex shrink-0 flex-col items-start justify-center gap-[63px]"
              data-node-id="139:484"
            >
              <div
                className="relative flex shrink-0 items-center gap-[12px] rounded-[48px] bg-[#ececec] p-[3px]"
                data-node-id="139:485"
                data-name="Passive"
              >
                <div
                  className="relative flex shrink-0 items-center justify-center overflow-clip rounded-[9999px] p-[6px] drop-shadow-[0px_2px_1.9px_rgba(0,0,0,0.25)]"
                  data-node-id="I139:485;502:14105"
                  data-name="Cheetah button"
                >
                  <div
                    className="relative size-[12px] shrink-0 overflow-clip"
                    data-node-id="I139:485;502:14106"
                    data-name="Cheetah"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgCheetah}
                    />
                  </div>
                </div>
                <div
                  className="relative flex shrink-0 items-center justify-center overflow-clip rounded-[9999px] bg-white p-[6px] shadow-[0px_2px_3.8px_0px_rgba(0,0,0,0.25)]"
                  data-node-id="I139:485;502:14107"
                  data-name="Cheetah button"
                >
                  <Panda className="relative size-[12px] shrink-0 overflow-clip" />
                </div>
              </div>

              <div
                className="relative flex shrink-0 items-center gap-[12px] rounded-[48px] bg-[#ececec] p-[3px]"
                data-node-id="139:486"
                data-name="Passive"
              >
                <div
                  className="relative flex shrink-0 items-center justify-center overflow-clip rounded-[9999px] bg-white p-[6px] shadow-[0px_2px_3.8px_0px_rgba(0,0,0,0.25)]"
                  data-node-id="I139:486;502:13619"
                  data-name="Cheetah button"
                >
                  <div
                    className="relative size-[12px] shrink-0 overflow-clip"
                    data-node-id="I139:486;502:13621"
                    data-name="Cheetah"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgCheetah1}
                    />
                  </div>
                </div>
                <div
                  className="relative flex shrink-0 items-center justify-center overflow-clip rounded-[9999px] p-[6px] drop-shadow-[0px_2px_1.9px_rgba(0,0,0,0.25)]"
                  data-node-id="I139:486;502:13818"
                  data-name="Cheetah button"
                >
                  <div
                    className="relative size-[12px] shrink-0 overflow-clip"
                    data-node-id="I139:486;502:13919"
                    data-name="Panda"
                  >
                    <div
                      className="absolute inset-[0.01%_0]"
                      data-node-id="I139:486;502:13919;488:10385"
                      data-name="Group"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 block size-full max-w-none"
                        src={imgGroup1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div
          className="mt-[39px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:370"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="Results"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[35px] not-italic leading-[normal] text-[#c9a84c]"
          data-node-id="139:371"
        >
          Results
        </p>
        <p
          className="[word-break:break-word] mt-[13px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:372"
        >
          Controlled A/B test · 54 participants · Original vs. Redesign
        </p>

        <div
          className="[word-break:break-word] mx-auto mt-[39px] flex w-full max-w-[882px] flex-col items-center justify-center gap-[12.791px] rounded-[19.186px] border-[1.599px] border-solid border-[#c9a84c] bg-[#1c3354] p-[clamp(24px,4vw,44.768px)] leading-[normal]"
          data-node-id="139:373"
          data-name="Frame"
        >
          <p
            className="relative shrink-0 whitespace-nowrap text-center font-['SF_Compact:Bold'] text-[25px] font-[790] text-white"
            data-node-id="139:374"
          >
            APP IDENTITY
          </p>
          <p
            className="relative shrink-0 whitespace-nowrap font-['SF_Compact:Bold'] text-[clamp(64px,8vw,100px)] font-[790] text-[#c9a84c]"
            data-node-id="139:375"
          >
            100%
          </p>
          <p
            className="relative w-[min-content] min-w-full shrink-0 text-center font-['SF_Compact:Regular'] text-[27.181px] font-[457.8999938964844] text-[#c8d0da]"
            data-node-id="139:376"
          >{`Correct app category after redesign, zero said "dating"`}</p>
          <p
            className="relative shrink-0 whitespace-pre text-center font-['SF_Compact:Thin'] text-[20px] font-[200.5] text-white"
            data-node-id="139:377"
          >{`Social perception:  from 3/10 to 8.5/10`}</p>
        </div>

        <div className="mt-[34px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
          <div
            className="[word-break:break-word] flex min-h-[224px] flex-col items-center gap-[8.603px] rounded-[12.905px] border-[1.075px] border-solid border-[#c9a84c] p-[30.112px]"
            data-node-id="139:378"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 whitespace-nowrap text-center font-['SF_Compact:Bold'] text-[20px] font-[790] leading-[normal] text-white"
              data-node-id="139:379"
            >
              PROFILE DEPTH
            </p>
            <p
              className="relative shrink-0 whitespace-nowrap font-['SF_Compact:Bold'] text-[70px] font-[790] leading-[normal] text-[#c9a84c]"
              data-node-id="139:380"
            >
              100%
            </p>
            <div
              className="relative w-[min-content] min-w-full shrink-0 text-center font-['SF_Compact:Regular'] text-[18.282px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
              data-node-id="139:381"
            >
              <p className="mb-0 leading-[normal]">More confident in</p>
              <p className="leading-[normal]">meeting someone</p>
            </div>
          </div>

          <div
            className="[word-break:break-word] flex min-h-[224px] flex-col items-center gap-[8.603px] rounded-[12.905px] border-[1.075px] border-solid border-[#c9a84c] p-[30.112px]"
            data-node-id="139:382"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 whitespace-nowrap text-center font-['SF_Compact:Bold'] text-[20px] font-[790] leading-[normal] text-white"
              data-node-id="139:383"
            >{`Cheetah & Panda Mode clarity`}</p>
            <p
              className="relative shrink-0 whitespace-nowrap font-['SF_Compact:Bold'] text-[70px] font-[790] leading-[normal] text-[#c9a84c]"
              data-node-id="139:384"
            >
              75%
            </p>
            <div
              className="relative w-[min-content] min-w-full shrink-0 text-center font-['SF_Compact:Regular'] text-[18.282px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
              data-node-id="139:385"
            >
              <p className="mb-0 leading-[normal]">Better</p>
              <p className="leading-[normal]">understanding</p>
            </div>
          </div>

          <div
            className="[word-break:break-word] flex min-h-[224px] flex-col items-center gap-[8.603px] rounded-[12.905px] border-[1.075px] border-solid border-[#c9a84c] p-[30.112px]"
            data-node-id="139:386"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 whitespace-nowrap text-center font-['SF_Compact:Bold'] text-[20px] font-[790] leading-[normal] text-white"
              data-node-id="139:387"
            >{`Map & Navigation`}</p>
            <p
              className="relative shrink-0 whitespace-nowrap font-['SF_Compact:Bold'] text-[70px] font-[790] leading-[normal] text-[#c9a84c]"
              data-node-id="139:388"
            >
              100%
            </p>
            <div
              className="relative w-[min-content] min-w-full shrink-0 text-center font-['SF_Compact:Regular'] text-[18.282px] font-[457.8999938964844] leading-[0] text-[#c8d0da]"
              data-node-id="139:389"
            >
              <p className="mb-0 leading-[normal]">Successfully</p>
              <p className="leading-[normal]">located events</p>
            </div>
          </div>
        </div>

        <p
          className="[word-break:break-word] mt-[39px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.5] text-[#8a94a0]"
          data-node-id="139:390"
        >{`Metrics rated perception/trust/usability on a 10-point scale. Map task completion measured on the redesigned Map & Events flow. The initial 100% dating assumption and the final 0% dating classification are two distinct, separately measured moments.`}</p>

        {/* Learnings */}
        <div
          className="mt-[50px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:391"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="Learnings"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
          data-node-id="139:392"
        >
          Learnings
        </p>
        <p
          className="[word-break:break-word] mt-[6px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:393"
        >
          BEYOND THE INTERFACE
        </p>

        <div className="mt-[22px] flex flex-col gap-[24px]">
          <div
            className="flex w-full flex-col items-start"
            data-node-id="139:394"
            data-name="Frame"
          >
            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[12px] rounded-[12px] bg-[#1c3354] p-[24px]"
              data-node-id="139:395"
              data-name="Frame"
            >
              <div
                className="relative flex shrink-0 items-center gap-[10px]"
                data-node-id="139:396"
                data-name="Frame"
              >
                <div
                  className="relative size-[8px] shrink-0 rounded-[4px] bg-[#c9a84c]"
                  data-node-id="139:397"
                  data-name="Rectangle"
                />
                <p
                  className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Semibold'] text-[20px] font-[656.2000122070312] uppercase leading-[normal] tracking-[1px] text-[#c9a84c]"
                  data-node-id="139:398"
                >{`Client & Team workflow`}</p>
              </div>
              <p
                className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
                data-node-id="139:399"
              >
                Working directly with Dan as client, Amir as mentor, alongside
                with UXpert meant collaborating and translating research
                findings into decisions a real stakeholder could act on. It was
                really insighful to work with teammates who are in interaction
                design to learn from their knowledge but also with people from
                other faculty to share experiences and thoughts.
              </p>
            </div>
          </div>

          <div
            className="flex w-full flex-col items-start gap-[12px] rounded-[12px] bg-[#1c3354] p-[24px]"
            data-node-id="139:400"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[10px]"
              data-node-id="139:401"
              data-name="Frame"
            >
              <div
                className="relative size-[8px] shrink-0 rounded-[4px] bg-[#c9a84c]"
                data-node-id="139:402"
                data-name="Rectangle"
              />
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Semibold'] text-[20px] font-[656.2000122070312] uppercase leading-[normal] tracking-[1px] text-[#c9a84c]"
                data-node-id="139:403"
              >
                Research in 2 phases
              </p>
            </div>
            <p
              className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
              data-node-id="139:404"
            >
              I am not someone who is used to conducting interviews in general.
              So learning how to run usability interviews, synthesising them
              into an affinity map, then validating the fix through A/B testing
              was difficult but I learned so much from workshops and my
              teammates.
            </p>
          </div>

          <div
            className="flex w-full flex-col items-start gap-[12px] rounded-[12px] bg-[#1c3354] p-[24px]"
            data-node-id="139:405"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[10px]"
              data-node-id="139:406"
              data-name="Frame"
            >
              <div
                className="relative size-[8px] shrink-0 rounded-[4px] bg-[#c9a84c]"
                data-node-id="139:407"
                data-name="Rectangle"
              />
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Semibold'] text-[20px] font-[656.2000122070312] uppercase leading-[normal] tracking-[1px] text-[#c9a84c]"
                data-node-id="139:408"
              >
                Presenting with confidence
              </p>
            </div>
            <p
              className="[word-break:break-word] relative w-[min-content] min-w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
              data-node-id="139:409"
            >
              Pitching our work was outside my comfort zone. I am grateful to
              receive advice from UXID Soc exec and my teammate who is really
              experienced in public speaking.
            </p>
          </div>
        </div>

        {/* Elevated experience */}
        <div
          className="mt-[46px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:410"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="Elevated Experience"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
          data-node-id="139:411"
        >
          Elevated experience
        </p>
        <p
          className="[word-break:break-word] mt-[6px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:412"
        >
          Future directions (not delivered in this sprint)
        </p>

        <div
          className="mt-[22px] grid grid-cols-1 gap-[16px] md:grid-cols-2"
          data-node-id="139:413"
          data-name="Frame"
        >
          <div
            className="relative flex shrink-0 items-start justify-center gap-[16px] self-stretch justify-self-stretch rounded-[10px] bg-[#1c3354] p-[20px]"
            data-node-id="139:414"
            data-name="Frame"
          >
            <div
              className="relative h-[48px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="139:415"
              data-name="Rectangle"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[4px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal]"
              data-node-id="139:416"
              data-name="Frame"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[#c9a84c]"
                data-node-id="139:417"
              >
                Map Discovery Engine — Heatmaps
              </p>
              <p
                className="relative w-[min-content] min-w-full shrink-0 text-[#c8d0da]"
                data-node-id="139:418"
              >
                Visualise where activity clusters are forming in real time to
                surface ambient social energy before events are created.
              </p>
            </div>
          </div>

          <div
            className="relative flex shrink-0 flex-wrap content-start items-start justify-center gap-[16px] self-stretch justify-self-stretch rounded-[10px] bg-[#1c3354] p-[20px]"
            data-node-id="139:419"
            data-name="Frame"
          >
            <div
              className="relative h-[48px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="139:420"
              data-name="Rectangle"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start justify-end gap-[4px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal]"
              data-node-id="139:421"
              data-name="Frame"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[#c9a84c]"
                data-node-id="139:422"
              >
                In-App Chat for Social Moments
              </p>
              <p
                className="relative w-[min-content] min-w-full shrink-0 text-[#c8d0da]"
                data-node-id="139:423"
              >
                Lightweight messaging to coordinate around events rather than
                sustain ongoing one-to-one conversations.
              </p>
            </div>
          </div>

          <div
            className="relative flex shrink-0 items-start justify-center gap-[16px] self-stretch justify-self-stretch rounded-[10px] bg-[#1c3354] p-[20px]"
            data-node-id="139:424"
            data-name="Frame"
          >
            <div
              className="relative h-[48px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="139:425"
              data-name="Rectangle"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[4px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal]"
              data-node-id="139:426"
              data-name="Frame"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[#c9a84c]"
                data-node-id="139:427"
              >
                Activity-Based Friend Suggestions
              </p>
              <p
                className="relative w-[min-content] min-w-full shrink-0 text-[#c8d0da]"
                data-node-id="139:428"
              >
                Recommend people based on shared upcoming events and interest
                categories rather than proximity alone.
              </p>
            </div>
          </div>
        </div>

        {/* Process & Wireframes */}
        <div
          className="mt-[46px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:429"
          data-name="Rectangle"
        />
        <p
          data-scroll-section="Process & Wireframes"
          className="[word-break:break-word] mt-[40px] font-['Gugi:Regular'] text-[30px] not-italic leading-[normal] text-white"
          data-node-id="139:430"
        >{`Process & Wireframes`}</p>
        <p
          className="[word-break:break-word] mt-[14px] font-['SF_Compact:Regular'] text-[15px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="139:431"
        >
          Sketches, iterations and the messy middle
        </p>
        <p
          className="[word-break:break-word] mt-[12px] font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[1.58] text-[#c8d0da]"
          data-node-id="139:432"
        >
          Before committing to high-fidelity screens, we mapped flows, tested
          rough wireframes with users, and discarded several directions,
          including a card-stack redesign that still read as Tinder despite new
          content.
        </p>

        <div className="mt-[40px] grid grid-cols-1 gap-[26px] lg:grid-cols-[789fr_389fr]">
          <div
            className="relative aspect-[789/488] w-full rounded-[8.964px] border-[0.747px] border-solid border-[#c9a84c]"
            data-node-id="139:487"
            data-name="Rectangle"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[8.964px]"
            >
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8.964px] object-contain"
                src={imgRectangle4}
              />
              <img
                alt=""
                className="absolute size-full max-w-none rounded-[8.964px] object-cover"
                src={imgRectangle5}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-[28px]">
            <div
              className="relative aspect-[389/230] w-full rounded-[10px] border border-solid border-[#c9a84c]"
              data-node-id="139:488"
              data-name="Rectangle"
            >
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[10px] object-cover"
                src={imgRectangle6}
              />
            </div>

            <div
              className="relative aspect-[389/230] w-full rounded-[10px] border border-solid border-[#c9a84c]"
              data-node-id="139:489"
              data-name="Rectangle"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]">
                <img
                  alt=""
                  className="absolute left-[0.18%] top-[-11.11%] h-[144.07%] w-full max-w-none"
                  src={imgRectangle7}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-[80px] h-px w-full bg-[#c9a84c] opacity-40"
          data-node-id="139:433"
          data-name="Rectangle"
        />
        <div className="mt-[48px] flex flex-wrap items-start justify-between gap-6">
          <div
            className="flex flex-col items-start justify-center gap-[19px]"
            data-node-id="139:434"
          >
            <a
              href="https://www.figma.com/proto/r7N1GWdge9iNlE0EfEnAKd/UX-Project---RealSwipe?node-id=590-11547&p=f&viewport=410%2C481%2C0.02&t=fAfPQ7x2rx6Ty7lL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=590%3A11547&show-proto-sidebar=1&page-id=0%3A1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[10px] transition-opacity hover:opacity-80"
              data-node-id="139:435"
              data-name="Frame"
            >
              <div
                className="relative size-[18px] shrink-0"
                data-node-id="139:436"
                data-name="figma"
              >
                <img
                  alt=""
                  className="absolute inset-0 block size-full max-w-none"
                  src={imgFigma}
                />
              </div>
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[17px] font-[457.8999938964844] leading-[normal] text-[#c9a84c]"
                data-node-id="139:438"
              >
                Figma Design
              </p>
            </a>

            <a
              href="https://realswipe.com.au"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[10px] transition-opacity hover:opacity-80"
              data-node-id="139:439"
              data-name="Frame"
            >
              <div
                className="relative size-[18px] shrink-0"
                data-node-id="139:440"
                data-name="globe"
              >
                <img
                  alt=""
                  className="absolute inset-0 block size-full max-w-none"
                  src={imgGlobe}
                />
              </div>
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[17px] font-[457.8999938964844] leading-[normal] text-[#c9a84c]"
                data-node-id="139:442"
              >
                Realswipe.com.au
              </p>
            </a>
          </div>

          <button
            type="button"
            onClick={onNext}
            className="flex w-full max-w-[358px] cursor-pointer items-center justify-center rounded-[6px] bg-[#c9a84c] px-[28px] py-[14px] transition-[background,box-shadow] hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(219,194,140,0.5)]"
            data-node-id="139:490"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] font-normal leading-[normal] tracking-[1px] text-[#152741]"
              data-node-id="139:491"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              NEXT PROJECT →
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
