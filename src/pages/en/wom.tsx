import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Social from '../../components/IndexPage/Social';
import Footer from '../../components/IndexPage/Footer';
import Link from '../../components/NextLink';
import ChooseLanguage from '../../components/ChooseLanguage';

const Wom: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-bgprimary">
      <ChooseLanguage />
      <Head>
        <title>Cobogo - WOM</title>
      </Head>
      <header className="mx-5 md:mx-20 bg-zinc-500">
        <Link href="/">
          <Image
            src="/logos/cobogo-logo.svg"
            alt="Cobogo"
            width="120"
            height="27"
          />
        </Link>
      </header>
      <section className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="mb-5">
          <span className="light-50">enjoyed</span> <span className="bold-50">cobogo?</span>
        </h1>
        <p className="break-normal mb-5">
          <span className="regular-40">record a recommendation for it using </span> <span className="bold-40">BULLZ </span> <span className="regular-40">and earn </span> <span className="bold-40"> WOM </span> <span className="regular-40">rewards!</span>
        </p>
      </section>
      <Social />
      <Footer />
    </div>
  );
};

export default Wom;
