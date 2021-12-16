import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react';
import PageEn from './en/wom';
import PagePt from './pt/wom';
import PageEs from './es/wom';

const Wom: NextPage = () => {
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

export default Wom;
