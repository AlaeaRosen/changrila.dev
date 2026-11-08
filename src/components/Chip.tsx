export default function Chip({
  children,
  active,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[37.401px] border border-solid px-[10.009px] py-[2.107px] font-sf text-[15.803px] font-[457.8999938964844] leading-[normal] ${
        active ? "border-gold bg-gold text-ink" : "border-gold text-gold"
      }`}
    >
      {children}
    </span>
  )
}
