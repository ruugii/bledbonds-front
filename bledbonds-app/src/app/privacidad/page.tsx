import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";

export default function Page() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          Política de privacidad
        </Title>
        <Text left full className="mt-4">
          ¡Hola! Te damos la bienvenida a la Política de privacidad de BledBonds.
        </Text>
        <Text left full className="mt-4">
          Sabemos que leer una política de privacidad no suena como un plan divertido, pero te pedimos tu atención. Nos esforzamos mucho para que esta política sea lo más clara posible, porque queremos que la leas. Estamos aquí para guiarte sobre qué datos recopilamos, por qué lo hacemos y cómo los usamos.
        </Text>
        <Text left full className="mt-4">
          Esta Política de privacidad entra en vigor a partir del 24 de septiembre de 2024, fecha en la que se publica.
        </Text>
        <Subtitle bold left width className="mt-4">
          1. Dónde rige esta Política de privacidad
        </Subtitle>
        <Text left full className="mt-4">
          Esta Política de privacidad rige para sitios web, aplicaciones, eventos y otros servicios que operamos con la marca BledBonds. Ya sea que se conecte en busca de su alma gemela, se una a nosotros en uno de nuestros eventos o utilice cualquiera de nuestros increíbles servicios, esta Política de privacidad tiene todo lo que necesita. Para simplificar, sencillamente nos referimos a todos estos como nuestro “servicio” en esta Política de privacidad.
        </Text>
        <Text left full className="mt-4">
          Si por algún motivo, uno de nuestros servicios requiere su propia política de privacidad por separado, esa política se pondrá a su disposición y se aplicará esa política, en lugar de esta Política de privacidad.
        </Text>
        <Subtitle bold left width className="mt-4">
          2. Los datos que recopilamos
        </Subtitle>
        <Text left full className="mt-4">
          No hace falta decir que no podemos ayudarlo a desarrollar conexiones significativas sin que proporcione cierta información sobre usted, como datos básicos del perfil y los tipos de personas que le gustaría conocer. El uso de nuestro servicio también genera cierta información, como cuándo inició sesión y cómo utilizó el servicio. Si está interesado en todos los detalles, asegúrese de consultar la tabla a continuación.
        </Text>
        <table className="w-full text-palette-950 dark:text-palette-50 border-palette-950 dark:border-palette-50 border-collapse mt-4 mb-4">
          <thead>
            <tr>
              <th className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Datos que nos entregas
              </th>
              <th className="p-4 text-left border border-palette-950 dark:border-palette-50">
              </th>
            </tr>
            <tr>
              <th className="p-4 text-left border border-palette-950 dark:border-palette-50">
                <b>
                  Categoria
                </b>
              </th>
              <th className="p-4 text-left border border-palette-950 dark:border-palette-50">
                <b>
                  Descripción
                </b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Datos de la cuenta
              </td>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Cuando crea una cuenta, nos brinda información básica para que se configure su cuenta, como su número de teléfono, dirección de correo electrónico y fecha de nacimiento.
              </td>
            </tr>
            <tr>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Datos del perfil
              </td>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Cuando completa su perfil, comparte detalles adicionales sobre usted, por ejemplo, su género, intereses, preferencias, ubicación aproximada, etc. Parte de esta información podría considerarse confidencial o especial en algunos países, por ejemplo, los detalles sobre su orientación sexual, vida sexual, salud o creencias políticas. Si decide brindar esta información, usted nos autoriza a usarla según se establece en esta Política de privacidad.
              </td>
            </tr>
            <tr>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Contenido
              </td>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Cuando usa nuestro servicio, puede publicar fotos, videos, audios, textos y otro tipo de contenido, como los chats con otros miembros.
              </td>
            </tr>
            <tr>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                Datos de marketing, encuestas e investigación
              </td>
              <td className="p-4 text-left border border-palette-950 dark:border-palette-50">
                A veces realizamos (i) encuestas, grupos de discusión o estudios de mercado con fines de investigación y (ii) promociones, eventos o certámenes con fines de marketing. Cuando decide participar, usted nos brinda información para procesar su inscripción y participación, como también sus respuestas a nuestras preguntas y su feedback.
              </td>
            </tr>
          </tbody>
        </table>
        <Subtitle bold left width className="mt-4">
          3. Privacidad de los niños
        </Subtitle>
        <Text left full className="mt-4">
          Nuestro servicio está restringido a personas mayores de 18 años. No permitimos personas menores de 18 años en nuestra plataforma. Si sospecha que un miembro es menor de 18 años, utilice el mecanismo de denuncia disponible en el servicio.
        </Text>
        <Subtitle bold left width className="mt-4">
          4. Cambios a la Política de privacidad
        </Subtitle>
        <Text left full className="mt-4">
          Esta política podrá cambiar con el tiempo. Siempre estamos buscando nuevas e innovadoras maneras de ayudarlo a construir conexiones significativas y a esforzarnos por garantizar que las explicaciones de nuestras prácticas de datos se mantengan actualizadas. Antes de que cualquier cambio sustancial entre en vigencia, le enviaremos un aviso para que tenga tiempo de examinar los cambios.
        </Text>
      </div>
    </div>
  )
}