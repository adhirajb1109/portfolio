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
        <link
          rel="icon"
          type="image/jpg"
          href="https://i.ibb.co/chwshPs/avatar.jpg"
        />
        <title>Adhiraj Bhatia</title>
        <meta
          name="description"
          content="A developer who loves to build unique and impactful products."
        />
        <meta
          property="keywords"
          content="Developer, Adhiraj, Adhiraj Bhatia, Full Stack Developer, Web Development, Web Developer, Tech Products, Startups, Open Source"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="google-site-verification"
          content="-F5KEYR7HWa--QIiyrY1KKHdYxMiz5ycQ37WRiMDXns"
        />
        <meta name="twitter:image" content="https://i.ibb.co/xHZpHS4/rsz-og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adhirajb1109" />
        <meta name="twitter:creator" content="@adhirajb1109" />
        <meta
          property="og:image"
          content="https://i.ibb.co/cwG3Jg7/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Adhiraj Bhatia" />
        <meta
          property="og:description"
          content="A developer who loves to build unique and impactful products."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
