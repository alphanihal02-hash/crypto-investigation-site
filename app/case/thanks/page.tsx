import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Thank You — Case Submitted | CoinCandid",
  alternates: { canonical: "https://coincandid.com/case/thanks" },
}

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold">Thank you for your submission</h1>
      <p className="mt-3 text-muted-foreground">
        Our analysts will review your case and follow up if more details are needed. You’ll receive a response shortly.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
