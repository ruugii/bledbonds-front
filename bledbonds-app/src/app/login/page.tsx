import { Metadata } from "next";
import LoginComponent from "./components/LoginComponent";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - Acceso",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, inicia sesión y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-palette-3 flex-col">
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
