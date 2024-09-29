import DeleteFormComponent from "@/app/components/DeleteFormComponent";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - Consultoria de eventos",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, como eliminar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
};

export default function ConsultoriaPage() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          Consultoria de eventos
        </Title>
        <Subtitle bold left width className="mt-4" mayus>
          Consultoría de Eventos Accesibles: Mejora la Inclusión y Comodidad de Tus Asistentes
        </Subtitle>
        <Text className="mt-4">
          Uno de los servicios clave que ofrecemos a los organizadores de eventos es nuestra consultoría especializada en eventos accesibles, diseñada para garantizar que tus eventos sean inclusivos, cómodos y accesibles para todas las personas, independientemente de sus capacidades.
        </Text>
        <Text className="mt-4">
          ¿Te ha ocurrido alguna vez que en tu evento la zona accesible se ubique en un lugar poco adecuado, o que los asistentes con movilidad reducida tengan dificultades para acceder debido a puertas estrechas o barreras arquitectónicas? Este tipo de situaciones no deberían ocurrir. Nuestro servicio de consultoría de eventos está pensado precisamente para identificar y solucionar este tipo de problemas, asegurando que todos los asistentes puedan disfrutar de tu evento sin limitaciones.
        </Text>
        <Subtitle bold left width className="mt-4" mayus>
          ¿Qué incluye nuestra consultoría de eventos accesibles?
        </Subtitle>
        <Text className="mt-4">
          Nuestra consultoría se basa en una evaluación exhaustiva de las instalaciones y la logística de tu evento para garantizar que cumplan con las normativas de accesibilidad y que ofrezcan una experiencia inclusiva para todos. Algunos de los aspectos que abordamos incluyen:
        </Text>
        <Text className="mt-4">
          <ul className="list-disc ml-8 text-palette-950 dark:text-palette-50">
            <li>
              <b>Accesibilidad física:</b> Revisamos los accesos, rutas y espacios para asegurarnos de que sean adecuados para personas con movilidad reducida, usuarios de sillas de ruedas y otras discapacidades físicas.
            </li>
            <li>
              <b>Señalización inclusiva:</b> Aseguramos que la señalización sea clara, visible y comprensible para personas con discapacidades visuales o cognitivas.
            </li>
            <li>
              <b>Tecnologías asistivas:</b> Te asesoramos sobre la implementación de sistemas de asistencia auditiva, subtitulado en tiempo real y otras soluciones tecnológicas para garantizar que las personas con discapacidades sensoriales puedan participar plenamente.
            </li>
            <li>
              <b>Experiencia del usuario:</b> Analizamos cada detalle para que todos los asistentes se sientan bienvenidos y cómodos durante el evento, desde el momento en que llegan hasta que se retiran.
            </li>
          </ul>
        </Text>
        <Subtitle bold left width className="mt-4" mayus>
          Experiencia y compromiso
        </Subtitle>
        <Text className="mt-4">
          Nuestra consultoría es llevada a cabo por expertos en asistencia de personas con discapacidad. Gracias a su profundo conocimiento y experiencia, pueden detectar áreas de mejora y proponer soluciones eficaces y personalizadas para hacer que tu evento sea accesible para todos los participantes.
        </Text>
        <Subtitle bold left width className="mt-4" mayus>
          Garantía de Calidad
        </Subtitle>
        <Text className="mt-4">
          Para asegurarnos de que nuestros servicios sean lo más efectivos posibles, realizamos una serie de pruebas y simulaciones previas al evento, lo que nos permite garantizar la accesibilidad y una experiencia acogedora para todos los asistentes. Si necesitas más información o tienes algún problema, no dudes en ponerte en contacto con nosotros a través de nuestro <Link href='https://forms.gle/UQaaTE2wvHDEBRmS8' className=" text-palette-900 hover:text-palette-950 underline dark:text-palette-100 hover:dark:text-palette-50">formulario de contacto</Link>.
        </Text>
      </div>
    </div>
  )
}
