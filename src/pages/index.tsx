import Carrousel from '@/components/Carrousel'
import RelatedContent from '@/components/RelatedContent'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

interface HomeProps {
  mostRecentArticles: any[]
}

export default function Home(props: HomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<
    'social' | 'community' | 'launchpad'
  >('community')

  return (
    <div>
      <Carrousel
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      <RelatedContent mostRecentArticles={props.mostRecentArticles} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cobogobr/'
  )

  return {
    props: {
      mostRecentArticles: response.data.items.slice(0, 3),
    },
  }
}

