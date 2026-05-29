import Link from "next/link"

type LogoProps = {
  className?: string
  size?: "nav" | "footer"
}

export function Logo({ className = "", size = "nav" }: LogoProps) {
  const scale = size === "nav" ? "text-[clamp(2.5rem,5vw,3.5rem)]" : "text-5xl"

  return (
    <Link
      href="/"
      className={`inline-flex items-center font-serif leading-none tracking-tight text-white ${scale} ${className}`.trim()}
      aria-label="M30 home"
    >
      <span>M</span>
      <span className="bg-[linear-gradient(180deg,#ffffff_0%,#b7d4ff_35%,#3d8fd9_100%)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(61,143,217,0.4)]">
        3
      </span>
      <span>0</span>
    </Link>
  )
}
