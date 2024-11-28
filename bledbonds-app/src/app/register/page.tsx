import { Metadata } from "next";
import PreRegistration from "./components/PreRegistration";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";

export const metadata: Metadata = {
  title: "Registrate - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, regístrate y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social",
};

export default function RegisterPage() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <Title bold width grid center>
        BLEDBONDS - REGISTRO
      </Title>
      <Subtitle margin bold width grid center>
        Porfavor llena el siguiente formulario para poder registrarte
      </Subtitle>
      <PreRegistration />
    </div>
  )
}