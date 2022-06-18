import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../components/Header';
import HeaderText from '../components/HeaderText';
import HowWorkContentCreator from '../components/HowWorkContentCreator';
import HowWorkPatron from '../components/HowWorkPatron';
import PlannedIntegrations from '../components/PlannedIntegrations';
import ReferralProgramToFans from '../components/ReferralProgramToFans';
import Team from '../components/Team';

export default function Index() {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <HeaderText />

      <HowWorkContentCreator />

      <HowWorkPatron />

      <Team />

      <ReferralProgramToFans />

      <PlannedIntegrations />
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
