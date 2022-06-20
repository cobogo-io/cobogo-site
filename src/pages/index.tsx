import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../components/Header';
import HeaderText from '../components/HeaderText';
import HowWorkContentCreator from '../components/HowWorkContentCreator';
import HowWorkFan from '../components/HowWorkFan';
import PlannedIntegrations from '../components/PlannedIntegrations';
import ReferralProgramToFans from '../components/ReferralProgramToFans';
import Team from '../components/Team';

export default function Index() {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <HeaderText />

      <HowWorkContentCreator />

      <HowWorkFan />

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
      'header-text',
      'how-work-content-creator',
      'how-work-fan',
      'team',
      'referral-program-to-fans',
      'planned-integrations',
      'footer',
    ])),
  },
});
