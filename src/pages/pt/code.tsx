import Head from 'next/head';

export default function Code() {
  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <Head>
        <title>cobogo - código de conduta</title>
      </Head>

      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">Código de Conduta</h1>
        <h2 className="bold-30 mb-2">Nosso Compromisso</h2>
        <p className="regular-18 break-normal mb-5">
          No interesse de promover um ambiente aberto e acolhedor, nós, como
          contribuintes e mantenedores, nos comprometemos a tornar a
          participação em nosso projeto e em nossa comunidade uma experiência
          livre de assédio para todos, independentemente da idade, tamanho do
          corpo, deficiência, etnia, características sexuais, identidade e
          expressão de gênero, nível de experiência, educação, status
          socioeconômico, nacionalidade, aparência pessoal, raça, religião ou
          identidade e orientação sexual.
        </p>
        <h2 className="bold-30 mb-2">Nossos Valores</h2>
        <p className="regular-18 break-normal mb-5">
          Exemplos de comportamento que contribuem para a criação de um ambiente
          favorável incluem:
        </p>
        <ul className="regular-16 list-disc pl-20 mb-3">
          <li>Usar linguagem acolhedora e inclusiva</li>
          <li>Respeitar os diferentes pontos de vista e experiências</li>
          <li>Aceitar críticas construtivas gentilmente</li>
          <li>Focar no que é melhor para a comunidade</li>
          <li>Mostrar empatia para com outros membros da comunidade</li>
        </ul>
        <p className="regular-18 break-normal mb-5">
          Exemplos de comportamento inaceitável por parte dos participantes
          incluem:
        </p>
        <ul className="regular-16 list-disc pl-20">
          <li>
            O uso de linguagem ou imagens sexualizadas e atenção ou avanços
            sexuais indesejados
          </li>
          <li>
            Comentários de trollagem, comentários depreciativos e ataques
            pessoais ou políticos
          </li>
          <li>Assédio público ou privado</li>
          <li>
            Publicar informações privadas de terceiros, como um endereço físico
            ou eletrônico, sem permissão explícita
          </li>
          <li>
            Outra conduta que poderia ser considerada inadequada em um ambiente
            profissional
          </li>
        </ul>
        <h2 className="bold-30 mb-2">Nossas Responsabilidades</h2>
        <p className="regular-18 break-normal mb-5">
          Os encarregados de manter o projeto são responsáveis por esclarecer os
          padrões de comportamento aceitável e devem tomar as medidas corretivas
          adequadas e justas em resposta a quaisquer instâncias de comportamento
          inaceitável.
        </p>
        <p className="regular-18 break-normal mb-5">
          Os mantenedores do projeto têm o direito e a responsabilidade de
          remover, editar ou rejeitar comentários, commits, códigos, edições da
          wiki, perguntas e outras contribuições que não estejam alinhadas a
          este Código de Conduta, ou banir temporária ou permanentemente
          qualquer contribuidor por outros comportamentos que eles considerem
          inadequados, ameaçadores, ofensivos ou prejudiciais.
        </p>
        <h2 className="bold-30 mb-2">Alcance</h2>
        <p className="regular-18 break-normal mb-5">
          Este Código de Conduta se aplica a todos os espaços do projeto e
          também quando um indivíduo está representando o projeto ou sua
          comunidade em espaços públicos. Exemplos de representação de um
          projeto ou comunidade incluem o uso de um endereço de e-mail oficial
          do projeto, publicação por meio de uma conta oficial de mídia social
          ou atuação como representante indicado em um evento online ou offline.
          A representação de um projeto pode ser posteriormente definida e
          esclarecida pelos mantenedores do projeto.
        </p>
        <h2 className="bold-30 mb-2">Execução</h2>
        <p className="regular-18 break-normal mb-5">
          Casos de comportamento abusivo, de assédio ou de outra forma
          inaceitável podem ser relatados entrando em contato com a equipe do
          projeto em hi@cobogo.social. Todas as reclamações serão analisadas e
          investigadas e resultarão em uma resposta considerada necessária e
          apropriada às circunstâncias. A equipe do projeto é obrigada a manter
          sigilo em relação ao relator de um incidente. Mais detalhes de
          políticas específicas podem ser publicados separadamente.
        </p>
        <p className="regular-18 break-normal mb-5">
          Os mantenedores do projeto que não seguirem ou não cumprirem o Código
          de Conduta de boa fé podem enfrentar repercussões temporárias ou
          permanentes, conforme determinado por outros membros da liderança do
          projeto.
        </p>
        <h2 className="bold-30 mb-2">Atribuição</h2>
        <p className="regular-18">
          Este Código de Conduta foi adaptado do{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/"
            target="_blank"
            rel="noreferrer"
          >
            Contrato do Colaborador
          </a>
          , versão 1.4, disponível em{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"
            target="_blank"
            rel="noreferrer"
          >
            https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
          </a>
          <br />
          <br />
          Para obter respostas a perguntas frequentes sobre este código de
          conduta, consulte{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/faq"
            target="_blank"
            rel="noreferrer"
          >
            https://www.contributor-covenant.org/faq
          </a>
        </p>
      </div>
    </div>
  );
}
