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
        overflow-y:auto;
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
  console.log('bullz-recorder-init');
  window.bullz.init({
    organizationPublicId: 'COBOGO_61a81230237f2c2d1f2d8fe6',
    facilitatorld: 'COBOGO_61a81230237f2c2d1f2d8fe6',
    publisher: 'cobogo social',
    selector: '#wom-recorder-CBG01',
    background: 'https://stackroom.devprotocol.xyz/integration/wom/background.png',
    logo: 'https://stackroom.devprotocol.xyz/brand/dev-protocol__avatar-brandmark--white--w_980.png',
    color: 'white',
    backgroundColor: 'black',
    remoteProduct: {
      name: 'cobogo social',
      brand: 'cobogo',
      publicld: 'CBG01',
      url: 'https://cobogo.social/',
      imageUrl: 'https://stackroom.devprotocol.xyz/integration/wom/background.png',
    },
    isDev: false,
  })
}

export const initViewer = () => {
  console.log('wom-viewer-init');
  const params = {
    organizationPublicId: 'COBOGO_61a81230237f2c2d1f2d8fe6',
    selector: '#wom-viewer-plugin',
    remoteProductId: 'CBG01',
    color: 'black',
    textColor: 'white',
    isDev: false
  }

  window.wom.check(params).then((values:any) => {
    if (values[0].isSuccess) {
      window.wom.init(params);
      return console.log('womjs config success');
    }
  }).catch(console.log)
}

export default Wom;
