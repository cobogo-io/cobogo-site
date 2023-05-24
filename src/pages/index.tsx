import Carrousel from '@/components/Carrousel'
import Main from '@/components/Main'
import Mentions from '@/components/Mentions'
import Newsletter from '@/components/Newsletter'
import RelatedContent from '@/components/RelatedContent'
import Team from '@/components/Team'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string>('community')

  return (
    <>
      <Main />

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
