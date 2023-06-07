import Head from "next/head";

import { RootLayout } from "@/components";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>
          Elemes: The Indonesia&apos;s best outsourced development center
        </title>
        <link rel="shortcut icon" href="/images/logo-elemesid.svg" />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
};

export default App;
