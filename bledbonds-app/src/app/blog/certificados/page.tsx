import SectionTitle from "@/app/components/Text/SectionTitle";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BledBonds - Citas para personas con discapacidad - Tarjeta Europea de Discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, como actualizar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social",
};

export default function Accesibilidad() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          ¿Sabías que se lanzará una Tarjeta Europea de Discapacidad?
        </Title>
        <Text className="mt-4">
          En este post, vamos a hablar sobre un avance importante: la Tarjeta Europea de Discapacidad, una iniciativa que busca mejorar la vida de millones de personas con discapacidad en la Unión Europea. ¡Te contamos todo lo que necesitas saber!
        </Text>
        <Text className="mt-4">
          El pasado 15 de octubre, el Consejo de Europa aprobó las directrices para regular esta tarjeta. ¿Qué significa esto? Que todas las personas con discapacidad, incluidas aquellas con discapacidades no visibles, podrán acceder a condiciones especiales y tratamientos prioritarios en cualquier país de la UE, sin necesidad de tener una tarjeta específica de cada lugar.
        </Text>
        <Text className="mt-4">
          La Tarjeta Europea de Discapacidad traerá consigo múltiples beneficios, como descuentos, acceso gratuito o prioritario, asistencia y plazas reservadas para quienes lo necesiten, sin importar en qué país europeo te encuentres. Esto representa un gran avance en el derecho a la libre circulación de las aproximadamente 80 millones de personas con discapacidad que viven en la Unión Europea.
        </Text>
        <Text className="mt-4">
          ¿Te preguntas cómo funcionará? Aunque ya se ha dado luz verde a la creación de esta tarjeta, actualmente aún no se sabe cómo se podrá tramitar en cada país. Los detalles sobre el proceso de solicitud y emisión de la tarjeta serán anunciados por cada Estado miembro en los próximos meses.
        </Text>
        <Text className="mt-4">
          Lo que sí se ha confirmado es que la tarjeta se emitirá en formato físico, y que cada país podrá optar también por ofrecer una versión digital. Los estados miembros tendrán dos años y medio para adaptar sus leyes a esta nueva normativa, y otros dos años y medio para implementarla completamente.
        </Text>
        <Text className="mt-4">
          Es un paso adelante en la inclusión y movilidad de las personas con discapacidad, facilitando su acceso a servicios y derechos en toda Europa.
        </Text>
        <Text className="mt-4">
          Nosotros estaremos atentos a todas las novedades sobre la Tarjeta Europea de Discapacidad y te mantendremos al tanto de cualquier actualización importante. ¡Sigue nuestro blog para no perderte nada!
        </Text>
      </div>
    </div>
  )
}
