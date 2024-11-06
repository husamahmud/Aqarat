import SearchInput from '@/components/global/SearchInput.tsx'
import AvailableMzadat from '@/components/mzadat/AvailableMzadat.tsx'
import Card from '@/components/mzadat/Card.tsx'
import { dummyData } from '@/lib/constants/cardsData.ts'
import { CardProps } from '@/types/types.ts'

export default function MzadatContent() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <SearchInput />
        <AvailableMzadat count={12} />
      </div>

      <div className="grid grid-cols-3 pt-12 text-black">
        <div className="col-span-2 grid grid-cols-2 gap-5">
          {dummyData.map((card: CardProps) => (
            <Card
              key={card.title}
              {...card}
            />
          ))}
          <div>1</div>
        </div>
        <div>1</div>
      </div>
    </div>
  )
}
