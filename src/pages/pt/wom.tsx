import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Social from '../../components/IndexPage/Social';
import Footer from '../../components/IndexPage/Footer';
import Link from '../../components/NextLink';
import ChooseLanguage from '../../components/ChooseLanguage';

const wom: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-bgprimary">
      <ChooseLanguage />
      <Head>
        <title>Cobogo - WOM</title>
      </Head>
      <div className="mx-5 md:mx-20 py-20">
        <Link href="/">
          <div className="w-60 h-14 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/logos/cobogo-logo.svg"
              alt="Guy playing youtube site"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">Wom</h1>
        <p className="regular-18 break-normal mb-5">
          portuguese
        </p>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default wom;
