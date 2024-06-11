'use client'

import activateUser from "@/app/api/activateUser";
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams();
    const activate = async () => {
        await activateUser(`${id}`);
    }

    activate();

    return (
        <div className="h-screen flex content-center justify-center items-center bg-palette-3 text-palette-11">
            <div className="text-center">
                <h1 className="text-2xl font-bold">TU CUENTA EN BLEDBONDS SE HA ACTIVADO CORRECTAMENTE</h1>
                <p className="text-lg">Ya puedes iniciar sesión en la plataforma para completar tu perfil</p>
            </div>
        </div>
    )
}