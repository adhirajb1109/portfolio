import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>Adhiraj Bhatia</title>
        <meta
          name="description"
          content="A developer who loves to build unique and impactful products."
        />
        <meta
          property="keywords"
          content="Developer, Adhiraj, Adhiraj Bhatia, Full Stack Developer, Web Development, Web Developer, Tech Products, Startups, Open Source"
        />
        <link rel="canonical" href="https://adhiraj.site/" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="google-site-verification"
          content="-F5KEYR7HWa--QIiyrY1KKHdYxMiz5ycQ37WRiMDXns"
        />
        <meta property="og:url" content="https://adhiraj.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adhiraj Bhatia" />
        <meta
          property="og:description"
          content="A developer who loves to build unique and impactful products."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adhiraj.site" />
        <meta property="twitter:url" content="https://adhiraj.site/" />
        <meta name="twitter:title" content="Adhiraj Bhatia" />
        <meta
          name="twitter:description"
          content="A developer who loves to build unique and impactful products."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
