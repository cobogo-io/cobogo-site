import type { NextPage } from 'next';
import Head from 'next/head';
import Team from '../components/Team';
import Header from '../components/Header';
import Social from '../components/Social';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import HowWorkYoutuber from '../components/HowWorkYoutuber';
import HowWorkPatron from '../components/HowWorkPatron';
import TechnicalViewpoint from '../components/TechnicalViewpoint';
import DevProtocol from '../components/DevProtocol';
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
