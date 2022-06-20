import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Adhiraj Bhatia"
        titleTemplate="Adhiraj Bhatia"
        defaultTitle="Adhiraj Bhatia"
        description="A developer who loves to build unique and impactful products."
        openGraph={{
          url: "https://adhiraj.site/",
          title: "Adhiraj Bhatia",
          description:
            "A developer who loves to build unique and impactful products.",
          images: [
            {
              url: "/assets/og-image.png",
            },
          ],
        }}
        twitter={{
          handle: "@adhirajb1109",
          site: "@adhirajb1109",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Developer, Adhiraj, Adhiraj Bhatia, Full Stack Developer, Web Development, Web Developer, Tech Products, Startups, Open Source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assets/avatar.jpg" />
        <meta
          name="google-site-verification"
          content="-F5KEYR7HWa--QIiyrY1KKHdYxMiz5ycQ37WRiMDXns"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
