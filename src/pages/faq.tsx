import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react';
import PageEn from './en/faq';
import PagePt from './pt/faq';

const Faq: NextPage = () => {
  const router = useRouter();

  switch(router.locale) {
    case 'pt':
      return (
        <PagePt />
      );
    default:
      return (
        <PageEn />
      )
  }
};

export default Faq;
