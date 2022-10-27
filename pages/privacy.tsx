import { useRouter } from 'next/router'

import PageEn from './en/privacy'
import PageEs from './es/privacy'
import PagePt from './pt/privacy'

const Privacy = () => {
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

export default Privacy
