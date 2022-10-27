import Head from 'next/head'

const Terms = () => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Head>
        <title>cobogo - termos de uso</title>
      </Head>
      <div className="flex flex-col flex-1 p-20 mx-5 md:mx-20">
        <h1 className="mb-5 font-bold text-4xl">Nota</h1>
        <p className="mb-5 break-normal text-lg">
          Para Todos os Usuários
          <br />
          Comportamento rude, irritante ou antiético em relação a outros
          usuários não é permitido. Cobogo se destina a colaboradores do
          ecossistema do YouTube. Contas não autorizadas do YouTube ou exclusão
          de repositórios após a integração serão punidos como fraude. Por
          favor, use o dApp com boas maneiras.
        </p>
        <h1 className="mb-5 font-bold text-4xl">Termos de Uso</h1>

        <h2 className="mb-2 font-bold text-3xl">Artigo 1 (Aplicação)</h2>
        <p className="mb-5 break-normal text-lg">
          Estes Termos e Condições aplicam-se a todas as relações entre a Cobogo
          (a Empresa) e o Usuário.
          <br />
          Ao se integrar ao Cobogo, o usuário concorda em obedecer a estes
          Termos e Condições. Se você não concordar com estes Termos e
          Condições, não poderá usar o Cobogo.
          <br />A Empresa pode alterar o conteúdo do Serviço a seu exclusivo
          critério. Se a Empresa fizer modificações aos termos deste Acordo, ela
          deverá notificar os Usuários ou publicar tais modificações no Site da
          Empresa. Os usuários que usarem o Serviço posteriormente ou que não
          executarem os procedimentos necessários para cancelar o registro
          dentro do período de tempo designado, serão considerados como tendo
          concordado com os termos modificados do Acordo.
        </p>
        <h2 className="mb-2 font-bold text-3xl">
          Artigo 2 (Assuntos Proibidos)
        </h2>
        <p className="mb-5 break-normal text-lg">
          Os usuários não devem se envolver nos seguintes atos
        </p>
        <ul className="pl-20 mb-3 list-decimal ">
          <li>
            Violar o Código de Conduta do Cobogo (https://cobogo.social/code)
          </li>
          <li>Tornar o canal privado ou excluí-lo após a integração</li>
          <li>Cometer um ato criminoso ou contra a ordem pública e a moral</li>
          <li>Ser uma força anti-social ou parte relacionada</li>
          <li>Usar o Serviço de maneira inadequada ou interferir nele</li>
          <li>Cair em qualquer um dos artigos a seguir</li>
        </ul>

        <h2 className="mb-2 font-bold text-3xl">
          Artigo 3 (Exclusão da Conta)
        </h2>
        <p className="mb-5 break-normal text-lg">
          A Empresa pode suspender ou excluir imediatamente a conta do Usuário
          no Cobogo se for constatado que o Usuário cometeu qualquer um dos atos
          proibidos descritos no Artigo 2.
        </p>

        <h2 className="mb-2 font-bold text-3xl">
          Artigo 4 (Suspensão do Serviço)
        </h2>
        <p className="mb-5 break-normal text-lg">
          Cobogo reserva-se o direito de suspender ou descontinuar todo ou parte
          do Serviço sem aviso prévio ao Usuário, caso a Empresa considere que
          algum dos seguintes motivos existe
        </p>
        <ul className="pl-20 mb-3 list-decimal ">
          <li>
            Quando se torna extremamente difícil continuar o Serviço devido a
            desastres naturais como terremotos, tufões e incêndios, doenças
            infecciosas, terrorismo, instruções ou ordens de terceiros ou outros
            motivos de força maior.
          </li>
          <li>
            No caso de o sistema informático ou as linhas de comunicação serem
            desligados devido a um acidente.
          </li>
          <li>
            Qualquer outro caso onde a Empresa tiver dificuldade de prover o
            Serviço.
          </li>
        </ul>
        <p className="mb-5 break-normal text-lg">
          A Empresa não se responsabiliza por qualquer desvantagem ou dano
          sofrido pelo Usuário ou terceiros devido à suspensão ou interrupção da
          prestação do Serviço, independentemente do motivo.
        </p>

        <h2 className="mb-2 font-bold text-3xl">
          Artigo 5 (Isenção de Garantia e Isenção de Responsabilidade)
        </h2>
        <p className="mb-5 break-normal text-lg">
          A Empresa não fornecerá nenhuma garantia aos Usuários além do que está
          estipulado nestes Termos de Uso.
          <br />O Usuário deve investigar se o uso do Serviço viola ou não as
          leis e regulamentos aplicáveis ao Usuário por sua própria
          responsabilidade e despesas, e a Empresa não garante que o uso do
          Serviço pelo Usuário está em conformidade com as leis e regulamentos
          aplicáveis ao Usuário.
        </p>

        <h2 className="mb-2 font-bold text-3xl">
          Artigo 6 (Lei Aplicável e Jurisdição Exclusiva)
        </h2>
        <p className="mb-10 break-normal text-lg">
          Este Acordo será regido e interpretado de acordo com as leis do
          Brasil, e todas as disputas decorrentes deste Acordo estarão sujeitas
          à jurisdição exclusiva do Tribunal Distrital do Rio de Janeiro como o
          tribunal de primeira instância.
        </p>

        <p className="mb-20 break-normal ">
          Data de vigência: 5 de outubro de 2021
        </p>
      </div>
    </div>
  )
}

export default Terms
