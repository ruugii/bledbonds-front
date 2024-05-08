import Newsletter from "./components/Newsletter";
import RegisterModal from "./components/RegisterModal";

export default function Home() {
  return (
    <main className='bg-palette-3 h-screen w-screen flex flex-col content-center justify-center items-center'>
      <h1 className='text-4xl font-bold text-palette-11 mt-3'>BIENVENIDO A BLED BONDS</h1>
      <h2 className="text-2xl font-bold text-palette-11 mt-3">LA PRIMERA RED SOCIAL PARA PERSONAS CON DISCAPACIDAD</h2>
      <h3 className="text-xl font-bold text-palette-11 mt-3">PROXIMAMENTE...</h3>
      <Newsletter />
      {/* <RegisterModal /> */}
    </main>
  );
}
