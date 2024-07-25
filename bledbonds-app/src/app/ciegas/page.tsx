import Question from "../components/Question";
import SectionTitle from "../components/Text/SectionTitle";
import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";

export default function Ciegas() {

  return (
    <main className='bg-palette-3 dark:bg-palette-950 min-h-screen h-full flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            CITAS A CIEGAS
          </Title>
          <section className="w-full mt-2">
            <Subtitle bold mayus left center>
              ¿Cómo funciona?
            </Subtitle>
            <SectionTitle bold>
              La revolucion de citas online
            </SectionTitle>
            <Text justify left full>
              Te va a abrir un nuevo chat, con una persona aleatoria, te va a mandar 20 mensajes para conocer a esa persona, al acabar, da la opcion de dar LIKE o DISLIKE, si los 2 dan LIKE, puedes seguir hablando con esa persona sin un limite de mensajes.
            </Text>
          </section>
        </div>
      </div>
    </main>
  )
}