import { Metadata } from "next";
import Title from "./components/Text/Title";
import Subtitle from "./components/Text/Subtitle";
import SectionTitle from "./components/Text/SectionTitle";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - pagina principal",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad",
};

export default function Home() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 h-screen max-w-screen flex flex-col content-center justify-center items-center text-center p-4'>
      <Title bold>
        BIENVENIDO A BLED BONDS
      </Title>
      <Subtitle bold>
        LA PRIMERA RED SOCIAL PARA PERSONAS CON DISCAPACIDAD
      </Subtitle>
      <SectionTitle bold margin>
        PROXIMAMENTE...
      </SectionTitle>
    </main>
  );
}
