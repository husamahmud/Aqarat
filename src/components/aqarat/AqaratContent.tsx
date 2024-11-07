import { FaFilter } from 'react-icons/fa'

import SearchInput from '@/components/global/SearchInput.tsx'
import AvailableAqarat from '@/components/aqarat/AvailableAqarat.tsx'
import PropertyView from '@/components/aqarat/PropertyView.tsx'
import PropertyFilters from '@/components/aqarat/PropertyFilters.tsx'
import { Button } from '@/components/ui/button.tsx'
import { SmallFilter } from '@/components/aqarat/SmallFilter.tsx'
import { TYPE_FILTER } from '@/lib/constants/filterValues.ts'

export default function AqaratContent() {
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
        <AvailableAqarat />
      </div>

      <div className="flex justify-end pt-5 sm:hidden">
        <SmallFilter
          filters={TYPE_FILTER}
          filter="filter"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 py-5 text-black sm:py-12 lg:grid-cols-3">
        <PropertyView />
        <PropertyFilters />
      </div>
    </div>
  )
}
