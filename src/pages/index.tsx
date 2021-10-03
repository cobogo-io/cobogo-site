import type { NextPage } from 'next';
import Head from 'next/head';
import Team from '../components/pages/Team';
import Header from '../components/pages/Header';
import Social from '../components/pages/Social';
import Partners from '../components/pages/Partners';
import Footer from '../components/pages/Footer';
import HowWorkYoutuber from '../components/pages/HowWorkYoutuber';
import HowWorkPatron from '../components/pages/HowWorkPatron';
import TechnicalViewpoint from '../components/pages/TechnicalViewpoint';
import DevProtocol from '../components/pages/DevProtocol';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="overflow-x-auto">
      <Head>
        <title>Cobogo</title>
        <meta
          name="description"
          content="cobogo allows fans to support their favorite Youtube channels by sharing the rewards of their investments in a fashion way"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:site" content="@cobogosocial" />
        <meta name="twitter:title" content="Título da página" />
        <meta
          name="twitter:description"
          content="Descrição da página. No máximo 200 caracteres"
        />
        <meta name="twitter:creator" content="@cobogosocial" />
        <meta
          name="twitter:image"
          content="http://cobogo-site.vercel.app/cobogo.png"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Cobogo dApp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://cobogo-site.vercel.app/" />
        <meta
          property="og:image"
          content="http://cobogo-site.vercel.app/cobogo.png"
        />
        <meta
          property="og:description"
          content="cobogo allows fans to support their favorite Youtube channels by sharing the rewards of their investments in a fashion way"
        />
        <meta property="og:site_name" content="Cobogo" />
      </Head>

      <Header />
      <HowWorkYoutuber />
      <HowWorkPatron />
      <TechnicalViewpoint />
      <DevProtocol />
      <Team />
      <Partners />
      <Social />
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'header',
      'footer',
      'how-work-youtuber',
      'how-work-patron',
      'technical-viewpoint',
      'dev-protocol',
      'team',
      'partners',
      'social',
    ])),
  },
});

export default Home;
