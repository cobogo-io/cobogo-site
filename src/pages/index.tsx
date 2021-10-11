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
import React, { useState } from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-screen overflow-hidden">
      <Head>
        <title>Cobogo</title>
      </Head>
      <Header />
      <HowWorkYoutuber setShowModal={setShowModal} />
      <HowWorkPatron setShowModal={setShowModal} />
      <TechnicalViewpoint />
      <DevProtocol />
      <Team />
      <Partners />
      <Social />
      <Footer />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-non"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className="w-96 h-96 relative">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src="/images/underconstruction.svg"
                      alt="Coins icon"
                    />
                  </div>
                  <p className="my-4 text-3xl text-center leading-relaxed">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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
