import SearchInput from '@/components/global/SearchInput.tsx'
import AvailableMzadat from '@/components/mzadat/AvailableMzadat.tsx'
import Card from '@/components/mzadat/Card.tsx'
import Filter from '@/components/mzadat/Filter.tsx'

import { dummyData } from '@/lib/constants/cardsData.ts'
import {
  PROPERTY_CONDITION,
  PROPERTY_NATURE,
  TYPE_FILTER,
  PROPERTY_TYPE,
} from '@/lib/constants/filterValues.ts'
import { CardProps } from '@/types/types.ts'

export default function MzadatContent() {
  const count = dummyData.length

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <SearchInput />
        <AvailableMzadat count={count} />
      </div>

      <div className="grid grid-cols-3 gap-8 pt-12 text-black">
        <div className="col-span-2 grid grid-cols-2 gap-5">
          {dummyData.map((card: CardProps) => (
            <Card
              key={card.title}
              {...card}
            />
          ))}
        </div>

        <div className="space-y-6">
          <Filter
            filters={TYPE_FILTER}
            cols={4}
          />

          <Filter
            title="حالة العقار"
            filters={PROPERTY_CONDITION}
            cols={2}
          />

          <Filter
            title="طبيعة العقار"
            filters={PROPERTY_NATURE}
            cols={2}
          />

          <Filter
            title="نوع العقار"
            filters={PROPERTY_TYPE}
            cols={4}
          />
        </div>
      </div>
    </div>
  )
}
