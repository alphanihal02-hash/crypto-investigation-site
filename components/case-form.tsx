import { redirect } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

async function submitCase(formData: FormData) {
  "use server"
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const subject = String(formData.get("subject") || "").trim()
  const caseType = String(formData.get("caseType") || "").trim()
  const chain = String(formData.get("chain") || "").trim()
  const txHash = String(formData.get("txHash") || "").trim()
  const details = String(formData.get("details") || "").trim()
  const consent = String(formData.get("consent") || "")

  if (!name || !email || !details || consent !== "on") {
    // Basic guard; you could return a form state and re-render with errors
    redirect("/case/submit?error=missing_fields")
  }

  const caseId = crypto.randomUUID()

  // For now, we log the submission server-side. Replace with an email, DB, or ticket integration.
  console.log("[CoinCandid] New case submission", {
    caseId,
    receivedAt: new Date().toISOString(),
    name,
    email,
    subject,
    caseType,
    chain,
    txHash,
    detailsPreview: details.slice(0, 160),
  })

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const EMAIL_TO = process.env.EMAIL_TO
    const EMAIL_FROM = process.env.EMAIL_FROM // e.g. "CoinCandid <noreply@coincandid.com>"

    if (!RESEND_API_KEY || !EMAIL_TO || !EMAIL_FROM) {
      console.error("[CoinCandid] Email not sent: missing env vars RESEND_API_KEY, EMAIL_TO, or EMAIL_FROM")
    } else {
      const plainText = [
        `New case submission (ID: ${caseId})`,
        `Name: ${name}`,
        `Email: ${email}`,
        subject ? `Subject: ${subject}` : null,
        `Case Type: ${caseType}`,
        `Chain: ${chain}`,
        txHash ? `Tx Hash: ${txHash}` : null,
        "",
        "Details:",
        details,
      ]
        .filter(Boolean)
        .join("\n")

      const html = `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 8px">New CoinCandid Case</h2>
          <p style="margin:0 0 12px"><strong>ID:</strong> ${caseId}</p>
          <p style="margin:0"><strong>Name:</strong> ${name}</p>
          <p style="margin:0"><strong>Email:</strong> ${email}</p>
          ${subject ? `<p style="margin:0"><strong>Subject:</strong> ${subject}</p>` : ""}
          <p style="margin:0"><strong>Case Type:</strong> ${caseType}</p>
          <p style="margin:0 0 12px"><strong>Chain:</strong> ${chain}</p>
          ${txHash ? `<p style="margin:0 0 12px"><strong>Tx Hash:</strong> ${txHash}</p>` : ""}
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="margin:0 0 4px"><strong>Details</strong></p>
          <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;margin:0">${details}</pre>
        </div>
      `

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: EMAIL_FROM,
          to: EMAIL_TO,
          subject: subject || `New CoinCandid case from ${name}`,
          text: plainText,
          html,
        }),
        cache: "no-store",
      })

      if (!response.ok) {
        const err = await response.text().catch(() => "")
        console.error("[CoinCandid] Resend error", response.status, err)
      }
    }
  } catch (err: any) {
    console.error("[CoinCandid] Email send failed:", err?.message || err)
  }

  redirect("/case/thanks")
}

export function CaseForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <form action={submitCase} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Brief summary (optional)" />
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="caseType">Case type</Label>
              <select
                id="caseType"
                name="caseType"
                className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue="fraud"
              >
                <option value="fraud">Fraud / Scam</option>
                <option value="hack">Hack / Compromise</option>
                <option value="extortion">Extortion</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="chain">Chain</Label>
              <select
                id="chain"
                name="chain"
                className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue="ethereum"
              >
                <option value="ethereum">Ethereum</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bsc">BNB Chain</option>
                <option value="solana">Solana</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="txHash">Transaction hash (optional)</Label>
              <Input id="txHash" name="txHash" placeholder="0x..." />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="details">Details</Label>
            <Textarea
              id="details"
              name="details"
              required
              placeholder="Describe what happened, include addresses, timelines, amounts, and any evidence."
              rows={8}
            />
          </div>
          <div className="flex items-center gap-2">
            <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border" required />
            <Label htmlFor="consent" className="text-sm text-muted-foreground">
              I consent to the processing of my data for case evaluation.
            </Label>
          </div>
          <div>
            <Button type="submit" className="w-full md:w-auto">
              Submit case
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
