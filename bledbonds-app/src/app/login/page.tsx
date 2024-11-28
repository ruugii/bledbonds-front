import { Metadata } from "next";
import LoginComponent from "./components/LoginComponent";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";

export const metadata: Metadata = {
  title: "BledBonds - Citas para personas con discapacidad - Acceso",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, inicia sesión y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social",
};

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <header className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] text-left md:text-center">
        <Title bold>
          BLEDBONDS - ACCESO
        </Title>
        <Subtitle margin bold>
          Inicia sesión con tu email o número de teléfono
        </Subtitle>
      </header>
      <main className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%]">
        <LoginComponent />
      </main>
    </div>
  );
}
