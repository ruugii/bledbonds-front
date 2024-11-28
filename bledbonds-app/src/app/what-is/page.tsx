import { Metadata } from "next";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";

export const metadata: Metadata = {
  title: "Que es BledBonds - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad. Si quieres saber mas sobre nosotros, visita esta pagina.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social",
};

export default function About() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            Que es BledBonds?
          </Title>
          <Text bold left subtitle className="mt-6">
            BledBonds es una aplicacion que tiene el objetivo de conectar a personas con discapacidad.
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