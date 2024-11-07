import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CardProps } from '@/types/types'
import { dummyData } from '@/lib/constants/cardsData'
import {
  TYPE_FILTER,
  PROPERTY_CONDITION,
  PROPERTY_NATURE,
  PROPERTY_TYPE,
} from '@/lib/constants/filterValues'

/**
 * Hook to get properties, filtered by URL params.
 * @returns {Object} Properties, filtered by URL params.
 * @property {CardProps[]} properties - The filtered properties.
 */
export default function useProperties(): { properties: CardProps[] } {
  const [searchParams] = useSearchParams()

  const filteredProperties = useMemo(() => {
    let filtered = [...dummyData]

    const filterParam = searchParams.get('filter')
    if (filterParam && filterParam !== 'all') {
      const filterOption = TYPE_FILTER.find((item) => item.value === filterParam)
      if (filterOption) {
        filtered = filtered.filter((prop) => prop.type === filterOption.label)
      }
    }

    const conditionParam = searchParams.get('condition')
    if (conditionParam) {
      const conditionOption = PROPERTY_CONDITION.find((item) => item.value === conditionParam)
      if (conditionOption) {
        filtered = filtered.filter((prop) => prop.condition === conditionOption.label)
      }
    }

    const natureParam = searchParams.get('nature')
    if (natureParam) {
      const natureOption = PROPERTY_NATURE.find((item) => item.value === natureParam)
      if (natureOption) {
        filtered = filtered.filter((prop) => prop.nature === natureOption.label)
      }
    }

    const typeParam = searchParams.get('type')
    if (typeParam) {
      const typeOption = PROPERTY_TYPE.find((item) => item.value === typeParam)
      if (typeOption) {
        filtered = filtered.filter((prop) => prop.type === typeOption.label)
      }
    }

    return filtered
  }, [searchParams])

  return { properties: filteredProperties }
}
