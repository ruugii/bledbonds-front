import { Metadata } from "next";
import SectionTitle from "../components/Text/SectionTitle";
import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - Que es Bled Bonds?",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad. Si quieres saber mas sobre nosotros, visita esta pagina.",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
};

export default function About() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 min-h-screen h-full flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            Que es Bled Bonds?
          </Title>
          <Text bold left subtitle className="mt-6">
            Bled Bonds es una aplicacion que tiene el objetivo de conectar a personas con discapacidad.
          </Text>
          <Text left full big className="mt-6">
            Esta aplicacion de citas y planes, quiere facilitar las relaciones sociales y amororsas entre personas con cualquier tipo de discapacidad.
          </Text>
          <Text left full big>
            Queremos que las personas con discapacidad tengan las mismas oportunidades y derechos para tener relaciones con otras personas de manera segura.
          </Text>
        </div>
      </div>
    </main>
  )
}