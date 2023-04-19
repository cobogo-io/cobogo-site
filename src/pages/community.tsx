import CommunityContent from '@/components/CommunityContent'
import CommunityMain from '@/components/CommunityMain'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Index() {
  return (
    <>
      <CommunityMain />

      <CommunityContent />
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
