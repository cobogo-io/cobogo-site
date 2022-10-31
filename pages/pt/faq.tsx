import { Accordion } from '../../src/components/Accordion'

const Faq = () => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex flex-col flex-1 p-20 mx-5 md:mx-20">
        <h1 className="mb-5 font-bold text-4xl">FAQ (Perguntas Frequentes)</h1>

        <div className="mb-3  ">
          <Accordion title="Q: O que é Blockchain?">
            <div className="mb-5  text-lg">
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
            <div className="mb-5  text-lg">
              <p>
                <a
                  className="text-lg"
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
            <div className="mb-5  text-lg">
              <p>
                <a
                  className="text-lg"
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
            <div className="mb-5  text-lg">
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
            <div className="mb-5  text-lg">
              <p>
                Smart Contract é basicamente um contrato que executa a si mesmo,
                o que significa que eles não são controlados por um usuário,
                mas, em vez disso, são executados de forma independente na rede
                com alguns “termos de acordo” pré-determinados.
              </p>
            </div>
          </Accordion>

          <Accordion title="Q: O que são dApps?">
            <div className="mb-5  text-lg">
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

          <Accordion title="Q: O que é “Staking”?">
            <div className="mb-5  text-lg">
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
            <div className="mb-5  text-lg">
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
            <div className="mb-5  text-lg">
              <p>
                cobogo é um dApp que permite que os fãs apoiem seus YouTubers
                favoritos de maneira sustentável. Eles podem fazer staking com
                seus CBG tokens na pool do Youtuber e ambos recebem as
                recompensas. cobogo permite que os criadores de conteúdo
                monetizem seu canal de forma alternativa, sem depender apenas de
                anúncios ou doações pontuais, e permite que os fãs apoiem esses
                criadores enquanto ainda ganham dinheiro.
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Faq
