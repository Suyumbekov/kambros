import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          className="mx-auto max-w-2xl text-3xl font-bold text-secondary-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-balance">Ready to streamline your supply chain?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
          Contact us today to discuss how Kambros LLC can support your procurement and logistics
          requirements with tailored, cost-effective solutions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+31180331100"
            className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-background"
          >
            Call Our EU Office
          </a>
        </div>
      </div>
    </section>
  )
}
