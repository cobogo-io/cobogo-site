import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react';
import PageEn from './en/faq';
import PagePt from './pt/faq';
import PageEs from './es/faq';

const Faq: NextPage = () => {
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

export default Faq;
