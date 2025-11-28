// app/head.tsx

export default function Head() {
  return (
    <>
      {/* Required default favicon (fallback) */}
      <link rel="icon" href="/favicon.png" sizes="32x32" />

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
  );
}
