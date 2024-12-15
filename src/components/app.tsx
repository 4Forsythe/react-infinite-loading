import React from 'react'
import { Loader } from 'lucide-react'

import { useCoins } from '@/hooks/use-coins'
import { CoinTable, ErrorCatcher } from '@/components'

export const App: React.FC = () => {
  const { data, status, error, intersectionRef } = useCoins()

  return (
    <div className="container w-full h-full mx-auto space-y-5 flex flex-col items-center justify-center">
      <div className="w-full h-full mt-40 xl:px-40 px-10 flex flex-col items-center">
        <h1 className="mb-20 text-7xl font-semibold uppercase">Доска валют</h1>
        {status === 'success' &&
          data &&
          data.pages.length > 0 &&
          data.pages.map((page, index) => (
            <CoinTable key={index} items={page} intersectionRef={intersectionRef} />
          ))}

        {status === 'pending' && (
          <div className="max-w-[65%] w-full h-[45%] gap-5 flex items-center justify-center">
            <Loader size={36} className="animate-spin" />
          </div>
        )}

        {status === 'error' && error && (
          <ErrorCatcher
            title="Ошибка при получении данных"
            code={(error.response?.data as { code: string }).code}
            message={(error.response?.data as { message: string }).message}
          />
        )}
      </div>
    </div>
  )
}
