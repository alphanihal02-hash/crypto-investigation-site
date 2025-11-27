import { CaseForm } from "@/components/case-form"

export const metadata = {
  title: "Submit Your Case — Crypto Investigation Intake | CoinCandid",
  description:
    "Confidential crypto investigation intake. Provide incident details, addresses, and evidence for analyst review.",
  alternates: { canonical: "https://coincandid.com/case/submit" },
  openGraph: {
    type: "website",
    url: "https://coincandid.com/case/submit",
    title: "Submit Your Case — CoinCandid",
    description: "Confidential crypto investigation intake for fast analyst review.",
    images: [{ url: "/images/og-default.jpg" }],
  },
}

export default function SubmitCasePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Submit Your Crypto Investigation Case</h1>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Please share as much detail as possible about your incident. We keep your information confidential and only use
        it to evaluate your case.
      </p>
      <div className="mt-8">
        <CaseForm />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        By submitting, you agree to our processing of your data for the purpose of case evaluation.
      </p>
    </div>
  )
}
