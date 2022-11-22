import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta
          name="description"
          content="Nextone, yazılımcı ve geliştiricilerin aradığı bilgileri kolay bir şekilde bulabileceği, paylaşılan bilgilerde sadelik baz alınarak tasarlanmış bir platformdur."
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="/images/android-chrome-512x512.png"
        />
        <meta name="theme-color" content="#1e1e1e" />
        <meta property="og:site_name" content="Nextone" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
