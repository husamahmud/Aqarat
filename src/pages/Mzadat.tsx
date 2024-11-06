import SocialHeader from '@/components/layout/SocialHeader.tsx'
import Header from '@/components/layout/Header.tsx'
import PageTitle from '@/components/global/PageTitle.tsx'

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
      <h1>Mzadat</h1>
    </>
  )
}
