import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from '../components/NextLink';
import Social from '../components/IndexPage/Social';
import Footer from '../components/IndexPage/Footer';
import FaqContent from '../components/Faq';
import ChooseLanguage from '../components/ChooseLanguage';

const Faq: NextPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen h-full bg-bgprimary">
      <ChooseLanguage />
      <Head>
        <title>Cobogo - FAQ</title>
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
        <h1 className="bold-36 mb-5">FAQ</h1>

        <div className="panel panel-default mb-3">
          <FaqContent locale={router.locale} />
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Faq;
