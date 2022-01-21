import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from '../../components/NextLink';
import Social from '../../components/IndexPage/Social';
import Footer from '../../components/IndexPage/Footer';
import ChooseLanguage from '../../components/ChooseLanguage';
import { Accordion } from '../../components/Accordion';

const Faq = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <ChooseLanguage />
      <Head>
        <title>Cobogo - FAQ</title>
      </Head>
      <div className="mx-5 md:mx-20 py-20">
        <Link href="/">
          <div className="w-60 h-14 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/logos/cobogo-logo.svg"
              alt="Guy playing youtube site"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">FAQ</h1>
        <div className="panel panel-default mb-3">
          <Accordion title="Q: What is Blockchain?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Blockchain is a technology that features a continuous list of
                blocks of information on a live network of computers. Each block
                contains a number of transactions that when filled, are closed
                and linked to the previously filled block. Blockchains are
                decentralized, and for that it is very difficult for someone to
                modify the record of events stored in this “chain”, making it a
                suitable technology for financial applications.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What is Ethereum?">
            <div className="panel-body regular-18 mb-5">
              <p>
                <a
                  className="regular-cobogo-18"
                  target="_blank"
                  href="https://ethereum.org/en/what-is-ethereum/"
                  rel="noopener noreferrer"
                >
                  Ethereum
                </a>{' '}
                is a crypto network, it has been adopted by numerous projects
                from all over the world. It is the largest network that hosts
                dapps. It is also where most developer activity happens in the
                crypto space. Ethereum is particularly interesting because of
                its security and ability to host smart contracts.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What is Gas?">
            <div className="panel-body regular-18 mb-5">
              <p>
                <a
                  className="regular-cobogo-18"
                  target="_blank"
                  href="https://ethereum.org/en/developers/docs/gas/"
                  rel="noopener noreferrer"
                >
                  Gas
                </a>{' '}
                is the fee that is required to run computational resources to
                successfully execute a transaction on Ethereum. This fee is
                based on the current ‘gas price’ and is calculated in terms of
                ETH.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What is a Wallet?">
            <div className="panel-body regular-18 mb-5">
              <p>
                A Wallet is a software that can hold cryptocurrencies by storing
                their private keys, which are used in cooperation with the
                appropriate public keys. There are many kinds of wallets
                available, which can be categorised as: mobile, hardware,
                desktop and web wallets.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What are Smart Contracts?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Smart Contract is basically a contract that executes itself,
                which means they are not controlled by a user, but instead, are
                run independently on the network with some predetermined “terms
                of agreement”.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What is DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
                DEV Token is the utility token that powers the Dev Protocol
                ecosystem. By staking DEV tokens Patrons can fund Creators in a
                sustainable way: both of them receive rewards, it is not a one
                way transaction. This way, Creators can grow while empowering
                their communi
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What are dApps?">
            <div className="panel-body regular-18 mb-5">
              <p>
                dApps are short for Decentralised Applications, and are software
                applications built on top of Smart Contracts. They are different
                from regular apps in a way that they are not connected to
                private, centralised servers, and for that, are more transparent
                over how its back-end works.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: Where can I buy DEV tokens?">
            <div className="panel-body regular-18 mb-5">
              <p>
                The best way to buy the Dev Token is the most liquid pair. You
                can find them on the trading pairs listed on Coingecko. The best
                pair to trade DEV/ETH currently is on{' '}
                <a
                  className="regular-cobogo-18"
                  target="_blank"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2"
                  rel="noopener noreferrer"
                >
                  Uniswap V2
                </a>
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What is Staking?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Staking is the process of locking up funds in smart contracts as
                a way to benefit the network that it is being staked on, and
                being rewarded for it. These rewards can be seen as some sort of
                interest that accumulates over time.
                <br />
                <br />
                Staking using the DEV Tokens means that Patrons are depositing
                the DEV Tokens in a smart contract of the respective Creator the
                patron wants to sustainably fund. By doing that both the Patron
                and the Creator get rewarded with DEV Tokens.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What is APY and how is it calculated?">
            <div className="panel-body regular-18 mb-5">
              <p>
                The Annual Percentage Yield - APY- represents the financial
                gain, in terms of one determined token, as a percentage in one
                year. An individual will receive an APY when they stake their
                funds in an instrument such as a staking pool, or liquidity
                pool, for example. The idea behind APY is to convey the true
                gains of an investment in annual terms, since we’re using Dev
                Protocol, staking is linear, and doesn’t account for the
                compound ‘interest’ in the case of re-staking.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: Why should I use cobogo?">
            <div className="panel-body regular-18 mb-5">
              <p>
                cobogo is a dApp, built on top of the Dev Protocol Ecosystem
                that allows fans to support their favorite YouTubers in a
                sustainable way. They can stake their DEV Tokens on the
                Youtuber’s pool, and both of them receive the rewards. cobogo
                allows Creators to monetize their channel in a different way,
                without relying solely on Ads or one-off donations, and it
                allows fans to support these Creators while still earning money.
              </p>
            </div>
          </Accordion>
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Faq;
