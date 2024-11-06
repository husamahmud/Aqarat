import Card from '@/components/mzadat/Card.tsx'

import { dummyData } from '@/lib/constants/cardsData.ts'
import { CardProps } from '@/types/types.ts'

export default function PropertyView() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-5">
      {dummyData.map((card: CardProps) => (
        <Card
          key={card.title}
          {...card}
        />
      ))}
    </div>
  )
}
