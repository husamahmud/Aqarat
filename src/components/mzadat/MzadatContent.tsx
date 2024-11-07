import { FaFilter } from 'react-icons/fa'

import SearchInput from '@/components/global/SearchInput.tsx'
import AvailableMzadat from '@/components/mzadat/AvailableMzadat.tsx'
import PropertyView from '@/components/mzadat/PropertyView.tsx'
import PropertyFilters from '@/components/mzadat/PropertyFilters.tsx'
import { Button } from '@/components/ui/button.tsx'
import { SmallFilter } from '@/components/mzadat/Filter.tsx'

import { dummyData } from '@/lib/constants/cardsData.ts'
import { TYPE_FILTER } from '@/lib/constants/filterValues.ts'

export default function MzadatContent() {
  const count = dummyData.length

  return (
    <div className="container mx-auto px-3 lg:px-10">
      <div className="item-center flex justify-between gap-4 pb-5 sm:hidden">
        <Button
          className="h-auto"
          variant="outline"
        >
          <FaFilter className="text-black" />
        </Button>
        <SearchInput />
      </div>

      <div className="flex justify-end sm:justify-between">
        <div className="hidden sm:block">
          <SearchInput />
        </div>
        <AvailableMzadat count={count} />
      </div>

      <div className="flex justify-end pt-5 sm:hidden">
        <SmallFilter filters={TYPE_FILTER} />
      </div>

      <div className="grid grid-cols-2 gap-4 py-5 text-black sm:py-12 lg:grid-cols-3">
        <PropertyView />
        <PropertyFilters />
      </div>
    </div>
  )
}
