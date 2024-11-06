import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'

import { FilterProps } from '@/types/types'

export default function Filter({ title, filters, cols = 4 }: FilterProps) {
  return (
    <div className="flex flex-col gap-3 text-lg">
      {title && <h1 className="text-custom-gray font-semibold [direction:rtl]">{title}</h1>}

      <ToggleGroup
        type="single"
        variant="outline"
        className={`grid grid-cols-${cols} gap-5 [direction:rtl]`}
      >
        {filters.map((type) => (
          <ToggleGroupItem
            key={type}
            value={type}
            aria-label={`Toggle ${type}`}
            size="lg"
            className="data-[state=on]:border-gold data-[state=on]:bg-gold/10 px-5"
          >
            {type}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
