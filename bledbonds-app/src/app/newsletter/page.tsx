import { Metadata } from "next";
import EmailInput from "../components/EmailInput";
import SectionTitle from "../components/Text/SectionTitle";

export const metadata: Metadata = {
  title: "Suscribete a nuestra newsletter - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad y suscribirte a nuestra newsletter para estar informado de todas nuestras novedades",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad",
};

export default function Page() {
  return (
    <main className='bg-palette-3 dark:bg-palette-11 flex flex-col content-center justify-center items-center'>
      <div className="flex items-center justify-center">
        <div className="p-8 h-[80%] w-[80%]">
          <div className="text-center h-full">
            <div className="flex flex-row h-[90%] content-center items-center justify-center">
              <div className="flex flex-col w-full">
                <div className="flex flex-row content-center justify-center items-center">
                  <SectionTitle bold width>
                    REGISTRATE A LA NEWSLETTER DE BLEDBONDS Y VAS A ESTAR INFORMADO DE TODAS NUESTRAS NOVEDADES
                  </SectionTitle>
                </div>
                <EmailInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}