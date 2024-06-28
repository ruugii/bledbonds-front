import { Metadata } from "next";
import PreRegistration from "./components/PreRegistration";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";

export const metadata: Metadata = {
    title: "Bled Bonds - Citas para personas con discapacidad - Registrate",
    description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, regístrate y conoce a personas con discapacidad cerca de ti.",
    keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
  };

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
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