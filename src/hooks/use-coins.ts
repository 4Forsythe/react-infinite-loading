import React from 'react'

import { getCoins } from '@/lib/get-coins'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query'

import type { AxiosError } from 'axios'

export function useCoins() {
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

  return { data, status, error: error as AxiosError, intersectionRef: ref }
}
