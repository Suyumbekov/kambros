import type { Metadata } from "next"
import Link from "next/link"
import { Anchor, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy – Kambros LLC",
  description:
    "Privacy Policy for Kambros LLC. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
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
          Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              Kambros LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy and is committed to protecting the personal
              information you share with us. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or engage with our procurement and logistics
              services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, and mailing address when you contact
                us, request a quote, or fill out forms on our website.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including IP address, browser type, pages
                visited, and time spent on our site.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your browsing
                experience and analyze website traffic.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              3. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>
                To process and fulfill procurement and logistics service
                requests.
              </li>
              <li>
                To improve our website, services, and overall user experience.
              </li>
              <li>
                To send you relevant communications about our services, with
                your consent where required.
              </li>
              <li>To comply with applicable legal obligations.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              4. Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information with trusted third-party service providers who assist
              us in operating our website or conducting our business, provided
              they agree to keep your information confidential. We may also
              disclose information when required by law or to protect our legal
              rights.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              6. Your Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including the right to access, correct,
              delete, or restrict the processing of your data. To exercise these
              rights, please contact us using the information provided below.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites. We
              encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2
              className="mb-3 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
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
