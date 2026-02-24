"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, Anchor, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Warehousing", href: "#warehousing" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Anchor className="h-7 w-7 text-accent" />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-primary-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Kambros LLC
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary-foreground/60">
              Global Supply Chain Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+31180331100"
            className="flex items-center gap-2 text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>test@kambros.com</span>
          </a>
          <a
            href="tel:+12814662708"
            className="flex items-center gap-2 text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>US: +1 281 466 2708</span>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-primary-foreground/5 py-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a href="tel:+31180331100" className="flex items-center gap-2 text-xs text-primary-foreground/70">
                <Phone className="h-3.5 w-3.5" />
                EU: +31 180 33 11 00
              </a>
              <a href="tel:+12814662708" className="flex items-center gap-2 text-xs text-primary-foreground/70">
                <Phone className="h-3.5 w-3.5" />
                US: +1 281 466 2708
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
