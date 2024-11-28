import Price from "@/app/components/Text/Price";
import SectionTitle from "@/app/components/Text/SectionTitle";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import Link from "@/app/UX/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BledBonds - Citas para personas con discapacidad - Accesibilidad web",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, como actualizar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, accesibilidad web",
};

export default function Page() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold>
          consultoría de accesibilidad web
        </Title>
        <Subtitle bold left className="mt-4" mayus>
          Analizamos tu pagina web para que sea accesible a todas las personas con discapacidad
        </Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mr-2">
            <Text className="mt-4 text-justify">
              Nuesto objetivo es asesorar y ofrecer soluciones que incorporen accesibilidad y usabilidad digital a los entornos web, aplicaciones moviles y cualquier otro tipo de producto digital que tengas en tu empresa. <b>Buscamos que tu sitio web sea accesible a las personas</b>, y no al reves, ofreciendo <b>soluciones personalizadas</b> para cada tipo de problema que puedas encontrar.
            </Text>
            <Text className="mt-4 text-justify">
              Los trabajadores de BledBonds cuentan con una <b>extensa trayectoria en el sector de la discapacidad y de la accesibilidad</b>, esto, junto a la experiencia de otros trabajadores <b>expertos en desarrollo de sitios web y aplicaciones</b>, nos ayudan a identificar los problemas y a ofrecer soluciones a todos los problemas que puedas encontrar.
            </Text>
          </div>

          <div className="flex direction-row justify-start items-center content-center gap-2 ml-2">
            <Price className=" text-3xl" bold>
              Contacta con nosotros y te haremos un presupuesto a medida.
            </Price>
          </div>
        </div>
        <section className="mt-10 w-full p-4 bg-palette-1 dark:bg-palette-800 text-palette-11 dark:text-palette-50 shadow-md shadow-palette-11 dark:shadow-palette-50 grid grid-cols-1 md:grid-cols-2 rounded-lg">
          <div>
            <SectionTitle bold left>
              Quieres saber si tu web es accesible?
            </SectionTitle>
            <Text left full>
              Contacta con nosotros para que realizemos un estudio de tu pagina web y te ayudamos a entender si es accesible o no y soluciones para mejorarla.
            </Text>
          </div>
          <div className="flex flex-col content-center justify-center items-center">
            <Link
              href="https://forms.gle/SMGw7zuUbR1LcDLZ6"
            >
              Contacta con nosotros
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}