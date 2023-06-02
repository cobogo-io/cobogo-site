import LaunchpadContent from '@/components/launchpad/LaunchpadContent'
import LaunchpadMain from '@/components/launchpad/LaunchpadMain'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Index() {
  return (
    <>
      <LaunchpadMain />

      <LaunchpadContent />
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
