import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'

export default function SearchInput() {
  const [inputValue, setInputValue] = useState<string | undefined>('')

  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
          <Search
            size={16}
            strokeWidth={2}
            className="text-black"
            aria-hidden="true"
          />
        </div>

        <Input
          className="h-11 border-[#F1F2F7] py-3 pe-9 ps-32 text-right text-black"
          placeholder="ابحث عن المزادات"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  )
}
