import Link from "@/app/UX/Link";
import SectionTitle from "../Text/SectionTitle";

const BentoCard = ({ children, className = "", row = 1, col = 1 }: { children: React.ReactNode, className?: string, row?: number, col?: number }) => (
  <div className={`p-2 bg-palette-50 dark:bg-palette-900 text-black flex flex-col justify-center items-center rounded-xl ${className}`}>
    <SectionTitle>{children}</SectionTitle>
  </div>
);

export default function Bento() {
  return (
    <div className="w-full h-full grid gap-2 p-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BentoCard className="col-span-1 lg:col-span-2">
        Busca a tu pareja ideal
      </BentoCard>
      <BentoCard className="row-span-1 lg:row-span-3">
        Participa de los eventos de la comunidad
      </BentoCard>
      <BentoCard>
        Conoce a otras personas con discapacidad
      </BentoCard>
      <BentoCard>
        Encuentra a el amor de tu vida
      </BentoCard>
      <BentoCard>
        Encuentra a amigos con tus mismas aficiones
      </BentoCard>
      <BentoCard>
        Ten ideas de cómo empezar una conversación con esa persona
      </BentoCard>
      <BentoCard className="lg:row-span-3">
        Ayudamos a eventos a que sean inclusivos, para personas con discapacidad
      </BentoCard>
      <BentoCard className="lg:col-span-2">
        Organizamos el viaje de tu vida, teniendo en cuenta tus necesidades
      </BentoCard>
      <BentoCard className="md:col-span-1">
        Accede a eventos exclusivos para personas de la comunidad de BledBonds
      </BentoCard>
      <BentoCard>
        Entra a nuestra newsletter para recibir actualizaciones sobre nuestros eventos
      </BentoCard>
      <BentoCard>
        Entra y conoce a gente nueva con tus mismas aficiones
      </BentoCard>
      <BentoCard>
        Ven a pasar tu tiempo con personas parecidas a ti
      </BentoCard>
      <BentoCard className="lg:col-span-3 md:col-span-2 col-span-1">
        Te facilitamos todo lo necesario en la vida de una persona con discapacidad
      </BentoCard>
    </div>
  );
}