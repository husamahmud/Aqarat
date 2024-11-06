import SocialHeader from '@/components/layout/SocialHeader.tsx'
import Header from '@/components/layout/Header.tsx'
import PageTitle from '@/components/global/PageTitle.tsx'
import MzadatContent from '@/components/mzadat/MzadatContent.tsx'

export default function Mzadat() {
  return (
    <>
      <SocialHeader />
      <Header />
      <PageTitle
        title="المزادات"
        route="/mzadat"
        routeLabel="مزادات"
      />
      <MzadatContent />
    </>
  )
}
