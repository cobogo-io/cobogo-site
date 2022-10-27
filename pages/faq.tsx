import { useRouter } from 'next/router'

import PageEn from './en/faq'
import PageEs from './es/faq'
import PagePt from './pt/faq'

const Faq = () => {
  const router = useRouter()

  switch (router.locale) {
    case 'pt':
      return <PagePt />
    case 'es':
      return <PageEs />
    default:
      return <PageEn />
  }
}

export default Faq
