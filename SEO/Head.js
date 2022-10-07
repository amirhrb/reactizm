import Head from "next/head";
import React from "react";

function HeadTag({ children }) {
  return (
    <Head>
      <meta name="theme-color" content="#ffb300" />
      {/* this sets logo in Apple smatphones.*/}
      <link rel="apple-touch-icon" href="/logo-192x192.png" />
      {/* <!-- this sets the color of url bar in Apple smatphones --> */}
      <meta name="apple-mobile-web-app-status-bar" content="#ffb300" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}

export default HeadTag;
