import Head from "next/head";
import React, { useEffect, useState } from "react";

function HeadTag(props) {
  const [socials, setSocials] = useState({});
  useEffect(() => {
    if (props.socials) {
      setSocials(props.socials);
    }
  }, []);

  return (
    <Head>
      <meta name="theme-color" content="#ffb300" />
      {/* this sets logo in Apple smatphones.*/}
      <link rel="apple-touch-icon" href="/logo-192x192.png" />
      {/* <!-- this sets the color of url bar in Apple smatphones --> */}
      <meta name="apple-mobile-web-app-status-bar" content="#ffb300" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      {socials.length ? (
        <>
          <meta property="og:title" content={ogTitle} />
          <meta property="og:type" content={ogType} />
          <meta property="og:url" content={ogUrl} />
          <meta property="og:image" content={ogImage} />
        </>
      ) : (
        ""
      )}
      {props.children}
    </Head>
  );
}

export default HeadTag;
