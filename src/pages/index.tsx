import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Header from '../components/Header';
import HowWorkContentCreator from '../components/HowWorkContentCreator';
import HowWorkPatron from '../components/HowWorkPatron';
import LightOnTop from '../components/LightOnTop';
import Partners from '../components/Partners';
import Team from '../components/Team';
import TechnicalViewpoint from '../components/TechnicalViewpoint';

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>cobogo</title>
      </Head>

      <LightOnTop />

      <Header />

      <HowWorkContentCreator setShowModal={setShowModal} />

      <HowWorkPatron setShowModal={setShowModal} />

      <TechnicalViewpoint />

      <Team />

      <Partners />

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
                    coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'header',
      'footer',
      'how-work-content-creator',
      'how-work-patron',
      'technical-viewpoint',
      'dev-protocol',
      'team',
      'partners',
      'social',
    ])),
    revalidate: 60 * 60,
  },
});
