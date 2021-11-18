import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react';
import PageEn from './en/code';
import PagePt from './pt/code';
import PageEs from './es/code';

const Code: NextPage = () => {
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

export default Code;
