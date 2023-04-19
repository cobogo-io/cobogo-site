import Carrousel from '@/components/Carrousel'
import Main from '@/components/Main'
import Mentions from '@/components/Mentions'
import RelatedContent from '@/components/RelatedContent'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'

interface HomeProps {
  mostRecentArticles: any[]
}

export default function Home(props: HomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>('community')

  useEffect(() => {
    setTimeout(() => {
      if (selectedProduct === 'community') {
        setSelectedProduct('social')
      } else if (selectedProduct === 'social') {
        setSelectedProduct('launchpad')
      } else if (selectedProduct === 'launchpad') {
        setSelectedProduct('community')
      }
    }, 1000 * 5)
  }, [selectedProduct])

  return (
    <>
      <Main />

      <Carrousel
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      <RelatedContent mostRecentArticles={props.mostRecentArticles} />

      <Mentions />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const response = await axios.get(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${
      locale === 'pt' ? 'cobogobr' : 'cobogo_io'
    }/`
  )

  return {
    props: {
      mostRecentArticles: response.data.items.slice(0, 3),
      ...(await serverSideTranslations(locale ? locale : '', ['common'])),
    },
  }
}
