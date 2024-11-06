import Filter from '@/components/mzadat/Filter.tsx'

import {
  PROPERTY_CONDITION,
  PROPERTY_NATURE,
  PROPERTY_TYPE,
  TYPE_FILTER,
} from '@/lib/constants/filterValues.ts'

export default function PropertyFilters() {
  return (
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
  )
}
