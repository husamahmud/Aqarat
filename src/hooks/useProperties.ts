import { useState } from 'react'

import { CardProps } from '@/types/types.ts'
import { dummyData } from '@/lib/constants/cardsData.ts'

export default function useProperties() {
  const [properties, setProperties] = useState<CardProps[]>(dummyData)

  return { properties }
}
