import { useSearchParams } from 'react-router-dom'
import clx from 'clsx'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import { FilterProps } from '@/types/types'

export default function Filter({ title, filters, cols = 4, filter }: FilterProps) {
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

  const gridColsClass =
    {
      2: 'grid-cols-2',
      4: 'grid-cols-4',
    }[cols] || 'grid-cols-4'

  return (
    <div className="flex flex-col gap-3 text-lg">
      {title && <h1 className="font-semibold text-custom-gray [direction:rtl]">{title}</h1>}

      <ToggleGroup
        type="single"
        variant="outline"
        className={clx('grid gap-3 [direction:rtl]', gridColsClass)}
      >
        {filters.map(({ value, label }) => (
          <ToggleGroupItem
            key={value}
            value={value}
            aria-label={`Toggle ${label}`}
            size="lg"
            className={clx(
              'px-5',
              selectedFilter === value
                ? 'border-gold bg-gold/10'
                : 'data-[state=on]:border-gold data-[state=on]:bg-gold/10'
            )}
            onClick={() => handleToggleClick(value)}
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
