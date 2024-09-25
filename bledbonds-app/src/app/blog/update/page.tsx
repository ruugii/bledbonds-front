import DeleteFormComponent from "@/app/components/DeleteFormComponent";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import Link from "next/link";

export default function Delete() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          Como actualizar mi cuenta
        </Title>
        <Subtitle bold left width className="mt-4">
          Actualizar mi cuenta en BledBonds
        </Subtitle>
        <Text className="mt-4">
          Para actualizar tu perfil de BledBonds:
        </Text>
        <Text className="mt-4">
          1- Abre la app de BledBonds
        </Text>
        <Text>
          2- Toca el icono de configuración del menu superior a la derecha
        </Text>
        <Text>
          3. Pulsa la opcion de <b>perfil</b>
        </Text>
        <Text className="mt-4">
          Desde aquí, puedes editar la siguiente información:
        </Text>
        <ul className={`text-palette-11 dark:text-palette-50 text-left mb-4 text-justify w-full text-lg list-disc ml-5`}>
          <li>Tu estado actual</li>
          <li>Tu orientacion sexual</li>
          <li>Si bebes</li>
          <li>Idiomas</li>
          <li>Signo del zodiaco</li>
          <li>Mascotas</li>
          <li>Religion</li>
          <li>Estudios</li>
          <li>Lo que buscas</li>
          <li>Bio</li>
          <li>Trabajo</li>
          <li>Fotos</li>
        </ul>
        <Subtitle bold left width className="mt-4">
          Ten en cuenta lo siguiente:
        </Subtitle>
        <ul className={`text-palette-11 dark:text-palette-50 text-left mb-4 text-justify w-full text-lg list-disc ml-5`}>
          <li>
          Tu nombre y edad son la única información de tu perfil que no puedes editar. Si necesitas hacer algún cambio, tienes la opción de <Link className="underline hover:text-palette-900 dark:hover:text-palette-100" href={'/blog/delete'}>eliminar tu cuenta</Link> y crear una nueva. 
          </li>
          <li>
          Algunas opciones de información en el perfil pueden variar dependiendo de la ubicación.
          </li>
        </ul>
      </div>
    </div>
  )
}
