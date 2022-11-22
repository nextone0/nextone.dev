import Script from "next/script";

import "../styles/globals.css";

import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9006245154747339"
        crossorigin="anonymous"
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
