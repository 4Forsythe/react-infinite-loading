import React from 'react'

import clsx from 'clsx'
import { ArrowUp, ArrowDown } from 'lucide-react'

import type { Coin } from '@/types'

interface Props {
  items: Coin[]
}

export const CoinTable: React.FC<Props> = ({ items }) => {
  return (
    <div className="max-w-[65%] w-full gap-5 flex flex-col">
      {items.map((item) => (
        <a
          href={item.coinrankingUrl}
          target="_blank"
          key={item.uuid}
          className="px-3 py-2.5 gap-10 flex items-center justify-between text-xl text-blue-600 bg-[#F9FAFC] font-medium rounded-2xl hover:bg-[#F2F4F7] transition duration-300"
        >
          <div className="px-5 py-3 gap-1.5 flex items-center">
            <img className="w-6 h-6" src={item.iconUrl} alt={item.symbol} />
            {`${item.name} (${item.symbol})`}
          </div>

          <div
            className={clsx('px-5 py-3 gap-1.5 flex items-center', {
              'text-[#16A34A]': Number(item.change) > 0,
              'text-[#E11D48]': Number(item.change) < 0,
            })}
          >
            <span className="gap-1 flex items-center text-lg">
              {Number(item.change) > 0 && <ArrowUp color="#16A34A" size={16} />}
              {Number(item.change) < 0 && <ArrowDown color="#E11D48" size={16} />}
              {`${Number(item.price).toFixed(2)} USD`}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
