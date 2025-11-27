import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">CoinCandid</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Crypto investigations and legal support. Confidential and professional.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case/submit" className="text-muted-foreground hover:text-foreground">
                  Submit a case
                </Link>
              </li>
              <li>
                <a href="mailto:hello@coincandid.com" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">
                  {"We are not a law firm and do not provide legal advice."}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} CoinCandid. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
