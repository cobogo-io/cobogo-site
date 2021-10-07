import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from '../components/NextLink';
import { Accordion } from '../components/Accordion';

const Faq: NextPage = () => {
  return (
    <div className="overflow-x-auto bg-bgprimary">
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
      <div className="mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">FAQ</h1>

        <h2 className="bold-cobogo-30 my-10">About tokens</h2>
        <div className="panel-group mb-8" id="faqAccordion">
          <div className="panel panel-default mb-3">
            <Accordion title="Q: What are Dev tokens?">
              <div className="panel-body regular-18 mb-5">
                <p>
                  The DEV token is a unique currency specialized for use with
                  the Dev Protocol.
                  <br />
                  By using DEV tokens to support OSS projects, you can support
                  the sustainable financing of OSS projects.
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: What can DEV tokens be used for?">
              <div className="panel-body regular-18">
                <p>
                  Dev tokens can be used to support OSS projects and take part
                  in the ecosystem. By depositing DEV tokens in our Cobogo Dapp
                  using a method called staking, you can support a creator of
                  your choice while also earning rewards yourself. In addition,
                  DEV token holders can participate in governance where the Dev
                  Protocol policy is decided by the community.
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: Are DEV tokens safe?">
              <div className="panel-body regular-18">
                <p>
                  The DEV token and Dev Protocol have undergone a{' '}
                  <a
                    href="https://github.com/dev-protocol/protocol/blob/main/docs/audit-report__quantstamp--sept-15-2020.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    security audit by Quantstamp
                  </a>
                  . No accidents have occurred since the launch in January 2020
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: When did the DEV token start?">
              <div className="panel-body regular-18">
                <p>
                  The DEV Token launched in beta during July 2018, at which
                  point we reached out to OSS developers and corporate sponsor
                  to participate. We ultimately completed a scheme to monetize
                  the number of OSS downloads in February 2019. We&apos;ve made
                  a lot of improvements since our launch in January 2020, with
                  each improvement being open source and archived on GitHub.
                  Anyone wishing to take part in the development only needs to
                  make suggestions on GitHub. In addition, FRAME00 Co., Ltd.
                  (Tokyo, Japan), the development team of Dev Protocol, has been
                  adopted by Microsoft for Startups.
                </p>
              </div>
            </Accordion>

            <Accordion title=" Q: Who is using the DEV token?">
              <div className="panel-body regular-18">
                <p>
                  DEV token users can be divided into two types: creators and
                  sponsors.
                  <br />
                  Currently, more than 1600 OSS projects are participating as
                  creators, and they are used by various communities such as
                  Sindre Sorhus, Vyper, Commons Stack, and Vui-i18n. You can see
                  it all on a platform called Cobogo.
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: Can DEV tokens be converted into legal tender?">
              <div className="panel-body regular-18">
                <p>
                  Dev has pairs at many of the DEX (Decentralized Exchanges),
                  like Uniswap and Sushiswap, where anyone looking to trade
                  their dev can turn it into ETH, USD, etc. From here you are
                  able to trade at a centralized exchange and withdraw the
                  currency of your choice to your bank account.
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: Where can I buy DEV tokens?">
              <div className="panel-body regular-18">
                <p>
                  You can buy or sell DEV tokens on various DEXs (Decentralized
                  Exchange) like{' '}
                  <a
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Uniswap
                  </a>
                  .
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: What is staking?">
              <div className="panel-body regular-18">
                <p>
                  Staking is a mechanism that contributes to the network and
                  earns rewards by temporarily locking crypto assets. In Dev,
                  staking a &quot;DEV token&quot; (ERC20) on an OSS project will
                  monetize the OSS and reward the staking user as well as the
                  project creator.
                </p>
              </div>
            </Accordion>

            <Accordion title="Q: Where do the rewards come from?">
              <div className="panel-body regular-18">
                <p>
                  In the Dev Protocol, a small amount of DEV is newly issued for
                  each block according to the calculation formula, and the newly
                  issued amount is allocated to the reward pool paid out to
                  stakers and project owners. Please refer to the following
                  documents for details such as calculation formulas.
                  <br />
                  Reference article:{' '}
                  <a
                    href="https://github.com/dev-protocol/protocol/blob/master/docs/POLICY.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/dev-protocol/protocol/blob/master/docs/POLICY.md
                  </a>
                </p>
              </div>
            </Accordion>
            <Accordion title="Q: How is Dev priced?">
              <div className="panel-body regular-18">
                <p>
                  Like a corporation, prices are determined by supply and
                  demand. The value of the DEV token is increasing because
                  demand (the amount used for staking) outweighs supply.
                  Furthermore, the more creators who utilize the Dev Protocol,
                  the higher the network value of the Dev Protocol.
                </p>
              </div>
            </Accordion>
            <Accordion title="Q: Can DEV tokens be converted into legal tender?">
              <div className="panel-body regular-18">
                <p>
                  The Dev Protocol uses blockchain technology to provide
                  Sustainability for both creators and supporters. It is a
                  protocol designed to solve the problem of monetizing open
                  assets, which is not feasible with legal tender such as the
                  dollar. If you would like to convert to dollars, please refer
                  to the steps below.
                </p>
              </div>
            </Accordion>

            <h2 className="bold-cobogo-30 my-10">About Dev Protocol</h2>
            <div className="panel-group mb-8" id="faqAccordion">
              <div className="panel panel-default mb-3">
                <Accordion title="Q: What is the Dev Protocol?">
                  <div className="panel-body regular-18">
                    <p>
                      The Dev Protocol is a way for creators who run projects
                      such as OSS and Open Access to earn income opportunities
                      and achieve sustainability.
                      <br />
                      The Dev Protocol aims to create a world where innovators
                      can take on challenges and solve problems that might not
                      be financially viable, but offer value. Creators who
                      create technically socially valuable project that might
                      not be economically viable are now able to find an
                      alternative way for funding. Reference article:{' '}
                      <a
                        href="https://initto.devprotocol.xyz/en/what-is-protocol/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://initto.devprotocol.xyz/en/what-is-protocol/
                      </a>
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Is the Dev Protocol for making donations?">
                  <div className="panel-body regular-18">
                    <p>
                      The purpose of supporting creators is the same as
                      donating, but with staking, you can benefit while
                      supporting as opposed to just donating a one time payment.
                      The Dev Protocol is different from previous donations in
                      that it uses blockchain technology with incentives for
                      both creators and supporters by building a mechanism for
                      continuous donations.
                      <br />
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Is there a fee to use the Dev Protocol?">
                  <div className="panel-body regular-18">
                    <p>
                      We keep a 5% Treasury fee when tokenizing OSS. The Dev
                      Protocol Treasury is a community-managed fund used for the
                      ecosystem. In addition the Ethereum network charges a fee
                      (gas fee) when executing smart contracts. The Dev Protocol
                      is a decentralized protocol built on Ethereum, so this fee
                      is always charged.
                    </p>
                  </div>
                </Accordion>
                <Accordion title="Q: How much is the gas fee?">
                  <div className="panel-body regular-18">
                    <p>
                      Gas charges are constantly changing, so please check the
                      following sites etc.
                      <br />
                      ETH GAS STATION:{' '}
                      <a
                        href="https://ethgasstation.info/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ethgasstation.info/
                      </a>
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Who is the gas fee for?">
                  <div className="panel-body regular-18">
                    <p>
                      In order for Ethereum to function, when you use smart
                      contracts or send money, you have to record the
                      information on the blockchain. You also need to verify
                      that the record is correct. A fee is required as
                      compensation for the person (miner) who does these tasks.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: What are the benefits of the Dev team distributing tokens?">
                  <div className="panel-body regular-18">
                    <p>
                      DEV tokens are still in their infancy, and having many
                      people use them will contribute to the network. On top of
                      that, we believe that distribution to GitHub users, who
                      have contributed to the OSS ecosystem so far, is the most
                      valuable way to distribute them. The security of the Dev
                      Protocol is improved by increasing the diversity of people
                      who can participate in governance.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Who is involved in the development?">
                  <div className="panel-body regular-18">
                    <p>
                      The Dev Protocol team has also contributed to OSS
                      development for over 10 years and is a gathering of
                      members who have participated in the OSS community within
                      Japan. Check out the team introductions on the Dev
                      Protocol website.
                      <br />
                      Dev Protocol website:{' '}
                      <a
                        href="https://devprotocol.xyz/#team"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://devprotocol.xyz/#team
                      </a>
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: How does the Dev Protocol make money?">
                  <div className="panel-body regular-18">
                    <p>
                      The Dev Protocol team is not making money. Until now, it
                      has been operated by raising funds from the company. In
                      the future, we plan to raise funds by a method called
                      &quot;token sale&quot; in which we sell our DEV tokens to
                      investors.
                    </p>
                  </div>
                </Accordion>
              </div>

              <h2 className="bold-cobogo-30 my-10">About Cobogo</h2>
              <div className="panel-group mb-8" id="faqAccordion">
                <Accordion title="Q: What can I do with Cobogo?">
                  <div className="panel-body regular-18">
                    <p>
                      Cobogo is a new sponsoring platform powered by the Dev
                      Protocol. Both developers and sponsors can benefit from
                      staking projects they want to support with the DEV token.
                      With over 1600 OSS issuing tokens, many developers from
                      around the world, both corporate and individual, have
                      successfully raised funds. The participation of various
                      creators is increasing, and we can support various
                      creators such as OSS developers, VR artists, NFT markets,
                      green projects, and VTubers in the future.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: How do I register with Cobogo?">
                  <div className="panel-body regular-18">
                    <p>
                      To register an asset in Cobogo, please link to create from
                      the menu and go to &quot;Submit an application&quot; or
                      access the following URL
                      <br />
                      <a
                        href="https://stakes.social/invite/github"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://stakes.social/invite/github
                      </a>
                      <br />
                      The application will be completed if you fill out the form
                      and submit it.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Can I register a finished project that has no active development?">
                  <div className="panel-body regular-18">
                    <p>
                      Because the Dev Protocol supports sustainable activities,
                      applications may not pass for those that are not planned
                      to be developed in the future. We seek to offer funding to
                      projects that are looking to build long term.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Can I submit a project that is still in draft and has no cede written?">
                  <div className="panel-body regular-18">
                    <p>
                      Even if the project is under development, the application
                      may not pass if it is judged that there is no future
                      development.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Can I register a project without a github repository?">
                  <div className="panel-body regular-18">
                    <p>
                      Currently, there is only Market through Github, so you can
                      not apply for projects without a Github Repository.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Is it possible to register even with a small OSS?">
                  <div className="panel-body regular-18">
                    <p>
                      The size of the project does not matter, as long as the
                      project itself is in active development and funding is
                      needed for full time development.
                    </p>
                  </div>
                </Accordion>
              </div>

              <h2 className="bold-cobogo-30 my-10">About blockchain</h2>
              <div className="panel-group mb-8" id="faqAccordion">
                <Accordion title="Q: What is a blockchain?">
                  <div className="panel-body regular-18">
                    <p>
                      A blockchain is a method of synchronously recording data
                      such as transaction information by combining cryptographic
                      technology with multiple computers that make up a
                      distributed network.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Why did you choose cryptocurrency?">
                  <div className="panel-body regular-18">
                    <p>
                      We adopted crypto assets to implement a staking mechanism
                      that was not possible with fiat currencies. We also found
                      crypto assets without censorship or centralized control to
                      be the best fit for the open nature of OSS. We aim to make
                      sustainable OSS development freely available to everyone
                      in the world.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: What is a token?">
                  <div className="panel-body regular-18">
                    <p>
                      It refers to a newly created cryptocurrency on an existing
                      blockchain. In this case our tokens are under the Erc-20
                      standard on the Ethereum blockchain. By creating a token
                      on an existing blockchain, we can take advantage of their
                      security while focusing on our goal.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: What is a wallet?">
                  <div className="panel-body regular-18">
                    <p>
                      A wallet is a service or program that stores
                      cryptocurrency. A wallet is required to store the DEV,
                      token and the Dev Protocol does not provide a wallet, so
                      it must be registered in advance. DEV is built on Ethereum
                      so there are many options, the most popular being
                      metamask.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: What is Ethereum?">
                  <div className="panel-body regular-18">
                    <p>
                      Ethereum is a cryptographic blockchain developed by
                      Vitalik Buterin in 2013. Ethereum has a standard for token
                      development called ERC20 and DEV tokens are ERC20
                      compliant tokens.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: What is Web3?">
                  <div className="panel-body regular-18">
                    <p>
                      web3.0 refers to an iteration of the web that includes a
                      decentralized network (Decentralized Web) realized by
                      blockchain technology. In addition, web1.0 and web2.0 are
                      also defined as various points in the history of the web.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Q: Why does the gas fee change?">
                  <div className="panel-body regular-18">
                    <p>
                      You can set the gas fee yourself through most wallet
                      providers. However, if you set it too cheap, it may not be
                      processed for a very long time, if ever. In most cases,
                      your wallet will set it automatically, but this could
                      overestimate the gas fee, causing you to pay more. It is
                      always better to check current gas prices and set them
                      accordingly.
                    </p>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
