import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - pagina principal",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad",
};

export default function Home() {
  return (
    <main className='bg-palette-3 h-screen max-w-screen flex flex-col content-center justify-center items-center text-center p-4'>
      <h1 className='text-4xl font-bold text-palette-11 mt-3'>BIENVENIDO A BLED BONDS</h1>
      <h2 className="text-2xl font-bold text-palette-11 mt-3">LA PRIMERA RED SOCIAL PARA PERSONAS CON DISCAPACIDAD</h2>
      <h3 className="text-xl font-bold text-palette-11 mt-3">PROXIMAMENTE...</h3>
    </main>
  );
}
