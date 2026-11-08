import { ABOUT } from "../data"

/** "Changrila Card" (2:326). */
export default function ProfileCard({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block h-[111.557px] w-[366px] cursor-pointer text-left outline-none"
      aria-label="About Changrila"
    >
      <div className="absolute left-[27.51px] top-0 h-[111.557px] w-[338.493px] overflow-clip bg-gradient-to-r from-[rgba(5,12,24,0.5)] from-[63.942%] to-[rgba(16,18,42,0.4)] text-white transition-colors group-hover:from-[rgba(5,12,24,0.7)]">
        <p className="absolute left-[63.42px] top-[28.27px] whitespace-nowrap font-sf-bold text-[20px] font-[790] leading-[normal]">
          {ABOUT.name}
        </p>
        <p className="absolute left-[63.42px] top-[55.78px] whitespace-nowrap font-sf text-[15px] font-[457.8999938964844] leading-[normal]">
          {ABOUT.role}
        </p>
      </div>
      <div className="absolute left-0 top-[17.57px] size-[77.173px] overflow-hidden border-l-[3.82px] border-solid border-cream transition-shadow group-hover:shadow-[0_0_14px_rgba(254,230,168,0.5)] group-focus-visible:ring-2 group-focus-visible:ring-cream">
        <img
          alt={ABOUT.name}
          className="absolute left-[0.02%] top-[-6.69%] h-[177.78%] w-full max-w-none"
          src={ABOUT.portrait}
        />
      </div>
    </button>
  )
}
