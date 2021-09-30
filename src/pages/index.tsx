import type { NextPage } from 'next';
import Head from 'next/head';
import Team from '../components/team';
import Header from '../components/header';
import Social from '../components/social';
import Partners from '../components/partners';
import Footer from '../components/footer';
import HowWorkYoutuber from '../components/how-work-youtuber';
import HowWorkPatron from '../components/how-work-patron';
import TechnicalViewpoint from '../components/technical-viewpoint';
import DevProtocol from '../components/dev-protocol';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
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
