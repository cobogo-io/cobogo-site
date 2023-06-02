import CommunityContent from '@/components/community/CommunityContent'
import CommunityMain from '@/components/community/CommunityMain'
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
