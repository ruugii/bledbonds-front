import DeleteFormComponent from "@/app/components/DeleteFormComponent";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { Metadata } from "next";
import Link from "next/link";
import BetaForm from "../components/BetaForm";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - Acceder a la fase de prueva",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, como actualizar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad, bled bonds discapacidad citas, bled bonds discapacidad red social, bled bonds personas con discapacidad, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas discapacidad, bled bonds personas discapacidad citas, bled bonds personas discapacidad red social, bled bonds personas con discapacidad citas, bled bonds personas con discapacidad red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social, bled bonds personas con discapacidad red social citas, bled bonds personas con discapacidad citas red social",
};

export default function BetaPage() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          ACCEDE A LA FASE DE PRUEBA
        </Title>
        <Subtitle bold left width>
          Accede a la fase de prueba para poder probar nuestra aplicacion antes de que nadie y asi nos ayudas a mejorar nuestra aplicacion.
        </Subtitle>
        <Text className="mt-4">
          Para acceder a la fase de prueba, debes completar el siguiente formulario que recibira nuestro equipo de soporte. Una vez que recibas tu correo, te contactaremos con un enlace para que puedas acceder a la fase de prueba. El email sera mandado en un maxmo de 5 dias.
        </Text>
        <BetaForm />
      </div>
    </div>
  )
}
