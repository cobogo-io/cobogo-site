import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from '../../components/NextLink';
import Social from '../../components/IndexPage/Social';
import Footer from '../../components/IndexPage/Footer';
import ChooseLanguage from '../../components/ChooseLanguage';

const Code = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <ChooseLanguage />
      <Head>
        <title>cobogo - código de conducta</title>
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
        <h1 className="bold-36 mb-5">Código de Conducta</h1>
        <h2 className="bold-30 mb-2">Nuestro Compromiso</h2>
        <p className="regular-18 break-normal mb-5">
          Con el interés de promover un ambiente abierto y acogedor, nosotros,
          como colaboradores y partes interesadas, estamos comprometidos a hacer
          de la participación en nuestro proyecto y en nuestra comunidad una
          experiencia libre de acoso para todos, independientemente de su edad,
          tamaño corporal, discapacidad, etnia, características sexuales,
          identidad y expresión de género, nivel de experiencia, educación,
          nivel socioeconómico, nacionalidad, apariencia personal, raza,
          religión o identidad y orientación sexual.
        </p>
        <h2 className="bold-30 mb-2">Nuestros Valores</h2>
        <p className="regular-18 break-normal mb-5">
          Los ejemplos de conductas que contribuyen a crear un ambiente positivo
          incluyen:
        </p>
        <ul className="regular-16 list-disc pl-20 mb-3">
          <li>Utilizar un lenguaje acogedor e inclusivo</li>
          <li>Respetar diferentes puntos de vistas y experiencias</li>
          <li>Aceptar con gracia a las críticas constructivas</li>
          <li>Concentrarse en lo que es mejor para la comunidad</li>
          <li>Mostrar empatía hacia otros miembros de la comunidad</li>
        </ul>
        <p className="regular-18 break-normal mb-5">
          Ejemplos de conductas inaceptables por parte de los participantes
          incluyen:
        </p>
        <ul className="regular-16 list-disc pl-20">
          <li>
            El uso de lenguaje o imágenes sexualizadas y atención o avances
            sexuales no deseados.
          </li>
          <li>
            Comentarios del tipo “troll”, despectivos y ataques personales o
            políticos
          </li>
          <li>Acoso público o privado</li>
          <li>
            Publicar información privada de terceros, como una dirección física
            o electrónica, sin permiso explícito
          </li>
          <li>
            Otra conducta que podría considerarse inapropiada en un entorno
            profesional.
          </li>
        </ul>
        <h2 className="bold-30 mb-2">Nuestras Responsabilidades </h2>
        <p className="regular-18 break-normal mb-5">
          Los encargados del mantenimiento del proyecto son responsables de
          aclarar los estándares de comportamiento aceptable y deben tomar
          medidas correctivas adecuadas y justas en respuesta a cualquier caso
          de comportamiento inaceptable.
        </p>
        <p className="regular-18 break-normal mb-5">
          Los mantenedores del proyecto tienen el derecho y la responsabilidad
          de eliminar, editar o rechazar comentarios, commits, códigos,
          ediciones de wiki, preguntas y otras contribuciones que no estén en
          línea con este Código de Conducta, o prohibir temporal o
          permanentemente a cualquier colaborador por otro comportamiento que
          consideren inapropiado, amenazante, ofensivo o dañino.
        </p>
        <h2 className="bold-30 mb-2">Alcance</h2>
        <p className="regular-18 break-normal mb-5">
          Este Código de Conducta se aplica a todos los espacios del proyecto, y
          también se aplica cuando una persona representa el proyecto o su
          comunidad en espacios públicos. Ejemplos de representación de un
          proyecto o comunidad incluyen el uso de una dirección de correo
          electrónico oficial del proyecto, la publicación a través de una
          cuenta oficial de redes sociales o la actuación como representante
          designado en un evento online o no online. Los encargados del
          mantenimiento del proyecto pueden definir y aclarar más
          representaciones de un proyecto.
        </p>
        <h2 className="bold-30 mb-2">Ejecución</h2>
        <p className="regular-18 break-normal mb-5">
          Los casos de comportamiento abusivo, de acoso o inaceptable de
          cualquier otro modo se pueden informar comunicándose con el equipo del
          proyecto en hi@devtoken.rocks. Todas las quejas serán revisadas e
          investigadas y resultarán en una respuesta que se considere necesaria
          y apropiada bajo las circunstancias. El equipo del proyecto debe
          mantener la confidencialidad en relación con el informante de un
          incidente. Se pueden publicar más detalles de políticas específicas
          por separado.
        </p>
        <p className="regular-18 break-normal mb-5">
          Los mantenedores del proyecto que no sigan o no cumplan con el Código
          de Conducta de buena fe pueden enfrentar repercusiones temporales o
          permanentes, según lo determinen otros miembros del liderazgo del
          proyecto.
        </p>
        <h2 className="bold-30 mb-2">Atribución</h2>
        <p className="regular-18">
          Este Código de Conducta ha sido adaptado del{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/"
            target="_blank"
            rel="noreferrer"
          >
            Acuerdo de Colaborador
          </a>
          , versión 1.4, disponible en{' '}
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
          Para obtener respuestas a las preguntas frecuentes sobre este código
          de conducta, consulte{' '}
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
      <Social />
      <Footer />
    </div>
  );
};

export default Code;
