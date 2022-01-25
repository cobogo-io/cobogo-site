import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

import Footer from '../../components/Footer';
import Link from '../../components/NextLink';
import SelectLanguage from '../../components/SelectLanguage';
import Social from '../../components/Social';
import { initRecorder, initViewer, Wom } from '../../components/Wom';

export default function Review() {
  useEffect(() => {
    console.log('en');

    if (window.bullz) {
      initRecorder();
      initViewer();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <SelectLanguage />
      <Head>
        <title>Cobogo - Fans</title>
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
        <div className="panel panel-default mb-3">
          <section className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
            <h1 className="mb-5">
              <span className="light-50">enjoyed</span>{' '}
              <span className="bold-50">cobogo?</span>
            </h1>
            <p className="break-normal mb-5">
              <span className="regular-40">
                record a recommendation for it using{' '}
              </span>{' '}
              <span className="bold-40">BULLZ </span>{' '}
              <span className="regular-40">and earn </span>{' '}
              <span className="bold-40"> WOM </span>{' '}
              <span className="regular-40">rewards!</span>
            </p>
            <Wom />
          </section>
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
}
