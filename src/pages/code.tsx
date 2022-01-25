import { useRouter } from 'next/router';

import PageEn from './en/code';
import PageEs from './es/code';
import PagePt from './pt/code';

export default function Code() {
  const router = useRouter();

  switch (router.locale) {
    case 'pt':
      return <PagePt />;
    case 'es':
      return <PageEs />;
    default:
      return <PageEn />;
  }
}
