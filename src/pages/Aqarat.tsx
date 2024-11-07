import SocialHeader from '@/components/layout/SocialHeader.tsx'
import Header from '@/components/layout/Header.tsx'
import PageTitle from '@/components/global/PageTitle.tsx'
import MzadatContent from '@/components/aqarat/MzadatContent.tsx'

export default function Aqarat() {
  return (
    <>
      <SocialHeader />
      <Header />
      <PageTitle
        title="العقارات"
        route="/aqarat"
        routeLabel="عقارات"
      />
      <MzadatContent />
    </>
  )
}
