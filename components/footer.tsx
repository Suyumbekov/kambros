import { Anchor } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

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
              Procurement Services & Logistics. Providing tailor-made solutions with over 20 years
              of experience in international supply chain management.
            </p>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h3>
            <ContactForm accessKey={process.env.WEB3FORMS_ACCESS_KEY?.trim()} />
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {"© 2026 Kambros LLC. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
