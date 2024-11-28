import { Metadata } from "next";
import Question from "../components/Question";
import SectionTitle from "../components/Text/SectionTitle";
import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";


export const metadata: Metadata = {
  title: "Citas a ciegas - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, en esta pagina, descubriras mas sobre las citas a ciegas",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, citas a ciegas",
};
export default function Ciegas() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            CITAS A CIEGAS para personas con discapacidad
          </Title>
          <section className="w-full mt-2">
            <Text>
              En BledBonds, queremos que tengas la oportunidad de conocer a alguien, sin necesidad de tener una conexion simplemente por el fisico. Por eso, hemos creado las <b>citas a ciegas</b>, diseñadas para ofrecer una experiencia divertida.
            </Text>
          </section>
          <section className="w-full mt-2">
            <Subtitle bold left>
              ¿Cómo funciona?
            </Subtitle>
            <Text justify left full>
              <ul className="list-disc ml-4">
                <li><b>Conexion Aleatoria y Segura:</b> Al abrir la pagina de citas a ciegas, te emparejaremos de manera aleatoria y segura.</li>
                <li><b>20 Mensajes para conocerse:</b> Cada uno tendrá 20 mensajes para intercambiar. Este límite ayuda a que la conversación sea dinámica y te permite mostrar tu personalidad e intereses.</li>
                <li><b>Evaluacion Mutua:</b> Al terminar los mensajes, puedes dar un <b>LIKE</b> si quieres continuar hablando o <b>DISLIKE</b> si quieres dejar de hablar con tu cita a ciegas. Si los 2 dais like, podrás seguir hablando sin limite de mensajes.</li>
              </ul>
            </Text>
            <Text justify left full>
              Animate a probar y descubre a quien puedes conocer en nuestra plataforma!
            </Text>
          </section>
        </div>
      </div>
    </main>
  )
}