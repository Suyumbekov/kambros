import type { Metadata } from "next"
import Link from "next/link"
import { Anchor, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service – Kambros LLC",
  description:
    "Terms of Service for Kambros LLC. Read about the terms and conditions governing the use of our website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Bar */}
      <header className="border-b border-border bg-primary">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <Anchor className="h-5 w-5 text-accent" />
            <span
              className="text-sm font-bold text-primary-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kambros LLC
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1
          className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: March 6, 2026
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-foreground/80">
          {/* 1 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Kambros LLC website and services, you
              agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our website or services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              2. Description of Services
            </h2>
            <p>
              Kambros LLC provides procurement services, logistics, warehousing,
              and distribution solutions for marine, offshore, mining, power
              generation, drilling, and chemical industries worldwide. Our
              website offers information about our services and allows you to
              contact us for inquiries and quotes.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              3. Use of Website
            </h2>
            <p className="mb-3">You agree to use our website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Infringe on or violate any third party&apos;s rights, including
                intellectual property rights.
              </li>
              <li>
                Interfere with or disrupt the website&apos;s functionality or
                security.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the website or
                its systems.
              </li>
              <li>
                Transmit any harmful, threatening, or unlawful material.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              4. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Kambros LLC or its
              content suppliers and is protected by international copyright and
              trademark laws. You may not reproduce, distribute, modify, or
              create derivative works from any content without our prior written
              consent.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              5. Disclaimer of Warranties
            </h2>
            <p>
              Our website and services are provided &quot;as is&quot; and
              &quot;as available&quot; without warranties of any kind, either
              express or implied. We do not warrant that the website will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Kambros LLC shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of our
              website or services, even if we have been advised of the
              possibility of such damages.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Kambros LLC, its
              officers, directors, employees, and agents from any claims,
              liabilities, damages, losses, or expenses arising from your use of
              our website or violation of these Terms of Service.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              8. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of Texas, United States,
              without regard to its conflict of law principles. Any disputes
              arising under these terms shall be subject to the exclusive
              jurisdiction of the courts located in Harris County, Texas.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              9. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting on this page. We
              encourage you to review these terms periodically for updates.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="mt-4 rounded-lg border border-border bg-secondary/50 p-5 text-sm">
              <p className="font-semibold text-foreground">Kambros LLC</p>
              <p className="mt-1">4402 Theiss Road, Humble, Texas 77338, USA</p>
              <p>Phone: +1 (281) 466 27 08</p>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
