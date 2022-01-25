import Head from 'next/head';
import { useEffect } from 'react';

import { initRecorder, initViewer, Wom } from '../../components/Wom';

export default function Review() {
  useEffect(() => {
    console.log('es');

    if (window.bullz) {
      initRecorder();
      initViewer();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <Head>
        <title>Cobogo - Fans</title>
      </Head>

      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <div className="panel panel-default mb-3">
          <section className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
            <h1 className="mb-5">
              <span className="light-50">¿disfrutó</span>{' '}
              <span className="bold-50">de cobogo?</span>
            </h1>
            <p className="break-normal mb-5">
              <span className="regular-40">
                graba una recomendación para nosotros usando{' '}
              </span>{' '}
              <span className="bold-40">BULLZ </span>{' '}
              <span className="regular-40">y gane recompensas en </span>{' '}
              <span className="bold-40"> WOM </span>{' '}
              <span className="regular-40">!</span>
            </p>
            <Wom />
          </section>
        </div>
      </div>
    </div>
  );
}
