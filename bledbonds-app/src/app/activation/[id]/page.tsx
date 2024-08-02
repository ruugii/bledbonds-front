'use client'

import activateUser from "@/app/api/activateUser";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const activate = async () => {
    await activateUser(`${id}`);
  }

  activate();

  return (
    <div className="flex content-center justify-center items-center bg-palette-3 dark:bg-palette-950 text-palette-11">
      <div className="text-center">
        <Title bold>
          TU CUENTA EN BLEDBONDS SE HA ACTIVADO CORRECTAMENTE
        </Title>
        <Text full>
          Ya puedes iniciar sesión en la plataforma para completar tu perfil
        </Text>
      </div>
    </div>
  )
}