import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'

import { Filters } from '@/types/types.ts'
import { useSearchParams } from 'react-router-dom'

export function SmallFilter({ filters, filter }: { filters: Filters; filter: string }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedFilter = filter ? searchParams.get(filter) : undefined

  /**
   * Handles toggle clicks by updating the URL search params.
   * @param {string} value - The value of the filter to toggle.
   */
  const handleToggleClick = (value: string) => {
    const currentParams = Object.fromEntries(searchParams)

    if (selectedFilter === value) delete currentParams[filter]
    else currentParams[filter] = value

    setSearchParams(currentParams)
  }

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      className="scrollbar-none flex gap-3 overflow-scroll [direction:rtl]"
    >
      {filters.map(({ value, label }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={`Toggle ${label}`}
          size="lg"
          className="px-7 text-black data-[state=on]:border-gold data-[state=on]:bg-gold/10"
          onClick={() => handleToggleClick(value)}
        >
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
