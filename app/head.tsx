// app/head.tsx

export default function Head() {
  return (
    <>
      {/* Light mode favicon */}
      <link
        rel="icon"
        href="/favicon-light.png"
        media="(prefers-color-scheme: light)"
      />

      {/* Dark mode favicon */}
      <link
        rel="icon"
        href="/favicon-dark.png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  )
}
