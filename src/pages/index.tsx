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
        <meta name="description" content="Cobogo" />
        <link rel="icon" href="/favicon.ico" />
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
