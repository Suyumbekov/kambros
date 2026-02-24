import { Anchor, Phone, MapPin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Anchor className="h-6 w-6 text-accent" />
              <div>
                <span
                  className="text-sm font-bold text-primary-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Kambros LLC
                </span>
                <p className="text-[10px] uppercase tracking-widest text-primary-foreground/50">
                  Global Supply Chain Solutions
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Procurement Services & Logistics. Providing tailor-made solutions with over 40 years
              of experience in international supply chain management.
            </p>
          </div>

          {/* USA Office */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              USA Office
            </h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/40" />
                <div>
                  <p>4402 Theiss Road</p>
                  <p>Humble, Texas, 77338</p>
                  <p>United States of America</p>
                </div>
              </div>
              <a href="tel:+12814662708" className="flex items-center gap-2.5 transition-colors hover:text-primary-foreground">
                <Phone className="h-4 w-4 text-primary-foreground/40" />
                +1 (281) 466 27 08
              </a>
            </div>
          </div>

          {/* Europe Office */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Europe Office
            </h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/40" />
                <div>
                  <p>Pastoriestraat 1B</p>
                  <p>3195 HT, Pernis-Rotterdam</p>
                  <p>The Netherlands</p>
                </div>
              </div>
              <a href="tel:+31180331100" className="flex items-center gap-2.5 transition-colors hover:text-primary-foreground">
                <Phone className="h-4 w-4 text-primary-foreground/40" />
                +31 180 33 11 00
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {"© 2026 Kambros LLC. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
