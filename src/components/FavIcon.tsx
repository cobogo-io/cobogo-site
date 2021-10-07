const FavIcon = (): JSX.Element => {
  return (
    <>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="##4FB9E3" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#5bbad5"
      ></link>
      <meta name="apple-mobile-web-app-title" content="Snippit" />
      <meta name="application-name" content="Cobogo" />
      <meta name="msapplication-TileColor" content="#4FB9E3" />
      <meta name="theme-color" content="#4FB9E3" />
    </>
  );
};

export default FavIcon;
