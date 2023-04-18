const Terms = () => {
  return (
    <div className="flex flex-col h-full min-h-screen ">
      <div className="flex flex-col flex-1 p-20 mx-5 lg:mx-20">
        <h1 className="mb-5 font-bold text-4xl">Notas</h1>
        <p className="mb-5 break-normal text-lg">
          Para Todos los Usuarios
          <br />
          No se permite el comportamiento grosero, irritante o poco ético hacia
          otros usuarios. Cobogo está destinado a colaboradores del ecosistema
          de YouTube. Las cuentas de YouTube no autorizadas o la eliminación de
          los repositorios después de la integración serán castigadas como
          fraude. Utilice la dApp con buenos modales.
        </p>
        <h1 className="mb-5 font-bold text-4xl">Condiciones de Uso</h1>

        <h2 className="mb-2 font-bold text-3xl">Artículo 1 (Solicitud)</h2>
        <p className="mb-5 break-normal text-lg">
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
        <h2 className="mb-2 font-bold text-3xl">
          Artículo 2 (Materias Prohibidas)
        </h2>
        <p className="mb-5 break-normal text-lg">
          Los usuarios no deben participar en los siguientes actos
        </p>
        <ul className="pl-20 mb-3 list-decimal ">
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

        <h2 className="mb-2 font-bold text-3xl">
          Artículo 3 (Eliminación de la Cuenta)
        </h2>
        <p className="mb-5 break-normal text-lg">
          La Empresa puede suspender o eliminar inmediatamente la cuenta del
          Usuario en Cobogo si se determina que el Usuario ha cometido
          cualquiera de los actos prohibidos descritos en el Artículo 2.
        </p>

        <h2 className="mb-2 font-bold text-3xl">
          Artículo 4 (Suspensión del Servicio)
        </h2>
        <p className="mb-5 break-normal text-lg">
          Cobogo se reserva el derecho de suspender o discontinuar todo o parte
          del Servicio sin previo aviso al Usuario, si la Empresa considera que
          exista alguna de las siguientes razones.
        </p>
        <ul className="pl-20 mb-3 list-decimal ">
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
        <p className="mb-5 break-normal text-lg">
          La Empresa no se hace responsable de cualquier perjuicio o daño
          sufrido por el Usuario o terceros por la suspensión o interrupción de
          la prestación del Servicio, independientemente del motivo.
        </p>

        <h2 className="mb-2 font-bold text-3xl">
          Artículo 5 (Exención de Garantía y Exención de Responsabilidad)
        </h2>
        <p className="mb-5 break-normal text-lg">
          La Empresa no brindará ninguna garantía a los Usuarios más allá de lo
          estipulado en estos Términos de Uso.
          <br />
          El Usuario deberá investigar si el uso del Servicio viola o no las
          leyes y regulaciones aplicables al Usuario bajo su propia
          responsabilidad y costo, y la Empresa no garantiza que el uso del
          Servicio por parte del Usuario cumple con las leyes y regulaciones
          aplicables al Usuario.
        </p>

        <h2 className="mb-2 font-bold text-3xl">
          Artículo 6 (Ley Aplicable y Jurisdicción Exclusiva)
        </h2>
        <p className="mb-10 break-normal text-lg">
          Este Acuerdo se regirá e interpretará de acuerdo con las leyes de
          Brasil, y todas las disputas que surjan de este Acuerdo estarán
          sujetas a la jurisdicción exclusiva del Tribunal de Distrito de Río de
          Janeiro como tribunal de primera instancia.
        </p>

        <p className="mb-20 break-normal ">
          Fecha de vigencia: 5 de octubre de 2021
        </p>
      </div>
    </div>
  )
}

export default Terms
