import { Metadata } from "next";
import EmailInput from "../components/EmailInput";
import BlogPreview from "../components/BlogPreview";
import SectionTitle from "../components/Text/SectionTitle";
import Title from "../components/Text/Title";

export const metadata: Metadata = {
  title: "Blog de BledBonds - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad y suscribirte a nuestra newsletter para estar informado de todas nuestras novedades",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad",
};

export default function Page() {

  return (
    <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center'>
      <div className="flex items-center justify-center">
        <div className="p-8">
          <div className="text-center h-full">
            <div className="flex flex-row content-center items-center justify-center">
              <div className="flex flex-col w-full">
                <div className="flex flex-row content-center justify-center items-center">
                  <Title bold>
                    El blog de BledBonds
                  </Title>
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