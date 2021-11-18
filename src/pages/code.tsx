import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react';
import PageEn from './en/code';
import PagePt from './pt/code';

const Code: NextPage = () => {
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

export default Code;
