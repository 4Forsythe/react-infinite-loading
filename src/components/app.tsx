import React from 'react'
import { Loader } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query'

import { getCoins } from '@/lib/get-coins'
import { CoinTable, ErrorCatcher } from '@/components'

export const App: React.FC = () => {
  const { data, status, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['coins'],
    queryFn: ({ pageParam = 0 }) => getCoins({ offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.length,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  })

  const { ref, inView } = useInView()

  React.useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView])

  return (
    <div className="container w-full h-full mx-auto space-y-5 flex flex-col items-center justify-center">
      <div className="w-full h-full mt-40 xl:px-40 px-10 flex flex-col items-center">
        <h1 className="mb-20 text-7xl font-semibold uppercase">Доска валют</h1>
        {status === 'success' &&
          data.pages.length > 0 &&
          data.pages.map((page, index) => (
            <CoinTable key={index} items={page} intersectionRef={ref} />
          ))}

        {status === 'pending' && (
          <div className="max-w-[65%] w-full h-[45%] gap-5 flex items-center justify-center">
            <Loader size={36} className="animate-spin" />
          </div>
        )}

        {status === 'error' && (
          <ErrorCatcher
            title="Ошибка при получении данных"
            code={error.response.data.code}
            message={error.response.data.message}
          />
        )}
      </div>
    </div>
  )
}
