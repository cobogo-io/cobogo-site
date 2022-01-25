import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import PageEn from './en/privacy';
import PagePt from './pt/privacy';
import PageEs from './es/privacy';

const Privacy: NextPage = () => {
  const router = useRouter();

  switch(router.locale) {
    case 'pt':
      return (
        <PagePt />
      );
    case 'es':
      return (
        <PageEs />
      );
    default:
      return (
        <PageEn />
      )
  }
};

export default Privacy;
