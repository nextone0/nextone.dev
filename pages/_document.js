import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta
          name="description"
          content="Nextone, yazılımcı ve geliştiricilerin aradığı bilgileri kolay bir şekilde bulabileceği, paylaşılan bilgilerde sadelik baz alınarak tasarlanmış bir platformdur."
        />
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
