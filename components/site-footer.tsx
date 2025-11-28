import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* TOP SECTION WITH LOGO */}
        <div className="flex items-center gap-3 mb-8">

          {/* Light mode logo */}
          <Image
            src="/images/coincandid-logo-light.png"
            alt="CoinCandid logo"
            width={40}
            height={40}
            className="h-10 w-auto dark:hidden"
          />

          {/* Dark mode logo */}
          <Image
            src="/images/coincandid-logo-dark.png"
            alt="CoinCandid logo"
            width={40}
            height={40}
            className="hidden h-10 w-auto dark:block"
          />

          <span className="font-semibold text-lg">CoinCandid</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
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
                  We are not a law firm and do not provide legal advice.
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
