'use client'

import deleteNewsletter from "@/app/api/deleteNewsletter";
import { Metadata } from "next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
    title: "Bled Bonds - Citas para personas con discapacidad - eliminar de nuestra newsletter",
    description: "Bled Bonds es la primera red social para conocer a personas con discapacidad, elimina tu email de nuestra newsletter para no recibir mas correos de nosotros",
    keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad",
  };


export default function Page() {
    const { id } = useParams<{ id: string }>();
    const [deleted, setDeleted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]);
    const Delfunc = async (id: string) => {
        console.log(`Deleting newsletter with id ${id}`);
        const aux = await deleteNewsletter({token: id});
        console.log(aux);
        if (aux) {
            console.log(aux);
            if (aux.codeResponse === '1001') {
                setDeleted(false);
                setErrorMessage([...errorMessage, 'EL EMAIL QUE HA INTENTADO ELIMINAR NO EXISTE EN LA BASE DE DATOS, PORFAVOR, INTENTELO DE NUEVO CON UN EMAIL VALIDO']);
            } else {
                setDeleted(true);
            }
        }
    }
    useEffect(() => {
        Delfunc(id);
    }, [])

    useEffect(() => {
        console.log(errorMessage);
    }, [errorMessage])
    return (
        <div>
            {deleted ? (
                <main className='bg-palette-3 h-screen max-w-screen flex flex-col content-center justify-center items-start text-justify p-4'>
                    <h1 className='text-4xl font-bold text-palette-11 mt-3'>El email se ha eliminado correctamente</h1>
                </main>
            ) : (
                <main className='bg-palette-3 h-screen max-w-screen flex flex-col content-center justify-center items-start text-justify p-4'>
                <h1 className='text-4xl font-bold text-palette-11 mt-3'>Ha habido algun problema y no se ha podido eliminar, porfavor, vuelva a intentarlo</h1>
                <h2 className="text-2xl font-bold text-palette-11 mt-3">Error:</h2>
                <ul className="font-bold text-palette-11 mt-3">
                    {errorMessage.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </main>
            )
            }
        </div>
    );
}