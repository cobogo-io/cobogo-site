import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import PageEn from './en/terms';
import PagePt from './pt/terms';
import PageEs from './es/terms';

const Terms: NextPage = () => {
  const router = useRouter();

  switch (router.locale) {
    case 'pt':
      return <PagePt />;
    case 'es':
      return <PageEs />;
    default:
      return <PageEn />;
  }
};

export default Terms;
