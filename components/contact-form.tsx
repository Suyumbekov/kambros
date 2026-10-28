"use client"

import { useRef, useState, type FormEvent } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { ArrowRight } from "lucide-react"

const fieldClassName =
  "mt-2 block w-full rounded-md border border-primary-foreground/40 bg-primary-foreground px-4 py-3 text-sm text-primary shadow-sm outline-none transition-colors placeholder:text-primary/50 focus:border-accent focus:ring-2 focus:ring-accent/50 disabled:opacity-60"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [captchaToken, setCaptchaToken] = useState("")
  const captchaRef = useRef<HCaptcha>(null)
  const isSubmitting = status === "submitting"

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    if (!captchaToken) {
      setErrorMessage("Please complete the verification before sending your inquiry.")
      setStatus("error")
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    if (formData.get("botcheck")) return

    formData.append("subject", "New inquiry from the Kambros website")
    formData.append("from_name", "Kambros Website")
    formData.set("h-captcha-response", captchaToken)

    setErrorMessage("")
    setStatus("submitting")

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
        signal: AbortSignal.timeout(20000),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || result?.success !== true) {
        const message = result?.message ?? result?.body?.message
        setErrorMessage(
          typeof message === "string" && message.trim()
            ? message
            : response.status === 429
              ? "Too many inquiries have been submitted. Please wait and try again later."
              : "The email service couldn't process your inquiry. Please try again later."
        )
        setStatus("error")
        return
      }

      form.reset()
      setStatus("success")
    } catch (error) {
      const isTimeout = error instanceof Error &&
        (error.name === "TimeoutError" || error.name === "AbortError")
      setErrorMessage(
        isTimeout
          ? "The request timed out. Delivery couldn't be confirmed. Please try again later."
          : "We couldn't connect to the email service. Please check your internet connection and try again."
      )
      setStatus("error")
    } finally {
      setCaptchaToken("")
      captchaRef.current?.resetCaptcha()
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <fieldset disabled={isSubmitting} className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-primary-foreground">
          Full name <span aria-hidden="true">*</span>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            maxLength={200}
            required
            className={fieldClassName}
          />
        </label>

        <label htmlFor="contact-email" className="text-sm font-medium text-primary-foreground">
          Email <span aria-hidden="true">*</span>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            maxLength={254}
            required
            className={fieldClassName}
          />
        </label>

        <label htmlFor="contact-phone" className="text-sm font-medium text-primary-foreground">
          Phone number <span aria-hidden="true">*</span>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Include your country code"
            maxLength={50}
            required
            className={fieldClassName}
          />
        </label>

        <label htmlFor="contact-company" className="text-sm font-medium text-primary-foreground">
          Company name <span aria-hidden="true">*</span>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company name"
            maxLength={200}
            required
            className={fieldClassName}
          />
        </label>

        <label htmlFor="contact-inquiry" className="text-sm font-medium text-primary-foreground sm:col-span-2">
          Inquiry <span aria-hidden="true">*</span>
          <textarea
            id="contact-inquiry"
            name="message"
            placeholder="Tell us how we can help"
            rows={4}
            maxLength={5000}
            required
            className={`${fieldClassName} resize-y`}
          />
        </label>

        <div className="sm:col-span-2">
          <div className="w-fit [zoom:0.8]">
            <HCaptcha
              ref={captchaRef}
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              size="normal"
              theme="light"
              onVerify={(token) => {
                setCaptchaToken(token)
                if (status === "error") {
                  setErrorMessage("")
                  setStatus("idle")
                }
              }}
              onExpire={() => {
                setCaptchaToken("")
                if (!isSubmitting) {
                  setErrorMessage("Verification expired. Please complete it again before sending.")
                  setStatus("error")
                }
              }}
              onError={() => {
                setCaptchaToken("")
                if (!isSubmitting) {
                  setErrorMessage("Verification couldn't load. Please refresh the page and try again.")
                  setStatus("error")
                }
              }}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting || !captchaToken}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </fieldset>

      {(status === "success" || status === "error") && (
        <p role="status" aria-atomic="true" className="mt-3 text-sm text-primary-foreground/70">
          {status === "success"
            ? "Thank you! Your inquiry has been sent. We will be in touch soon."
            : errorMessage}
        </p>
      )}
    </form>
  )
}
