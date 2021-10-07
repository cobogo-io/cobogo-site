import type { NextPage } from 'next';
import Head from 'next/head';
import Team from '../components/IndexPage/Team';
import Header from '../components/IndexPage/Header';
import Social from '../components/IndexPage/Social';
import Partners from '../components/IndexPage/Partners';
import Footer from '../components/IndexPage/Footer';
import HowWorkYoutuber from '../components/IndexPage/HowWorkYoutuber';
import HowWorkPatron from '../components/IndexPage/HowWorkPatron';
import TechnicalViewpoint from '../components/IndexPage/TechnicalViewpoint';
import DevProtocol from '../components/IndexPage/DevProtocol';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="overflow-x-auto">
      <Head>
        <title>Cobogo</title>
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
