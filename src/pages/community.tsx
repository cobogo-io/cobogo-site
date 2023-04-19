import CommunityContent from '@/components/CommunityContent'
import CommunityMain from '@/components/CommunityMain'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Index() {
  return (
    <>
      <CommunityMain />

      <CommunityContent />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
