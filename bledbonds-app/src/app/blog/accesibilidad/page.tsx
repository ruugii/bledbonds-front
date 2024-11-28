import SectionTitle from "@/app/components/Text/SectionTitle";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { Metadata } from "next";
import Link from "next/link";
const Link_1 = require("@/app/UX/Link").default;

export const metadata: Metadata = {
  title: "Importancia de los eventos inclusivos",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, como actualizar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social",
};

export default function Accesibilidad() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          Porque es importante que los eventos sean accesibles?
        </Title>
        <Text className="mt-4">
          Imagina que vas a un evento, y te encuentras que no puedes acceder a la sala porque la puerta es muy pequeña. Pues esta es la situacion en la que se encuentran millones de personas en su dia a dia.
        </Text>
        <Text className="mt-4">
          Segun el INE hay mas de 4 millones de personas con discapacidad en España. Por eso, es importante que los eventos sean accesibles para todas las personas.
        </Text>
        <Subtitle bold left width className="mt-4">
          ¿Qué son los eventos inclusivos?
        </Subtitle>
        <Text>
          Los eventos inclusivos son eventos que estan especificamente preparados para que cualquier persona pueda disfrutar de ellos. Se llevan a cabo en lugares accesibles para todas las personas, independientemente de su discapacidad. Esto incluye eventos en espacios públicos, como parques, plazas, centros comerciales, etc.
        </Text>
        <Subtitle bold left width className="mt-4">
          ¿Por qué son necesarios los eventos inclusivos?
        </Subtitle>
        <Text>
          Que si, que muy bien todo lo anterior te estaras diciendo, pero... ¿por qué necesito que mi evento sea accesible?
          <br />
          La necesidad de que un evento sea inclusivo, ya pasa de numeros. La inclusividad hace que se construya un ambiente en donde cada uno se sienta aceptado.
          <br />
          Si consigues que tu evento sea accesible, conseguiras que se convierta en un punto de encuentro en donde las personas puedan conectarse y compartir sus experiencias.
          <br />
          En un evento inclusivo, todas las personas, independientemente de su origen, capacidades o experiencias, se sienten valoradas y se sienten parte integral del evento.
          <br />
          Consideramos que un evento inclusivo es una respuesta a la necesidad de crear un mundo donde la igualdad no sea solo un concepto, sino una realidad.
        </Text>
        <Subtitle bold left width className="mt-4">
          Requisitos para que un evento se considere inclusivo
        </Subtitle>
        <Text>
          Ahora ya sabes lo que son los eventos inclusivos y por qué son importantes, ¿cómo se hace que un evento sea inclusivo?
          <br />
          Para que un evento sea inclusivo, es importante cumplir con una serie de requisitos que van más allá de la simple disposición de los espacios físicos. Obviamente la disposicion es importante, porque algo que a todas las personas con discapacidad nos ha pasado, es el ir a un concierto, que no este preparado, y que la zona de discapacidad esta junto a la pista y no lo puedes disfrutar, pero no lo es todo. Esto implica no solo proporcionar rampas, baños adaptados y otras modificaciones estructurales. Te contamos algunos de los requisitos principales:
        </Text>
        <ul className={`text-palette-11 dark:text-palette-50 mb-4 text-justify w-full text-lg list-disc ml-5`}>
          <li>
            Piensa en soluciones tecnológicas, como servicios de interpretación en lenguaje de signos o sistemas de sonido con frecuencia modulada para aquellos con discapacidad auditiva.
          </li>
          <li>
            La diversidad en la programación es otro elemento crucial. Los eventos inclusivos buscan representar y celebrar una amplia gama de identidades y talentos. En este caso, hablamos de artistas y conferenciantes, de actividades participativas, etc. La variedad es la clave para asegurar que cada asistente se sienta representado y conectado.
          </li>
          <li>
            La creación de espacios seguros y acogedores es un requisito que va más lejos de la logística. Implica implementar políticas claras contra el acoso, formar a un personal amable y atento, y fomentar una atmósfera positiva donde todos se sientan respetados y aceptados.
          </li>
          <li>
            La inclusión digital también juega un papel crucial en la era actual. Ofrecer transmisiones en línea, interacción en redes sociales y contenido accesible en línea amplía el alcance del evento a aquellos que no pueden asistir físicamente, garantizando que la experiencia sea verdaderamente inclusiva.
          </li>
        </ul>

        <Subtitle bold left width className="mt-4">
          Objetivos de los eventos inclusivos
        </Subtitle>
        <Text>
          Los eventos inclusivos son catalizadores de cambio, donde la diversidad se celebra activamente y se promueven valores fundamentales. Y esta es la razón principal por la que debes apostar por ellos.
          <br />
          Estos eventos deben tener objetivos claros que os vamos a contar:
        </Text>
        <SectionTitle bold width margin>
          Celebración de la diversidad
        </SectionTitle>
        <Text>
          Uno de los principales objetivos de los eventos inclusivos es crear un espacio donde la diversidad se celebre. A través de una representación amplia y respetuosa de diferentes identidades, estos eventos buscan romper estereotipos y promover la idea de que cada individuo aporta algo único y valioso.
        </Text>
        <SectionTitle bold width margin>
          Fomento de la empatía
        </SectionTitle>
        <Text>
          Este tipo de eventos buscan crear una conexión emocional entre los asistentes, fomentando la empatía y el entendimiento mutuo. Al compartir experiencias diversas, se construyen puentes de comprensión que trascienden las diferencias superficiales, creando una base sólida para comunidades más unidas.
        </Text>
        <SectionTitle bold width margin>
          Inspiración para el cambio social
        </SectionTitle>
        <Text>
          Estos eventos buscan impactar a nivel individual, pero también aspiran a provocar cambios a nivel social. Destacar y celebrar la diversidad contribuye a la construcción de una sociedad más justa e inclusiva, donde cada voz cuenta y cada historia importa.
        </Text>
        <SectionTitle bold width margin>
          Empoderamiento de comunidades marginadas
        </SectionTitle>
        <Text>
          Los eventos inclusivos actúan como plataformas para dar voz y poder a comunidades marginadas. A través de la visibilidad y el reconocimiento, se busca contrarrestar la discriminación y promover la igualdad de oportunidades para todos.
        </Text>
        <SectionTitle bold width margin>
          Creación de experiencias memorables para todos
        </SectionTitle>
        <Text>
          La magia de un evento inclusivo radica en la creación de recuerdos duraderos para cada participante. Uno de tus objetivos debe ser que cada persona se sienta parte integral de la experiencia, que construya recuerdos que perdurarán mucho después de que las luces se apaguen y la música se desvanezca.
        </Text>
        <SectionTitle bold width margin>
          Inspiración para futuros eventos
        </SectionTitle>
        <Text>
          Estos eventos establecen un estándar inspirador para el futuro. Cada encuentro exitoso demuestra que la inclusividad es esencial. A medida que más eventos adoptan este enfoque, se allana el camino hacia un mundo donde la diversidad es la norma, no la excepción.
          <br />
          ¡Lee nuestro <Link href='/blog' className=" hover:underline dark:text-palette-50 dark:hover:text-palette-100 text-palette-900 hover:text-palette-950">blog</Link> para no perderte muchos más artículos!
        </Text>

        <section className="mt-10 w-full p-4 bg-palette-1 dark:bg-palette-800 text-palette-11 dark:text-palette-50 shadow-md shadow-palette-11 dark:shadow-palette-50 grid grid-cols-1 md:grid-cols-2 rounded-lg">
          <div>
            <SectionTitle bold left>
              Quieres saber si tu evento es inclusivo?
            </SectionTitle>
            <Text left full>
              Contacta con nosotros para que realizemos un estudio de tu evento y te ayudamos a entender si es inclusivo o no y soluciones para mejorarlo.
            </Text>
          </div>
          <div className="flex flex-col content-center justify-center items-center">
            <Link_1
              href="https://forms.gle/UQaaTE2wvHDEBRmS8"
            >
              Contacta con nosotros
            </Link_1>
          </div>
        </section>
      </div>
    </div>
  )
}
