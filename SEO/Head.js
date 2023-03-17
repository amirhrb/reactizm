import Head from "next/head";

function HeadTag(props) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#ffb300" />
      {/* this sets logo in Apple smartphones.*/}
      <link rel="apple-touch-icon" href="/logo-192x192.png" />
      {/* <!-- this sets the color of url bar in Apple smatphones --> */}
      <meta name="apple-mobile-web-app-status-bar" content="#ffb300" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      {props.ogImage ? (
        <>
          <meta property="og:title" content={props.ogTitle} />
          <meta property="og:type" content={props.ogType} />
          <meta property="og:url" content={props.ogUrl} />
          <meta property="og:image" content={props.ogImage} />
        </>
      ) : (
        ""
      )}
      {props.children}
    </Head>
  );
}

export default HeadTag;
