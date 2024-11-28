import { Metadata } from "next";
import Title from "./components/Text/Title";
import Subtitle from "./components/Text/Subtitle";
import SectionTitle from "./components/Text/SectionTitle";
import Bento from "./components/Bento";

export const metadata: Metadata = {
  title: "BledBonds - Citas para personas con discapacidad - pagina principal",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad",
};

export default function Home() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center text-center p-4'>
      <Title bold>
        BIENVENIDO A BLEDBONDS
      </Title>
      <Subtitle bold>
        LA PRIMERA RED SOCIAL PARA PERSONAS CON DISCAPACIDAD
      </Subtitle>
      <SectionTitle bold margin>
        PROXIMAMENTE...
      </SectionTitle>
      {/* <Bento /> */}
    </main>
  );
}
