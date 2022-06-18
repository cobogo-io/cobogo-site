import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useState } from 'react';

import Header from '../components/Header';
import HeaderText from '../components/HeaderText';
import HowWorkContentCreator from '../components/HowWorkContentCreator';
import HowWorkPatron from '../components/HowWorkPatron';
import PlannedIntegrations from '../components/PlannedIntegrations';
import ReferralProgramToFans from '../components/ReferralProgramToFans';
import Team from '../components/Team';

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      <Header />

      <HeaderText />

      <HowWorkContentCreator setShowModal={setShowModal} />

      <HowWorkPatron setShowModal={setShowModal} />

      <Team />

      <ReferralProgramToFans />

      <PlannedIntegrations />

      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-non"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="relative flex-auto p-6">
                  <div className="relative w-96 h-96">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src="/images/underconstruction.svg"
                      alt="Coins icon"
                    />
                  </div>
                  <p className="my-4 text-3xl leading-relaxed text-center">
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
      'referral-program-to-fans',
    ])),
  },
});
