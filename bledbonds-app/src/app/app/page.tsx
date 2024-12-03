import SectionTitle from "../components/Text/SectionTitle";
import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";
import Button from "../UX/button/button";
import { Metadata } from "next";
import Link from "../UX/Link";

export const metadata: Metadata = {
  title: "Sobre la aplicación - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad. Si quieres saber mas sobre nosotros, visita esta pagina. Aqui encontraras las preguntas mas frecuentes que nos hacen nuestros usuarios.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad citas red social",
};

export default function AppPage() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            Unete a BledBonds
          </Title>
          <Subtitle bold left lg>
            Crea tu perfil personal en la aplicacion, expica tus intereses y descubre todo lo que BledBonds te puede ofrecer.
          </Subtitle>
          <section className="mt-4 w-full">
            <SectionTitle bold left>
              Apuntate a los planes
            </SectionTitle>
            <Text left full>
              Cada mes tendras planes diferentes a los que podras apuntarte. Desde cenas, hasta actividades al aire libre. Haz lo que mas te guste con personas que comparten tus mismos intereses.
            </Text>
          </section>

          <section className="mt-4 w-full">
            <SectionTitle bold left>
              Conoce a gente nueva
            </SectionTitle>
            <Text left full>
              Descubre que personas tienen los mismos intereses que tu. Si te gusta alguien, puedes darle al boton de &quotme gusta&quot y si la otra persona tambien le da a &quotme gusta&quot, si a ambos os gusta, podreis hablar por el chat de la aplicacion.
            </Text>
          </section>

          <section className="mt-4 w-full">
            <SectionTitle bold left>
              Chatea con tus conexiones
            </SectionTitle>
            <Text left full>
              O participa en los chats de grupo de los planes a los que te has apuntado. Empieza a conocer a gente con la que vas a compartir nuevas e inolvidables experiencias.
            </Text>
          </section>

          {/* <section className="mt-4">
            <SectionTitle bold left>
              Te has quedado sin ideas?
            </SectionTitle>
            <Text left full>
              Si te has quedado sin ideas de preguntas, no te preocupes, gracias a nuestra inovadora Inteligancia Artificial, podremos ayudarte a encontrar la pregunta que necesites.
            </Text>
            <Text left full className=" text-red-400 text-sm">
              ESTA FUNCION ES DE PAGO
            </Text>
          </section> */}
          <section className="mt-10 w-full p-4 bg-palette-1 dark:bg-palette-800 text-palette-11 dark:text-palette-50 shadow-md shadow-palette-11 dark:shadow-palette-50 grid grid-cols-1 md:grid-cols-2 rounded-lg">
            <div>
              <SectionTitle bold left>
                Tienes alguna duda?
              </SectionTitle>
              <Text left full>
                Consulta nuestra pagina de preguntas frecuentes y conoce que hacemos en BledBonds
              </Text>
            </div>
            <div className="flex flex-col content-center justify-center items-center">
              <div className="w-[80%]">
                <Link
                  href="/faq"
                >
                  PREGUNTAS FRECUENTES
                </Link>
              </div>
            </div>
          </section>

          <section className=" mt-14 w-full p-4 bg-palette-1 dark:bg-palette-800 text-palette-11 dark:text-palette-50 shadow-md shadow-palette-11 dark:shadow-palette-50 grid grid-cols-1 md:grid-cols-2 rounded-lg">
            <div>
              <SectionTitle bold left>
                Prueba antes que nadie nuestra aplicacion
              </SectionTitle>
              <Text left full>
                Prueba nuestra aplicacion antes de que nadie la use y asi nos ayudas a mejorar nuestra aplicacion.
              </Text>

            </div>
            <div className="flex flex-col content-center justify-center items-center">
              <div className="w-[80%]">
                <Link
                  href="/beta"
                >
                  ACCEDE A LA FASE DE PRUEBA
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}