import Link from "next/link";
import SectionTitle from "../components/Text/SectionTitle";
import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";
import Button from "../UX/button/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - FAQs - Preguntas frequentes?",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad. Si quieres saber mas sobre nosotros, visita esta pagina. Aqui encontraras las preguntas mas frecuentes que nos hacen nuestros usuarios.",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad citas red social",
};

export default function AppPage() {
  return (
    <main className='bg-palette-3 min-h-screen h-full flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            Unete a Bled Bonds
          </Title>
          <Subtitle bold left lg>
            Crea tu perfil personal en la aplicacion, expica tus intereses y descubre todo lo que Bled Bonds te puede ofrecer.
          </Subtitle>
          <section className="mt-4">
            <SectionTitle bold left>
              Apuntate a los planes
            </SectionTitle>
            <Text left full>
              Cada mes tendras planes diferentes a los que podras apuntarte. Desde cenas, hasta actividades al aire libre. Haz lo que mas te guste con personas que comparten tus mismos intereses.
            </Text>
          </section>

          <section className="mt-4">
            <SectionTitle bold left>
              Conoce a gente nueva
            </SectionTitle>
            <Text left full>
              Descubre que personas tienen los mismos intereses que tu. Si te gusta alguien, puedes darle al boton de &quotme gusta&quot y si la otra persona tambien le da a &quotme gusta&quot, si a ambos os gusta, podreis hablar por el chat de la aplicacion.
            </Text>
          </section>

          <section className="mt-4">
            <SectionTitle bold left>
              Chatea con tus conexiones
            </SectionTitle>
            <Text left full>
              O participa en los chats de grupo de los planes a los que te has apuntado. Empieza a conocer a gente con la que vas a compartir nuevas e inolvidables experiencias.
            </Text>
          </section>

          <section className="mt-10 w-full p-4 bg-palette-1 text-palette-11 shadow-md shadow-palette-11 grid grid-cols-1 md:grid-cols-2">
            <div>
              <SectionTitle bold left>
                Tienes alguna duda?
              </SectionTitle>
              <Text left full>
                Consulta nuestra pagina de preguntas frecuentes y conoce que hacemos en Bled Bonds
              </Text>
            </div>
            <div className="flex flex-col content-center justify-center items-center">
              <Link href="/faq" className="w-[80%]">
                <div className={`bg-palette-6 hover:bg-palette-7 active:bg-palette-8 disabled:bg-palette-2 disabled:text-palette-5 text-palette-11 p-2 rounded-lg border-solid border-2 border-palette-6 hover:border-palette-7 active:border-palette-8 w-full shadow-lg shadow-palette-11`}>
                  PREGUNTAS FRECUENTES
                </div>
              </Link>
            </div>

          </section>
        </div>
      </div>
    </main>
  )
}