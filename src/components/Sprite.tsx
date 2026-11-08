import { A } from "../data"

const SHEET = { src: A("95e79.png"), w: 1024, h: 559 }

/** Crops from the train illustration sheet (Figma node 2:553, image 67/70). */
export const CROPS = {
  car: { x: 59, y: 170, w: 272, h: 216 },
  flask: { x: 392, y: 176, w: 242, h: 224 },
  loco: { x: 664, y: 117, w: 312, h: 270 },
} as const

type Props = {
  crop: keyof typeof CROPS
  flip?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function Sprite({ crop, flip, className = "", style }: Props) {
  const c = CROPS[crop]
  return (
    <div
      aria-hidden
      className={className}
      style={{
        aspectRatio: `${c.w} / ${c.h}`,
        backgroundImage: `url(${SHEET.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${(SHEET.w / c.w) * 100}% ${(SHEET.h / c.h) * 100}%`,
        backgroundPosition: `${(c.x / (SHEET.w - c.w)) * 100}% ${(c.y / (SHEET.h - c.h)) * 100}%`,
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
    />
  )
}
