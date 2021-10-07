import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

const Privacy: NextPage = () => {
  return (
    <div className="overflow-x-auto bg-bgprimary">
      <Head>
        <title>Cobogo - Privacy policy</title>
      </Head>
      <div>
        <div className="w-60 h-14 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logos/cobogo-logo.svg"
            alt="Guy playing youtube site"
          />
        </div>
      </div>
      <div className="mx-5 md:mx-20 pb-20"></div>
    </div>
  );
};

export default Privacy;
