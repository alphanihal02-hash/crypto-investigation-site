// app/head.tsx

export default function Head() {
  return (
    <>
      {/* Default favicon (required for all browsers) */}
      <link rel="icon" href="/favicon.ico" />

      {/* Light mode icon */}
      <link
        rel="icon"
        href="/favicon-light.png"
        media="(prefers-color-scheme: light)"
      />

      {/* Dark mode icon */}
      <link
        rel="icon"
        href="/favicon-dark.png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  );
}
