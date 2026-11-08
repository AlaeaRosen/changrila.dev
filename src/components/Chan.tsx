import { A } from "../data"

type Key = {
  t: string
  l: number
  top: number
  h: number
  bg: string
  left?: boolean
  talk?: boolean
}

const H1 = 4.965
const H = 5.549
const W = "#ffffff"
const G = "#a5a5a5"
const KEYS: Key[] = [
  { t: "TALK", l: 6.13, top: 46.73, h: H1, bg: W, talk: true },
  { t: "AC", l: 6.13, top: 46.73, h: H1, bg: W },
  { t: "+/-", l: 17.82, top: 46.73, h: H1, bg: W },
  { t: "%", l: 29.5, top: 46.73, h: H1, bg: W },
  { t: "1", l: 6.13, top: 53.74, h: H, bg: G },
  { t: "4", l: 6.13, top: 60.16, h: H, bg: G },
  { t: "7", l: 6.13, top: 66.59, h: H, bg: G },
  { t: "delete", l: 6.13, top: 73.01, h: H, bg: W },
  { t: "2", l: 17.82, top: 53.74, h: H, bg: G },
  { t: "5", l: 17.82, top: 60.16, h: H, bg: G },
  { t: "8", l: 17.82, top: 66.59, h: H, bg: G },
  { t: "0", l: 17.82, top: 73.01, h: H, bg: G },
  { t: "3", l: 29.5, top: 53.74, h: H, bg: G },
  { t: "6", l: 29.5, top: 60.16, h: H, bg: G },
  { t: "-", l: 41.18, top: 60.16, h: H, bg: W },
  { t: "*", l: 41.18, top: 53.74, h: H, bg: W },
  { t: "/", l: 41.18, top: 47.31, h: H, bg: W },
  { t: "+", l: 41.18, top: 66.59, h: H, bg: W },
  { t: "enter", l: 41.18, top: 73.01, h: H, bg: W, left: true },
  { t: "9", l: 29.5, top: 66.59, h: H, bg: G },
  { t: ".", l: 29.5, top: 73.01, h: H, bg: W },
]

const keyShadow =
  "inset 0.292px 0.292px 0.964px 0px rgba(0,0,0,0.25), inset -0.584px -0.584px 0.263px 0px rgba(0,0,0,0.25)"

/** CHAN-1.0 calculator character (Figma "Chan-1.0", 2:404). Native box ≈ 84×106. */
export function ChanCalculator() {
  return (
    <div className="relative h-[106px] w-[84px]">
      <div className="absolute left-[8.32px] top-[12.56px] h-[82.941px] w-[57.825px] overflow-clip rounded-[7.009px]">
        <div className="pointer-events-none absolute inset-0 rounded-[7.009px] bg-gradient-to-b from-black from-[54.317%] to-[#faeeee] to-[54.327%]" />
        <div className="absolute left-[3.5px] top-[7.59px] h-[33.001px] w-[50.524px] overflow-clip rounded-[7.009px]">
          <div className="pointer-events-none absolute inset-0 rounded-[7.009px] bg-[#d6dae9]" />
          <div className="absolute left-[calc(50%+0.15px)] top-[5.84px] h-[22.488px] w-[41.47px] -translate-x-1/2 overflow-clip bg-white">
            <img
              alt=""
              className="absolute left-[-0.29px] top-0 block h-[22.488px] w-[41.91px] max-w-none"
              src={A("418ea.svg")}
            />
          </div>
          <div className="absolute left-0 top-0 h-[4.673px] w-[50.524px] bg-[#7d7d7d]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_-0.876px_-0.876px_1.168px_0px_rgba(0,0,0,0.25),inset_0px_1.168px_1.168px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <p className="absolute left-[14.02px] top-[2.92px] whitespace-nowrap font-pixel text-[3.505px] not-italic leading-[normal] text-white">
          CHAN-1.0 First Edition
        </p>
        {KEYS.map((k) => (
          <div
            key={k.t}
            className="absolute w-[10.514px] overflow-clip"
            style={{
              left: k.l,
              top: k.top,
              height: k.h,
              background: k.bg,
              borderRadius: k.talk ? "1.752px 0.876px 0.876px 2.336px" : 0.876,
              boxShadow: keyShadow,
            }}
          >
            <p
              className={`absolute whitespace-nowrap font-pixel text-[3.505px] not-italic leading-[normal] text-black ${
                k.left
                  ? "left-[1.46px]"
                  : "left-[5.26px] w-[10.514px] -translate-x-1/2 text-center"
              }`}
              style={{ top: k.h === H1 ? 0.58 : 0.88 }}
            >
              {k.t}
            </p>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_-0.292px_0.876px_7.097px_2.92px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-[13.58px] top-[4.96px] h-[9.345px] w-[3.505px] rounded-tl-[1.46px] rounded-tr-[1.46px] bg-[#020202]" />
      <div className="absolute left-[20.88px] top-[95.5px] h-[10.514px] w-[3.505px] rounded-bl-[1.46px] rounded-br-[1.46px] bg-[#020202]" />
      <div className="absolute left-[48.04px] top-[95.5px] h-[10.514px] w-[3.505px] rounded-bl-[1.46px] rounded-br-[1.46px] bg-[#020202]" />
      <div className="absolute left-[63.81px] top-[40.89px] flex size-[15.695px] items-center justify-center">
        <div className="h-[18.691px] w-[3.505px] -rotate-135 rounded-bl-[1.46px] rounded-br-[1.46px] bg-[#020202]" />
      </div>
      <div className="absolute left-[-4.82px] top-[40.89px] flex size-[15.695px] items-center justify-center">
        <div className="h-[18.691px] w-[3.505px] -scale-y-100 -rotate-45 rounded-bl-[1.46px] rounded-br-[1.46px] bg-[#020202]" />
      </div>
      <img
        alt=""
        className="absolute left-[10.95px] top-0 block h-[8.469px] w-[8.761px] max-w-none"
        src={A("55a96.svg")}
      />
    </div>
  )
}

/** Changelog icon (2:402) — the CHAN-1.0 badge in the bottom-left corner. */
export function ChanBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="CHAN-1.0 changelog"
      className="group relative size-[74px] cursor-pointer overflow-clip rounded-[39.926px] border-[2.409px] border-solid border-cream bg-[#4c4a46] shadow-[0px_0px_6.493px_2.644px_rgba(254,230,168,0.38)] outline-none transition-shadow hover:shadow-[0px_0px_14px_4px_rgba(254,230,168,0.5)] focus-visible:ring-2 focus-visible:ring-white"
    >
      <div className="absolute left-[-2.41px] top-[-2.41px] transition-transform duration-300 group-hover:-translate-y-[3px]">
        <ChanCalculator />
      </div>
    </button>
  )
}
