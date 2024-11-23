import "@/styles/globals.css";
import React from 'react';
import Head from 'next/head';


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shaka Pratama</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
