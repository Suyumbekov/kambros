import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-primary">
      <Image
        src="/images/hero.jpg"
        alt="Container ship sailing through ocean representing global logistics"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent" style={{ fontFamily: "var(--font-heading)" }}>
          Global Supply Chain Services & Logistics
        </p>
        <h1
          className="max-w-3xl text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-balance">Turning your targets into our results.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          At KAMBROS LLC, we deliver end-to-end supply chain solutions worldwide. From sourcing and procurement to inspection and expediting, we ensure your products arrive on time and meet the highest standards. Our services also include shipment consolidation, export packing, and full export support—making global trade seamless and efficient for your business.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Our Services
            <ArrowDown className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
