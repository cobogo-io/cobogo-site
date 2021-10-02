import Web3 from 'web3'
import { cachePath } from './catch-path'
import { getBlockNumber } from './utility'
import { UnwrapFunc } from '../utility'
import useSWR from 'swr'
import { useState } from 'react'
import { WEB3_PROVIDER_ENDPOINT } from './constants'

const nonConnectedWeb3 = new Web3(WEB3_PROVIDER_ENDPOINT)


export const useProvider = () => {
  const [accountAddress, ] = useState<undefined | string>(undefined)
  return { web3: Web3, nonConnectedWeb3, accountAddress }
}

export const useBlockNumberStream = (shouldFetch: boolean) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getBlockNumber>, Error>(
    shouldFetch ? cachePath.getBlockNumber() : null,
    getBlockNumber,
    {
      refreshInterval: 15000
    }
  )
  return { blockNumber: data, error }
}
