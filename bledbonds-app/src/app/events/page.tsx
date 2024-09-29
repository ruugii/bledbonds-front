import DeleteFormComponent from "@/app/components/DeleteFormComponent";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { Metadata } from "next";
import SectionTitle from "../components/Text/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - Eventos",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, como actualizar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
};

export default function BetaPage() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          Eventos de BledBonds
        </Title>
        <Subtitle bold left width className="mt-4">
          Descubre eventos inclusivos para personas con discapacidad y conoce gente nueva
        </Subtitle>
        <Text className="mt-4">
          En nuestra aplicación de citas para personas con discapacidad, no solo puedes conectar con otros usuarios, sino también asistir a eventos inclusivos especialmente diseñados para ti. Nuestra función de eventos te permite participar en actividades sociales donde tendrás la oportunidad de conocer gente nueva en un entorno seguro, accesible y acogedor.
        </Text>
        <Text className="mt-4">
          Ofrecemos una amplia variedad de eventos, desde reuniones gratuitas hasta experiencias exclusivas de pago. Estos eventos son una excelente manera de ampliar tu círculo social, crear conexiones genuinas y encontrar a alguien especial, ya sea para amistad o relaciones. Ya sea que elijas eventos gratuitos o de pago, nos aseguramos de que cada encuentro esté diseñado para que todos los participantes se sientan cómodos y disfruten de la experiencia, sin barreras ni limitaciones.
        </Text>
        <Text className="mt-4">
          Participar es fácil: selecciona los eventos que más te interesen, revisa si tienen un costo de participación y confirma tu asistencia. Prepárate para disfrutar de momentos únicos mientras te conectas con personas que comparten tus intereses. ¡Es el espacio perfecto para ser tú mismo, conocer gente nueva y construir relaciones auténticas!
        </Text>
        <Text className="mt-4">
          Explora la posibilidad de nuevas amistades, conexiones profundas y experiencias inolvidables en nuestros eventos inclusivos, adaptados a tus necesidades y preferencias. Porque todos merecemos un espacio donde podamos conocernos, relacionarnos y ser felices.
        </Text>

        <SectionTitle bold left width className="mt-4">
          Eventos de BledBonds
        </SectionTitle>
        <Text className="mt-4">
          En BledBonds events, somos especialistas en organizar eventos inclusivos de alta calidad para que los puedan disprutar tanto personas con discapacidad como personas sin.
        </Text>
        <SectionTitle bold left width className="mt-4">
          Servicio de Consultoria
        </SectionTitle>
        <Text className="mt-4">
          A parte de los eventos organizados por nosotros, ofrecemos un servicio de consultoria para ayudar a los organizadores a que sus eventos sean accesibles y acogedores para todas las personas.
        </Text>
        <Text className="mt-4">
          Responde el <Link href='https://forms.gle/UQaaTE2wvHDEBRmS8' className=" text-palette-900 hover:text-palette-950 underline dark:text-palette-100 hover:dark:text-palette-50">formulario de contacto</Link> para que podamos hacerte llegar un presupuesto a medida.
        </Text>
      </div>
    </div>
  )
}
