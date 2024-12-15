import { instance } from '@/api/axios.instance'

import type { Coin } from '@/types'

type Params = Partial<{
  limit: number
  offset: number
}>

interface GetCoinsResponse {
  data: {
    coins: Coin[]
  }
}

export async function getCoins(params?: Params): Promise<Coin[]> {
  const { data } = await instance.get<GetCoinsResponse>('/coins', { params })

  return data.data.coins
}
