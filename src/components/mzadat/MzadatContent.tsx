import SearchInput from '@/components/global/SearchInput.tsx'
import AvailableMzadat from '@/components/mzadat/AvailableMzadat.tsx'
import PropertyFilters from '@/components/mzadat/PropertyFilters.tsx'
import PropertyView from '@/components/mzadat/PropertyView.tsx'

import { dummyData } from '@/lib/constants/cardsData.ts'

export default function MzadatContent() {
  const count = dummyData.length

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <SearchInput />
        <AvailableMzadat count={count} />
      </div>

      <div className="grid grid-cols-3 gap-8 pt-12 text-black">
        <PropertyView />
        <PropertyFilters />
      </div>
    </div>
  )
}
