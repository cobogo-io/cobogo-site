import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>Cobogo</title>
        <meta name="description" content="Cobogo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/" locale={router.locale === 'en' ? 'de' : 'en'}>
          {t('change-locale')}
        </Link>
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
});

export default Home;
