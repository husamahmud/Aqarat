import Filter from '@/components/aqarat/Filter.tsx'

import {
  PROPERTY_CONDITION,
  PROPERTY_NATURE,
  PROPERTY_TYPE,
  TYPE_FILTER,
} from '@/lib/constants/filterValues.ts'

export default function PropertyFilters() {
  return (
    <div className="hidden space-y-6 pl-10 lg:block">
      <Filter
        filters={TYPE_FILTER}
        cols={4}
        filter="filter"
      />

      <Filter
        title="حالة العقار"
        filters={PROPERTY_CONDITION}
        cols={2}
        filter="condition"
      />

      <Filter
        title="طبيعة العقار"
        filters={PROPERTY_NATURE}
        cols={2}
        filter="nature"
      />

      <Filter
        title="نوع العقار"
        filters={PROPERTY_TYPE}
        cols={4}
        filter="type"
      />
    </div>
  )
}
