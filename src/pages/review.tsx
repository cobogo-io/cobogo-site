import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { initRecorder, initViewer } from '../components/Wom';
import useScript from '../hooks/useScript';
import PageEn from './en/review';
import PageEs from './es/review';
import PagePt from './pt/review';

export default function Wom() {
  useScript('https://creator.bullz.com/static/js/bullz.js');
  useScript('https://viewer.womprotocol.io/static/js/wom.js');
  // useScript('https://channel-viewer.womprotocol.io/static/js/wom.js');

  useEffect(() => {
    window.addEventListener('bullz-recorder-init', initRecorder);
    window.addEventListener('wom-viewer-init', initViewer);

    return () => {
      window.removeEventListener('bullz-recorder-init', initRecorder);
      window.removeEventListener('wom-viewer-init', initViewer);
    };
  }, []);

  const router = useRouter();
  switch (router.locale) {
    case 'pt':
      return <PagePt />;
    case 'es':
      return <PageEs />;
    default:
      return <PageEn />;
  }
}
