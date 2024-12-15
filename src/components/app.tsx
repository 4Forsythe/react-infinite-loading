import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getCoins } from '@/lib/get-coins'
import { CoinTable } from '@/components/coin-table'

export const App: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins({ limit: 5 }),
    refetchOnWindowFocus: false,
  })

  return (
    <div className="container w-full h-full mx-auto space-y-5 flex flex-col items-center justify-center">
      <div className="w-full h-full mt-40 xl:px-40 px-10 flex flex-col items-center">
        <h1 className="mb-20 text-7xl font-semibold uppercase">Доска валют</h1>
        {data && data.length > 0 && <CoinTable items={data} />}
      </div>
    </div>
  )
}
