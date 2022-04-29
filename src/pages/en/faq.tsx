import Head from 'next/head';

import Accordion from '../../components/Accordion';

export default function Faq() {
  return (
    <div className="flex flex-col h-full min-h-screen bg-primary">
      <Head>
        <title>cobogo - FAQ</title>
      </Head>

      <div className="flex flex-col flex-1 pb-20 mx-5 md:mx-20">
        <h1 className="mb-5 bold-36">FAQ</h1>

        <div className="mb-3 panel panel-default">
          <Accordion title="Q: What is Blockchain?">
            <div className="mb-5 panel-body regular-18">
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
            <div className="mb-5 panel-body regular-18">
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
            <div className="mb-5 panel-body regular-18">
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
            <div className="mb-5 panel-body regular-18">
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
            <div className="mb-5 panel-body regular-18">
              <p>
                Smart Contract is basically a contract that executes itself,
                which means they are not controlled by a user, but instead, are
                run independently on the network with some predetermined “terms
                of agreement”.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: What are dApps?">
            <div className="mb-5 panel-body regular-18">
              <p>
                dApps are short for Decentralised Applications, and are software
                applications built on top of Smart Contracts. They are different
                from regular apps in a way that they are not connected to
                private, centralised servers, and for that, are more transparent
                over how its back-end works.
              </p>
            </div>
          </Accordion>

          <Accordion title="Q: What is Staking?">
            <div className="mb-5 panel-body regular-18">
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
            <div className="mb-5 panel-body regular-18">
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
            <div className="mb-5 panel-body regular-18">
              <p>
                cobogo is a dApp that allows fans to support their favorite
                YouTubers in a sustainable way. They can stake their CBG Tokens
                on the Youtuber’s pool, and both of them receive the rewards.
                cobogo allows Creators to monetize their channel in an
                alternative way, without relying solely on Ads or one-off
                donations, and it allows fans to support these Creators while
                still earning money.
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
