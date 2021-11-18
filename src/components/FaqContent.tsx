import { Accordion } from './Accordion';

interface IRouterProps {
  locale: string|undefined;
}

const FaqContent = (router: IRouterProps): JSX.Element => {
  switch(router.locale) {
    case 'pt':
      return (
        <div>
          <Accordion title="Q: O que é Blockchain?">
            <div className="panel-body regular-18 mb-5">
              <p>
              Blockchain é uma tecnologia que apresenta uma lista contínua de blocos de informações em uma rede ativa de computadores. Cada bloco contém uma série de transações que, quando preenchidas, são fechadas e vinculadas ao bloco preenchido anteriormente. Blockchains são descentralizadas, e por isso, é muito difícil alguém modificar o registro de eventos armazenados nessa “chain”, tornando-a uma tecnologia adequada para aplicações financeiras.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é Ethereum?">
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
                é uma rede de crypto, que tem sido adotada por vários projetos em todo o mundo. É a maior rede que hospeda dApps. É também onde acontece a maior parte das atividades de desenvolvedores no ambiente de crypto. Ethereum é particularmente interessante por causa de sua segurança e capacidade de hospedar contratos inteligentes.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é “Gas”?">
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
                é a taxa necessária para executar recursos computacionais para efetuar com êxito uma transação na rede Ethereum. Esta taxa é baseada no “preço do gas” atual e é calculada em termos de ETH.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é uma Carteira (Wallet)?">
            <div className="panel-body regular-18 mb-5">
              <p>
              A Carteira (Wallet) é um software que pode conter criptomoedas ao armazenar suas chaves privadas, que são usadas em cooperação com as chaves públicas apropriadas. Existem vários tipos de carteiras disponíveis, que podem ser categorizadas como: mobile, hardware, desktop e carteiras web.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que são Smart Contracts?">
            <div className="panel-body regular-18 mb-5">
              <p>
              Smart Contract é basicamente um contrato que executa a si mesmo, o que significa que eles não são controlados por um usuário, mas, em vez disso, são executados de forma independente na rede com alguns “termos de acordo” pré-determinados.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
                DEV Token é o token utilitário que alimenta o ecossistema do Dev Protocol. Ao fazer staking de tokens DEV, os Patronos podem financiar Criadores de forma sustentável: ambos recebem recompensas, não é uma transação unilateral. Dessa forma, os criadores podem crescer enquanto capacitam suas comunidades.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que são dApps?">
            <div className="panel-body regular-18 mb-5">
              <p>
                dApps é a abreviatura para Aplicativos Descentralizados, e se tratam de aplicativos de software desenvolvidos com base em Smart Contracts. Eles se diferenciam de apps comuns por não estarem conectados a servidores privados e centralizados e, por isso, são mais transparentes em relação ao funcionamento de seu back-end.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: Onde posso comprar tokens DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
                A melhor maneira de comprar tokens DEV é pelo par que tem a maior liquidez. Você pode encontrá-los nos pares de trading listados no Coingecko. O melhor par para negociar DEV/ETH atualmente está no{' '}
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
          <Accordion title="Q: O que é “Staking”">
            <div className="panel-body regular-18 mb-5">
              <p>
                Staking é o processo de bloquear fundos em contratos inteligentes como uma forma de beneficiar a rede na qual os fundos estão em staking, e sendo recompensado por isso. Essas recompensas podem ser vistas como um tipo de juros que se acumula com o tempo.
                <br /><br />
                Fazer staking usando tokens DEV significa que os Patronos estão depositando os tokens DEV em um contrato inteligente do respectivo Criador que o Patrono deseja financiar de forma sustentável. Ao fazer isso, tanto Patrono como Criador são recompensados com tokens DEV.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é APY e como ele é calculado?">
            <div className="panel-body regular-18 mb-5">
              <p>
                O Rendimento Percentual Anual (Annual Percentage Yield) representa o ganho financeiro em termos de um token determinado, no seu percentual em um ano. Um indivíduo receberá um APY quando colocar seus fundos em um instrumento como uma pool de staking, ou pool de liquidez, por exemplo. A ideia por trás do APY é transmitir os verdadeiros ganhos de um investimento em termos anuais. Uma vez que estamos usando o Dev Protocol, o staking é linear e não leva em conta os “juros” compostos no caso de um re-staking, ou novo staking.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: Por que eu deveria usar cobogo?">
            <div className="panel-body regular-18 mb-5">
              <p>
                cobogo é um dApp, desenvolvido em cima do Ecossistema de Dev Protocol, que permite aos fãs apoiarem seus YouTubers favoritos de uma forma sustentável. Eles podem fazer staking de seus tokens DEV no pool do YouTuber, e ambos recebem as recompensas. cobogo permite que os Criadores monetizem seu canal de uma forma diferente, sem depender apenas de anúncios ou doações únicos, e permite que os fãs apoiem esses Criadores enquanto ganham dinheiro.
              </p>
            </div>
          </Accordion>
        </div>
      );
    default:
      return (
        <div>
          <Accordion title="Q: What is Blockchain?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Blockchain is a technology that features a continuous list of blocks of information on a live network of computers. Each block contains a number of transactions that when filled, are closed and linked to the previously filled block. Blockchains are decentralized, and for that it is very difficult for someone to modify the record of events stored in this “chain”, making it a suitable technology for financial applications.
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
                Smart Contract is basically a contract that executes itself, which means they are not controlled by a user, but instead, are run independently on the network with some predetermined “terms of agreement”.
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
                dApps are short for Decentralised Applications, and are software applications built on top of Smart Contracts. They are different from regular apps in a way that they are not connected to private, centralised servers, and for that, are more transparent over how its back-end works.
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
                cobogo is a dApp, built on top of the Dev Protocol Ecosystem that allows fans to support their favorite YouTubers in a sustainable way. They can stake their DEV Tokens on the Youtuber’s pool, and both of them receive the rewards. cobogo allows Creators to monetize their channel in a different way, without relying solely on Ads or one-off donations, and it allows fans to support these Creators while still earning money.
              </p>
            </div>
          </Accordion>
        </div>
      );
  }
};

export default FaqContent;
