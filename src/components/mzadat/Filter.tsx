import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'

import { FilterProps } from '@/types/types'

export default function Filter({ title, filters, cols = 4 }: FilterProps) {
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
        className={`grid ${gridColsClass} gap-5 [direction:rtl]`}
      >
        {filters.map((type) => (
          <ToggleGroupItem
            key={type}
            value={type}
            aria-label={`Toggle ${type}`}
            size="lg"
            className="px-5 data-[state=on]:border-gold data-[state=on]:bg-gold/10"
          >
            {type}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}

export function SmallFilter({ filters }: { filters: string[] }) {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      className="scrollbar-none flex gap-3 overflow-scroll [direction:rtl]"
    >
      {filters.map((type) => (
        <ToggleGroupItem
          key={type}
          value={type}
          aria-label={`Toggle ${type}`}
          size="lg"
          className="px-7 text-black data-[state=on]:border-gold data-[state=on]:bg-gold/10"
        >
          {type}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
