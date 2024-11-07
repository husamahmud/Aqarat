import { useState } from 'react'

import Card from '@/components/mzadat/Card'
import { Button } from '@/components/ui/button'

import { dummyData } from '@/lib/constants/cardsData'
import { CardProps } from '@/types/types'

export default function PropertyView() {
  const [showMore, setShowMore] = useState<boolean>(false)

  const cardsToDisplay = showMore ? dummyData : dummyData.slice(0, 8)
  const buttonText = showMore ? 'عرض أقل' : 'عرض المزادات'

  return (
    <>
      <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-3">
        {dummyData.map((card: CardProps) => (
          <Card
            key={card.title}
            {...card}
          />
        ))}

        {/* in small screens show 8 cards */}
        {cardsToDisplay.map((card: CardProps) => (
          <Card
            key={card.title}
            {...card}
          />
        ))}
      </div>

      <Button
        className="col-span-2 mt-3 block font-bold text-gold-darker md:hidden"
        variant="outline"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {buttonText}
      </Button>
    </>
  )
}
