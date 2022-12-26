import Head from "next/head";
import React from "react";

function HeadTag({ children, socials: { ogTitle, ogType, ogUrl, ogImage } }) {
  console.log({ ogImage, ogTitle, ogType, ogUrl });
  return (
    <Head>
      <meta name="theme-color" content="#ffb300" />
      {/* this sets logo in Apple smatphones.*/}
      <link rel="apple-touch-icon" href="/logo-192x192.png" />
      {/* <!-- this sets the color of url bar in Apple smatphones --> */}
      <meta name="apple-mobile-web-app-status-bar" content="#ffb300" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      {ogTitle ? <meta property="og:title" content={ogTitle} /> : ""}
      {ogType ? <meta property="og:type" content={ogType} /> : ""}
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : ""}
      {ogImage ? <meta property="og:image" content={ogImage} /> : ""}
      {children}
    </Head>
  );
}

export default HeadTag;
