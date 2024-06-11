import { Metadata } from "next";
import LoginComponent from "./components/LoginComponent";

export const metadata: Metadata = {
    title: "Bled Bonds - Citas para personas con discapacidad - Acceso",
    description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, inicia sesión y conoce a personas con discapacidad cerca de ti.",
    keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
  };

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
            <h1 className="text-4xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
                BLEDBONDS - ACCESO
            </h1>
            <h2 className="text-3xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
                Inicia sesión con tu email o número de teléfono
            </h2>
            <LoginComponent />
        </div>
    )
}