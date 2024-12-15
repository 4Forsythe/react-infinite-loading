import React from 'react'
import { CoinItem } from './coin-item'

import type { Coin } from '@/types'

interface Props {
  items: Coin[]
  intersectionRef: (node?: Element | null) => void
}

export const CoinTable: React.FC<Props> = ({ items, intersectionRef }) => {
  return (
    <div className="max-w-[65%] w-full gap-5 flex flex-col">
      {items.map((item) => (
        <CoinItem key={item.uuid} item={item} />
      ))}

      <div ref={intersectionRef} />
    </div>
  )
}
