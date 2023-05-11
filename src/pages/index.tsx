import Carrousel from '@/components/Carrousel'
import Main from '@/components/Main'
import Mentions from '@/components/Mentions'
import Newsletter from '@/components/Newsletter'
import RelatedContent from '@/components/RelatedContent'
import Team from '@/components/Team'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

// interface HomeProps {
//   mostRecentArticles: any[]
// }

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string>('community')

  return (
    <>
      <Main />

      <Carrousel
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      <RelatedContent />

      <Mentions />

      <Newsletter />

      <Team />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // const response = await axios.get(
  //   `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${
  //     locale === 'pt' ? 'cobogobr' : 'cobogo_io'
  //   }/`
  // )

  return {
    props: {
      // mostRecentArticles: response.data.items.slice(0, 3),
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
