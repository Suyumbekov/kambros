export default async (request: Request) => {
  const reply = (status: number, message: string, success = false) =>
    Response.json({ success, message }, {
      status,
      headers: { "Cache-Control": "no-store" },
    })

  if (request.method !== "POST") {
    return new Response(null, { status: 405, headers: { Allow: "POST" } })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim()
  if (!accessKey) return reply(503, "The contact service is temporarily unavailable.")

  let input: FormData
  try {
    input = await request.formData()
  } catch {
    return reply(400, "Invalid form submission.")
  }

  if (input.get("botcheck")) return reply(400, "Invalid form submission.")

  const payload = new FormData()
  const limits: Record<string, number> = {
    name: 200, email: 254, phone: 50, company: 200, message: 5000,
    "h-captcha-response": 10000,
  }
  for (const [field, limit] of Object.entries(limits)) {
    const value = input.get(field)
    if (typeof value !== "string" || !value.trim() || value.length > limit) {
      return reply(400, "Please complete all fields and the verification.")
    }
    payload.set(field, value.trim())
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.get("email")))) {
    return reply(400, "Please enter a valid email address.")
  }
  payload.set("access_key", accessKey)
  payload.set("subject", "New inquiry from the Kambros website")
  payload.set("from_name", "Kambros Website")

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: payload,
      signal: AbortSignal.timeout(15000),
    })
    const result = await response.json().catch(() => null)
    if (response.ok && result?.success === true) {
      return reply(200, "Your inquiry has been sent.", true)
    }
    if (response.status === 429) {
      return reply(429, "Too many inquiries. Please wait and try again later.")
    }
    return reply(502, "The email service couldn't process your inquiry. Please try again later.")
  } catch {
    return reply(502, "Delivery couldn't be confirmed. Please try again later.")
  }
}
