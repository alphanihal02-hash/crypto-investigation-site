// app/head.tsx

export default function Head() {
  return (
    <>
      {/* Main favicon (force refresh with ?v=2) */}
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico?v=2"
      />

      {/* PNG fallback (also cache-busted) */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png?v=2"
      />

      {/* Optional: shortcut icon for some browsers */}
      <link
        rel="shortcut icon"
        href="/favicon.ico?v=2"
        type="image/x-icon"
      />
    </>
  )
}
