import LaunchpadContent from '@/components/LaunchpadContent'
import LaunchpadMain from '@/components/LaunchpadMain'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Index() {
  return (
    <>
      <LaunchpadMain />

      <LaunchpadContent />
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
