import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'

import { Filters } from '@/types/types.ts'

export function SmallFilter({ filters }: { filters: Filters }) {
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
        >
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
