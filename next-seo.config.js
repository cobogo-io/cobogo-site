const title = 'Cobogo'
const description =
  'Cobogo is a Creator Investment Ecosystem. We provide the tools Creators need to become a business and start raising funds to grow their brands.'

const SEO = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: 'https://cobogo.io/',
    title,
    description,
    images: [
      {
        url: '/open-graph.png',
        width: 1280,
        height: 720,
        alt: 'Open Graph Image',
      },
    ],
  },
}

export default SEO
