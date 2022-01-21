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
        <h1 className="bold-36 mb-5">FAQ (Perguntas Frequentes)</h1>
        <div className="panel panel-default mb-3">
          <Accordion title="Q: O que é Blockchain?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Blockchain é uma tecnologia que apresenta uma lista contínua de
                blocos de informações em uma rede ativa de computadores. Cada
                bloco contém uma série de transações que, quando preenchidas,
                são fechadas e vinculadas ao bloco preenchido anteriormente.
                Blockchains são descentralizadas, e por isso, é muito difícil
                alguém modificar o registro de eventos armazenados nessa
                “chain”, tornando-a uma tecnologia adequada para aplicações
                financeiras.
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
                é uma rede de crypto, que tem sido adotada por vários projetos
                em todo o mundo. É a maior rede que hospeda dApps. É também onde
                acontece a maior parte das atividades de desenvolvedores no
                ambiente de crypto. Ethereum é particularmente interessante por
                causa de sua segurança e capacidade de hospedar contratos
                inteligentes.
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
                é a taxa necessária para executar recursos computacionais para
                efetuar com êxito uma transação na rede Ethereum. Esta taxa é
                baseada no “preço do gas” atual e é calculada em termos de ETH.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é uma Carteira (Wallet)?">
            <div className="panel-body regular-18 mb-5">
              <p>
                A Carteira (Wallet) é um software que pode conter criptomoedas
                ao armazenar suas chaves privadas, que são usadas em cooperação
                com as chaves públicas apropriadas. Existem vários tipos de
                carteiras disponíveis, que podem ser categorizadas como: mobile,
                hardware, desktop e carteiras web.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que são Smart Contracts?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Smart Contract é basicamente um contrato que executa a si mesmo,
                o que significa que eles não são controlados por um usuário,
                mas, em vez disso, são executados de forma independente na rede
                com alguns “termos de acordo” pré-determinados.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
                DEV Token é o token utilitário que alimenta o ecossistema do Dev
                Protocol. Ao fazer staking de tokens DEV, os Patronos podem
                financiar Criadores de forma sustentável: ambos recebem
                recompensas, não é uma transação unilateral. Dessa forma, os
                criadores podem crescer enquanto capacitam suas comunidades.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que são dApps?">
            <div className="panel-body regular-18 mb-5">
              <p>
                dApps é a abreviatura para Aplicativos Descentralizados, e se
                tratam de aplicativos de software desenvolvidos com base em
                Smart Contracts. Eles se diferenciam de apps comuns por não
                estarem conectados a servidores privados e centralizados e, por
                isso, são mais transparentes em relação ao funcionamento de seu
                back-end.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: Onde posso comprar tokens DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
                A melhor maneira de comprar tokens DEV é pelo par que tem a
                maior liquidez. Você pode encontrá-los nos pares de trading
                listados no Coingecko. O melhor par para negociar DEV/ETH
                atualmente está no{' '}
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
          <Accordion title="Q: O que é “Staking”?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Staking é o processo de bloquear fundos em contratos
                inteligentes como uma forma de beneficiar a rede na qual os
                fundos estão em staking, e sendo recompensado por isso. Essas
                recompensas podem ser vistas como um tipo de juros que se
                acumula com o tempo.
              </p>
              <p>
                Fazer staking usando tokens DEV significa que os Patronos estão
                depositando os tokens DEV em um contrato inteligente do
                respectivo Criador que o Patrono deseja financiar de forma
                sustentável. Ao fazer isso, tanto Patrono como Criador são
                recompensados com tokens DEV.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: O que é APY e como ele é calculado?">
            <div className="panel-body regular-18 mb-5">
              <p>
                O Rendimento Percentual Anual (Annual Percentage Yield)
                representa o ganho financeiro em termos de um token determinado,
                no seu percentual em um ano. Um indivíduo receberá um APY quando
                colocar seus fundos em um instrumento como uma pool de staking,
                ou pool de liquidez, por exemplo. A ideia por trás do APY é
                transmitir os verdadeiros ganhos de um investimento em termos
                anuais. Uma vez que estamos usando o Dev Protocol, o staking é
                linear e não leva em conta os “juros” compostos no caso de um
                re-staking, ou novo staking.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: Por que eu deveria usar cobogo?">
            <div className="panel-body regular-18 mb-5">
              <p>
                cobogo é um dApp, desenvolvido em cima do Ecossistema de Dev
                Protocol, que permite aos fãs apoiarem seus YouTubers favoritos
                de uma forma sustentável. Eles podem fazer staking de seus
                tokens DEV no pool do YouTuber, e ambos recebem as recompensas.
                cobogo permite que os Criadores monetizem seu canal de uma forma
                diferente, sem depender apenas de anúncios ou doações únicos, e
                permite que os fãs apoiem esses Criadores enquanto ganham
                dinheiro.
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
