import Brands from '@/components/home/Brands'
import Carrousel from '@/components/home/Carrousel'
import CreatorExplorer from '@/components/home/CreatorExplorer'
import Main from '@/components/home/Main'
import Mentions from '@/components/home/Mentions'
import Newsletter from '@/components/home/Newsletter'
import RelatedContent from '@/components/home/RelatedContent'
import Team from '@/components/home/Team'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string>('community')

  return (
    <>
      <Main />

      <CreatorExplorer />

      <Brands />

      <Carrousel
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      <Team />

      <RelatedContent />

      <Mentions />

      <Newsletter />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
