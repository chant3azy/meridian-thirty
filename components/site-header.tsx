"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { NAV_ITEMS } from "@/lib/site"

function NavLink({
  href,
  children,
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  onNavigate?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative text-sm uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050d18]"
    >
      {children}
      <span
        className="absolute -bottom-2 left-0 h-px w-0 bg-[#5eb0f5] transition-all duration-500 group-hover:w-full group-focus-visible:w-full"
        aria-hidden
      />
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050d18]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden border border-[#3d8fd9]/50 px-6 py-3 text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:border-[#5eb0f5] hover:bg-[#3d8fd9]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 lg:inline-block"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`border-t border-white/5 bg-[#050d18]/95 px-6 py-8 lg:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile primary"
        hidden={!open}
      >
        <ul className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} onNavigate={() => setOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block border border-[#3d8fd9]/50 px-6 py-3 text-sm uppercase tracking-[0.15em]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
