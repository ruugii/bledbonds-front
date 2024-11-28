import DeleteFormComponent from "@/app/components/DeleteFormComponent";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { Metadata } from "next";
import SectionTitle from "../../components/Text/SectionTitle";
import Link from "next/link";
import NextEvents from "../../components/NextEvents";

export const metadata: Metadata = {
  title: "Ultimos eventos realizados por BledBonds - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad, como actualizar tu cuenta y conoce a personas con discapacidad cerca de ti.",
  keywords: "discapacidad, citas, red social, bledbonds, citas para personas con discapacidad, bledbonds citas, bledbonds red social, bledbonds discapacidad, bledbonds discapacidad citas, bledbonds discapacidad red social, bledbonds personas con discapacidad, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas discapacidad, bledbonds personas discapacidad citas, bledbonds personas discapacidad red social, bledbonds personas con discapacidad citas, bledbonds personas con discapacidad red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social, bledbonds personas con discapacidad red social citas, bledbonds personas con discapacidad citas red social",
};

export default function BetaPage() {
  return (
    <div className="items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4 mx-auto">
        <Title bold width>
          Ultimos eventos realizados por BledBonds
        </Title>
        <Subtitle bold left width className="mt-4">
          Descubre cuales son los ultimos eventos organizados por BledBonds
        </Subtitle>
        <NextEvents
          prev
        />
      </div>
    </div>
  )
}
