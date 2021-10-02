import {

  getTotalStakingAmountOnProtocol,
  calculateMaxRewardsPerBlock,
  totalSupply,
  holdersShare,
} from './client'
import { SWRCachePath } from './cache-path'
import {
  UnwrapFunc,
  whenDefined,
} from '../utility'
import { getDevAmount } from '../wallet/utility'
import useSWR from 'swr'
import { message } from 'antd'
import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { useProvider } from '../wallet/hooks'

interface DevAllocations {
  privateSale: string
  teamOptions: string
  teamTreasury: string
  ecosystemFund: string
  airdrop: string
}
const DEV_ALLOCATIONS: DevAllocations = {
  privateSale: '0x33b5043442979D2226E9a6389F7201932D11e448',
  teamOptions: '0xA47c73A77d358A985157034A2338fAB7742B107E',
  teamTreasury: '0x0dAb082C2f2CD7C6C2a9335b69d0B2aB8121178D',
  ecosystemFund: '0x93d7A66E10b6a8a5a00313bC68F0FB234c8eB06D',
  airdrop: '0x6B18fDa007ec96E187e5CF89D1873B9F75D5293D'
}

export const useAPY = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const { data: totalStaking, error: totalStakingError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => getTotalStakingAmountOnProtocol(x)),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const { data: holders, error: holdersError } = useSWR<UnwrapFunc<typeof holdersShare>, Error>(
    SWRCachePath.holdersShare(maxRewards, totalStaking),
    () =>
      maxRewards && totalStaking
        ? whenDefined(nonConnectedWeb3, async x => holdersShare(x, maxRewards, totalStaking))
        : undefined,
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )

  const stakers = maxRewards && holders ? new BigNumber(maxRewards).minus(new BigNumber(holders)) : undefined
  const year = new BigNumber(2102400)
  const apy = stakers && totalStaking ? stakers.times(year).div(totalStaking).times(100) : undefined
  const creators = holders && totalStaking ? new BigNumber(holders).times(year).div(totalStaking).times(100) : undefined

  return { apy, creators, error: maxRewardsError ?? totalStakingError ?? holdersError }
}

export const useAnnualSupplyGrowthRatio = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const { data: totalSupplyValue, error: totalSupplyError } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => totalSupply(x)),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const year = new BigNumber(2102400)
  const annualSupplyGrowthRatio =
    maxRewards && totalSupplyValue ? new BigNumber(maxRewards).times(year).div(totalSupplyValue).times(100) : undefined

  return { annualSupplyGrowthRatio, error: maxRewardsError ?? totalSupplyError }
}

export const useCirculatingSupply = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: totalSupplyValue, error } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => totalSupply(x)),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )

  const circulatingSupplyValue = useCallback(async () => {
    const amounts = await Promise.all([
      getDevAmount(DEV_ALLOCATIONS.privateSale),
      getDevAmount(DEV_ALLOCATIONS.teamOptions),
      getDevAmount(DEV_ALLOCATIONS.teamTreasury),
      getDevAmount(DEV_ALLOCATIONS.ecosystemFund),
      getDevAmount(DEV_ALLOCATIONS.airdrop)
    ])
    const privateSaleAmount = new BigNumber(amounts[0] || '0')
    const teamOptionAmount = new BigNumber(amounts[1] || '0')
    const teamAmount = new BigNumber(amounts[2] || '0')
    const ecosystemFundAmount = new BigNumber(amounts[3] || '0')
    const airdropAmount = new BigNumber(amounts[4] || '0')
    return new BigNumber(totalSupplyValue ?? '0')
      .minus(privateSaleAmount)
      .minus(teamOptionAmount)
      .minus(teamAmount)
      .minus(ecosystemFundAmount)
      .minus(airdropAmount)
  }, [totalSupplyValue])

  return { circulatingSupply: circulatingSupplyValue, error }
}

export const useTotalSupply = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: totalSupplyValue, error } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => totalSupply(x)),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )

  return { totalSupply: new BigNumber(totalSupplyValue ?? '0'), error }
}

export const useTotalStakingAmountOnProtocol = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: stakingAmount, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmountOnProtocol>, Error>(
    SWRCachePath.getTotalStakingAmountOnProtocol(accountAddress),
    () => whenDefined(nonConnectedWeb3, async x => getTotalStakingAmountOnProtocol(x)),
    { onError: err => message.error(err.message), revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    totalStakingAmount: stakingAmount ? Number(stakingAmount) : undefined,
    error
  }
}