import DeleteFormComponent from "@/app/components/DeleteFormComponent";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";

export default function Delete() {
  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4">
        <Title bold width>
          Como eliminar mi cuenta de BledBonds
        </Title>
        <Subtitle bold left width className="mt-4">
          Eliminar mi cuenta en Bled
        </Subtitle>
        <Text className="mt-4">
          Sentimos que hayas tenido una mala experiencia y que desees eliminar tu cuenta, desde BledBonds, nuestra prioridad siempre sereis vosotros, por esta razon, a diferencia de otras plataformas, te lo vamos a poner muy facil para que puedas eliminar tu cuenta.
        </Text>
        <Text className="mt-4">
          Para eliminar tu cuenta, debes completar el siguiente formulario que recibira nuestro equipo de soporte. Una vez que recibas tu correo, te contactaremos con un enlace para que puedas eliminar tu cuenta. El email sera mandado en un maxmo de 5 dias.
        </Text>
        <Text className="mt-4">
          <b>ATENCION: </b> Cuando elimines tu cuenta, perderás permanentemente tus matches, tus mensajes y cualquier otra información asociada a ti.
        </Text>

        <DeleteFormComponent />
      </div>
    </div>
  )
}
