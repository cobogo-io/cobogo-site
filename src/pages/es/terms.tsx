import Head from 'next/head';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <Head>
        <title>Cobogo - Condiciones de Uso</title>
      </Head>

      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">Notas</h1>
        <p className="regular-18 break-normal mb-5">
          Para Todos los Usuarios
          <br />
          No se permite el comportamiento grosero, irritante o poco ético hacia
          otros usuarios. Cobogo está destinado a colaboradores del ecosistema
          de YouTube. Las cuentas de YouTube no autorizadas o la eliminación de
          los repositorios después de la integración serán castigadas como
          fraude. Utilice la dApp con buenos modales.
        </p>
        <h1 className="bold-36 mb-5">Condiciones de Uso</h1>

        <h2 className="bold-30 mb-2">Artículo 1 (Solicitud)</h2>
        <p className="regular-18 break-normal mb-5">
          Estos Términos y Condiciones se aplican a todas las relaciones entre
          Cobogo (la Empresa) y el Usuario.
          <br />
          Al unirse a Cobogo, el usuario acepta cumplir con estos Términos y
          Condiciones. Si no está de acuerdo con estos Términos y condiciones,
          no podrá utilizar Cobogo.
          <br />
          La Empresa puede cambiar el contenido del Servicio a su entera
          discreción. Si la Empresa realiza modificaciones a los términos de
          este Acuerdo, ella notificará a los Usuarios o publicará dichas
          modificaciones en el sitio web de la Empresa. Se considerará que los
          usuarios que utilicen el Servicio en una fecha posterior, o que no
          tomen las medidas necesarias para cancelar su registro dentro del
          período de tiempo designado, han aceptado los términos modificados del
          Acuerdo.
        </p>
        <h2 className="bold-30 mb-2">Artículo 2 (Materias Prohibidas)</h2>
        <p className="regular-18 break-normal mb-5">
          Los usuarios no deben participar en los siguientes actos
        </p>
        <ul className="regular-16 list-decimal pl-20 mb-3">
          <li>
            Violar al Código de conducta de Cobogo (https://cobogo.social/code)
          </li>
          <li>
            Hacer que el canal sea privado o eliminarlo después de la
            integración.
          </li>
          <li>
            La comisión de un acto delictivo o contra el orden público y la
            moral
          </li>
          <li>Ser una fuerza antisocial o una parte relacionada</li>
          <li>Usar el Servicio de manera inapropiada o interferir con él</li>
          <li>Encontrarse en alguno de los siguientes artículos</li>
        </ul>

        <h2 className="bold-30 mb-2">Artículo 3 (Eliminación de la Cuenta)</h2>
        <p className="regular-18 break-normal mb-5">
          La Empresa puede suspender o eliminar inmediatamente la cuenta del
          Usuario en Cobogo si se determina que el Usuario ha cometido
          cualquiera de los actos prohibidos descritos en el Artículo 2.
        </p>

        <h2 className="bold-30 mb-2">Artículo 4 (Suspensión del Servicio)</h2>
        <p className="regular-18 break-normal mb-5">
          Cobogo se reserva el derecho de suspender o discontinuar todo o parte
          del Servicio sin previo aviso al Usuario, si la Empresa considera que
          exista alguna de las siguientes razones.
        </p>
        <ul className="regular-16 list-decimal pl-20 mb-3">
          <li>
            Cuando se vuelva extremadamente difícil continuar con el Servicio
            debido a desastres naturales como terremotos, tifones e incendios,
            enfermedades infecciosas, terrorismo, instrucciones u órdenes de un
            tercero, u otras razones de fuerza mayor.
          </li>
          <li>
            En caso de que el sistema informático o las líneas de comunicación
            se desconecten debido a un accidente.
          </li>
        </ul>
        <p className="regular-18 break-normal mb-5">
          La Empresa no se hace responsable de cualquier perjuicio o daño
          sufrido por el Usuario o terceros por la suspensión o interrupción de
          la prestación del Servicio, independientemente del motivo.
        </p>

        <h2 className="bold-30 mb-2">
          Artículo 5 (Exención de Garantía y Exención de Responsabilidad)
        </h2>
        <p className="regular-18 break-normal mb-5">
          La Empresa no brindará ninguna garantía a los Usuarios más allá de lo
          estipulado en estos Términos de Uso.
          <br />
          El Usuario deberá investigar si el uso del Servicio viola o no las
          leyes y regulaciones aplicables al Usuario bajo su propia
          responsabilidad y costo, y la Empresa no garantiza que el uso del
          Servicio por parte del Usuario cumple con las leyes y regulaciones
          aplicables al Usuario.
        </p>

        <h2 className="bold-30 mb-2">
          Artículo 6 (Ley Aplicable y Jurisdicción Exclusiva)
        </h2>
        <p className="regular-18 break-normal mb-10">
          Este Acuerdo se regirá e interpretará de acuerdo con las leyes de
          Brasil, y todas las disputas que surjan de este Acuerdo estarán
          sujetas a la jurisdicción exclusiva del Tribunal de Distrito de Río de
          Janeiro como tribunal de primera instancia.
        </p>

        <p className="regular-16 break-normal mb-20">
          Fecha de vigencia: 5 de octubre de 2021
        </p>
      </div>
    </div>
  );
}
