import { Metadata } from "next";
import EmailInput from "../components/EmailInput";
import BlogPreview from "../components/BlogPreview";

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad - Blog",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad y suscribirte a nuestra newsletter para estar informado de todas nuestras novedades",
  keywords: "discapacidad, citas, red social, bled bonds, citas para personas con discapacidad, bled bonds citas, bled bonds red social, bled bonds discapacidad",
};

export default function Page() {

  return (
    <main className='bg-palette-3 flex flex-col content-center justify-center items-center min-h-screen'>
      <div className="flex items-center justify-center">
        <div className="p-8">
          <div className="text-center h-full">
            <div className="flex flex-row content-center items-center justify-center">
              <div className="flex flex-col w-full">
                <div className="flex flex-row content-center justify-center items-center">
                  <h3 className="text-2xl font-bold text-palette-11">
                    El blog de BledBonds
                  </h3>
                </div>
                <BlogPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}