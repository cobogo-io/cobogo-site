import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { message } from 'antd'
import { getEthPrice, getDevEthPrice, getTokenDayDatas } from './client'
import { UnwrapFunc } from '../utility'

const messageKey = 'theGraphAccess'

export const useGetEthPrice = () => {
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getEthPrice>, Error>('getBundle', async () => getEthPrice(), {
    onError: err => message.error({ content: `failed to fetching eth price: ${String(err.message)}`, key: messageKey })
  })
  return { data: new BigNumber(data?.ethPrice ?? '0'), error, mutate }
}

export const useGetDevEthPrice = () => {
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getDevEthPrice>, Error>('getToken', async () => getDevEthPrice(), {
    onError: err => message.error({ content: `failed to fetching dev eth price: ${String(err.message)}`, key: messageKey })
  })
  return { data: new BigNumber(data?.derivedETH ?? '0'), error, mutate }
}

export const useGetDevPrice = () => {
  const { data: ethPrice, error: ethPriceError } = useSWR<UnwrapFunc<typeof getEthPrice>, Error>(
    'getBundle',
    async () => getEthPrice(),
    { onError: err => message.error({ content: `failed to fetching bundle data: ${String(err.message)}`, key: messageKey }) }
  )

  const { data: devEthPrice, error: devEthPriceError } = useSWR<UnwrapFunc<typeof getDevEthPrice>, Error>(
    'getToken',
    async () => getDevEthPrice(),
    { onError: err => message.error({ content: `failed to fetching token data: ${String(err.message)}`, key: messageKey }) }
  )

  const devPrice = ethPrice && Number(ethPrice?.ethPrice) * Number(devEthPrice?.derivedETH)
  return { data: new BigNumber(devPrice ?? '0'), error: ethPriceError ?? devEthPriceError }
}

export const useGetTokenDayDatas = () => {
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getTokenDayDatas>, Error>(
    'getTokenDayDatas',
    async () => getTokenDayDatas(),
    {
      onError: err => message.error({ content: `failed to fetching token day data: ${String(err.message)}`, key: messageKey })
    }
  )
  return { data: data, error, mutate }
}
