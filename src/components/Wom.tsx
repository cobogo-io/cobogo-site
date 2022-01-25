declare global {
  interface Window {
    bullz: any;
    wom: any;
  }
}

export const Wom = (): JSX.Element => {
  return (
    <>
      <style jsx>{`
        .wom-recorder {
          width: 300px;
          height: 700px;
          overflow-y: auto;
        }
        .wom-viewer {
          width: 285px;
          height: 700px;
        }
      `}</style>
      <div id="wom-recorder-CBG01" className="wom-recorder"></div>
      <div id="wom-viewer-plugin" className="wom-viewer"></div>
    </>
  );
};

export const initRecorder = () => {
  window.bullz.init({
    organizationPublicId: 'COBOGO_61a81230237f2c2d1f2d8fe6',
    facilitatorld: 'COBOGO_61a81230237f2c2d1f2d8fe6',
    publisher: 'cobogo social',
    selector: '#wom-recorder-CBG01',
    background: 'https://bullz.cobogo.xyz/images/wom/background.png',
    logo: 'https://bullz.cobogo.xyz/images/wom/logo.png',
    color: 'white',
    backgroundColor: '#4ab9e3',
    remoteProduct: {
      name: 'cobogo social',
      brand: 'cobogo',
      publicld: 'CBG01',
      url: 'https://cobogo.social/',
      imageUrl: 'https://bullz.cobogo.xyz/images/wom/background.png',
    },
    isDev: false,
  });
};

export const initViewer = () => {
  const params = {
    organizationPublicId: 'COBOGO_61a81230237f2c2d1f2d8fe6',
    selector: '#wom-viewer-plugin',
    remoteProductId: 'CBG01',
    color: 'black',
    textColor: 'white',
    isDev: false,
  };

  window.wom
    .check(params)
    .then((values: any) => {
      if (values[0].isSuccess) {
        window.wom.init(params);
        return console.log('womjs config success');
      }
    })
    .catch(console.error);
};

export default Wom;
