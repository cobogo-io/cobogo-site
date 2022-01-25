import BigNumber from 'bignumber.js';
import { useMemo, useEffect, useState } from 'react';
import { useGetDevPrice } from '../fixtures/uniswap/hooks';
import {
  useListPropertyQuery,
  useCountAccountLockupUniqueQuery,
} from '../graphql';
import {
  useAPY,
  useAnnualSupplyGrowthRatio,
  useCirculatingSupply,
  useTotalSupply,
  useTotalStakingAmountOnProtocol,
} from '../fixtures/dev-kit/hooks';
import { toNaturalNumber } from '../fixtures/utility';

export const DevTotalCap = (_: {}) => {
  const { totalSupply } = useTotalSupply();
  const { data: devPrice } = useGetDevPrice();

  const devTotalCap = useMemo(() => {
    const marketCap = new BigNumber(
      devPrice.toNumber() * toNaturalNumber(totalSupply).toNumber()
    );
    return marketCap;
  }, [devPrice, totalSupply]);

  return devTotalCap ? <span>{devTotalCap.dp(0).toFormat()}</span> : <></>;
};

export const DevMarketCap = (_: {}) => {
  const [devMarketCap, setDevMarketCap] = useState<string>('');
  const { circulatingSupply } = useCirculatingSupply();
  const { data: devPrice } = useGetDevPrice();

  useEffect(() => {
    circulatingSupply().then((circulatingSupplyValue: any) => {
      if (circulatingSupplyValue <= 0) {
        return;
      }
      const marketCap =
        devPrice.toNumber() *
        toNaturalNumber(circulatingSupplyValue).toNumber();
      const formatMarketCap = new BigNumber(
        marketCap && marketCap > 0 ? marketCap : 0
      )
        .dp(0)
        .toFormat();
      setDevMarketCap(formatMarketCap);
    });
  }, [devPrice, circulatingSupply]);

  return devMarketCap ? <span>{devMarketCap}</span> : <></>;
};

export const DevPrice = (_: {}) => {
  const { data: devPrice } = useGetDevPrice();
  return devPrice ? <span>{devPrice?.dp(2).toNumber()}</span> : <></>;
};

export const DevStakingRatio = (_: {}) => {
  const [devStakingRatio, setDevStakingRatio] = useState<string>('');
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol();
  const { circulatingSupply } = useCirculatingSupply();

  useEffect(() => {
    circulatingSupply().then((circulatingSupplyValue: any) => {
      const totalStakingAmountValue = toNaturalNumber(
        new BigNumber(totalStakingAmount ?? 0)
      );
      if (circulatingSupplyValue <= 0 || (totalStakingAmount ?? 0) <= 0) {
        return;
      }
      setDevStakingRatio(
        totalStakingAmountValue
          .div(toNaturalNumber(circulatingSupplyValue))
          .times(100)
          .dp(2)
          .toFormat()
      );
    });
  }, [circulatingSupply, totalStakingAmount]);
  return devStakingRatio !== '' ? <span>{devStakingRatio}</span> : <></>;
};

export const DevStakingValue = (_: {}) => {
  const { data: devPrice } = useGetDevPrice();
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol();
  const totalStakingAmountValue = toNaturalNumber(
    new BigNumber(totalStakingAmount ?? 0)
  );
  const devStakingValue = new BigNumber(
    totalStakingAmountValue.toNumber() * devPrice.toNumber()
  );
  return totalStakingAmount ? (
    <span>{devStakingValue.dp(0).toFormat()}</span>
  ) : (
    <></>
  );
};

export const CreatorAPY = (_: {}) => {
  const { creators } = useAPY();
  return creators ? <span>{creators?.dp(2).toNumber()}</span> : <></>;
};

export const StakerAPY = (_: {}) => {
  const { apy } = useAPY();
  return apy ? <span>{apy?.dp(2).toNumber()}</span> : <></>;
};

export const SupplyGrowth = (_: {}) => {
  const { annualSupplyGrowthRatio } = useAnnualSupplyGrowthRatio();
  return annualSupplyGrowthRatio ? (
    <span>{annualSupplyGrowthRatio?.dp(2).toNumber()}</span>
  ) : (
    <></>
  );
};

export const AssetOnboarded = (_: {}) => {
  const { data } = useListPropertyQuery({
    variables: {
      limit: 1,
    },
  });
  const formatAssetOnboarded = new BigNumber(
    data?.property_factory_create_aggregate.aggregate?.count ?? 0
  );
  return data?.property_factory_create_aggregate ? (
    <span>{formatAssetOnboarded.toFormat()}</span>
  ) : (
    <></>
  );
};

export const PatronOnboarded = (_: {}) => {
  console.log('1AQUI');
  const { data } = useCountAccountLockupUniqueQuery();
  console.log('DAQUI');
  const formatPatronOnboarded = new BigNumber(
    data?.account_lockup_aggregate.aggregate?.count ?? 0
  );
  return data?.account_lockup_aggregate ? (
    <span>{formatPatronOnboarded.toFormat()}</span>
  ) : (
    <></>
  );
};

export const CreatorsRewardsDev = (_: {}) => {
  const { creators } = useAPY();
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol();
  const totalStakingAmountValue = toNaturalNumber(
    new BigNumber(totalStakingAmount ?? 0)
  );
  const creatorsRewardsDev =
    creators && totalStakingAmount
      ? new BigNumber(
          creators.div(100).toNumber() * totalStakingAmountValue.toNumber()
        )
      : null;
  return creatorsRewardsDev ? (
    <span>{creatorsRewardsDev?.dp(0).toFormat()}</span>
  ) : (
    <></>
  );
};

export const CreatorsRewardsUsd = (_: {}) => {
  const { data: devPrice } = useGetDevPrice();
  const { creators } = useAPY();
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol();
  const totalStakingAmountValue = toNaturalNumber(
    new BigNumber(totalStakingAmount ?? 0)
  );
  const creatorsRewardsDev =
    creators && totalStakingAmount
      ? new BigNumber(
          creators.div(100).toNumber() *
            totalStakingAmountValue.toNumber() *
            devPrice.toNumber()
        )
      : null;
  return creatorsRewardsDev ? (
    <span>{creatorsRewardsDev?.dp(0).toFormat()}</span>
  ) : (
    <></>
  );
};
