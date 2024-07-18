import Question from "../components/Question";
import Subtitle from "../components/Text/Subtitle";
import Text from "../components/Text/Text";
import Title from "../components/Text/Title";

export default function FaqPage() {

  return (
    <main className='bg-palette-3 min-h-screen h-full flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus>
            PREgunTAS FRECUENTES
          </Title>
          <section className="w-full mt-7">
            <Subtitle bold mayus left className="md:ml-5">
              Web
            </Subtitle>
            <Question question="¿Qué tienes que hacer para pertenecer a Bled Bonds?">
              <Text left full>
                Para pertanecer a Bled Bonds, a parte de ser mayor de 18, solo tienes que cumplir uno de los siguientes requisitos:
              </Text>
              <ul className="list-disc list-inside">
                <li className="w-full text-palette-11 text-left">Ser miembro de una entidad relacionada con la discapacidad</li>
                <li className="w-full text-palette-11 text-left">Tener una discapacidad</li>
              </ul>
            </Question>
            <Question question="¿En cuántos idiomas están disponibles la aplicación y la página web?">
              <Text left full>
                La aplicación y la página web actualmente están disponibles en español. En un futuro, se añadirán más idiomas.
              </Text>
            </Question>
          </section>
          <section className="w-full mt-7">
          <Subtitle bold mayus left className="md:ml-5">
              APP - BLED BONDS
            </Subtitle>
            <Question question="¿Qué es Bled Bonds?">
              <Text>
                Bled Bonds es una aplicación que tiene el objetivo de poner en contacto a personas con discapacidad.
              </Text>
              <Text>
                Esta aplicación quiere facilitar la creación de vínculos de amistad y/o amorosas entre personas con discapacidad.
              </Text>
              <Text>
                Bled Bonds consta de un apartado de citas y uno de planes grupales.
              </Text>
            </Question>
            <Question question="¿Es una aplicación de pago?">
              <Text left full>
                No.
              </Text>
              <Text left full>
                Bled Bonds es una aplicación gratuita, tanto para Android como para iOS.
              </Text>
              <Text left full>
                Tiene compras dentro de la aplicacion, para poder acceder a ciertas funcionalidades sin limitaciones. Estas funcionalidades son:
              </Text>
              <ul className="list-disc list-inside">
                <li className="w-full text-palette-11 text-left">Ver quien te ha dado like</li>
                <li className="w-full text-palette-11 text-left">Ver quien ha visitado tu perfil</li>
                <li className="w-full text-palette-11 text-left">Dar mas de 20 likes al dia</li>
                <li className="w-full text-palette-11 text-left">Tener 1 rompehielos al dia</li>
              </ul>
            </Question>
            <Question question="Que es un rompehielos?">
              <Text left full>
                Un rompehielos es una funcionalidad que te permite enviar un solo mensaje a una persona que te ha gustado, sin necesidad de que la otra persona te haya dado like. En caso de que la otra persona decida responder a tu mensaje, se creara un match y podreis hablar por el chat de la aplicacion.
              </Text>
            </Question>
            <Question question="¿Puedo encontrar pareja en Bled Bonds?">
              <Text left full>
                Sí.
              </Text>
              <Text left full>
                Bled Bonds es una plataforma para establecer relaciones amistosas y amorosas con personas que compartan intereses y aficiones. No dudes en descargarte la aplicación y comprobarlo tú mismo/a.
              </Text>
            </Question>
            <Question question="¿Bled Bonds solo sirve para encontrar pareja?">
              <Text left full>
                No.
              </Text>
              <Text left full>
                Bled Bonds te ofrece 2 posibilidades:
              </Text>
              <ul className="list-disc list-inside">
                <li className="w-full text-palette-11 text-left">Las citas</li>
                <li className="w-full text-palette-11 text-left">Los planes grupales</li>
              </ul>
              <Text left full>
                Puedes usar cualquiera de las dos opciones o ambas, según tus preferencias.
              </Text>
            </Question>
            <Question question="¿Si no pertenezco a una entidad social, me puedo registrar?">
              <Text left full>
                Si, no es necesario pertenecer a una entidad social para registrarse en Bled Bonds. Solo tienes que cumplir uno de los siguientes requisitos:
                <ul className="list-disc list-inside">
                  <li className="w-full text-palette-11 text-left">Ser miembro de una entidad relacionada con la discapacidad</li>
                  <li className="w-full text-palette-11 text-left">Tener una discapacidad</li>
                </ul>
              </Text>
            </Question>
          </section>
          <section className="w-full mt-7">
          <Subtitle bold mayus left className="md:ml-5">
              APP - MI PERFIL - BLED BONDS
            </Subtitle>
            <Question question="¿Qué tipo de fotos tengo que poner en mi perfil?">
              <Text>
                Tienes que añadir fotografías tuyas. Es importante que las fotografías no salgan borrosas y expresen muy bien como eres y que quieres mostrar a las demás personas.
              </Text>
            </Question>
            <Question question="¿Puedo quitar mi localización?">
              <Text left full>
                No.
              </Text>
              <Text left full>
                Mientras estés utilizando la aplicación no puedes desactivar la localización.
              </Text>
            </Question>
            <Question question="¿Cómo accedemos a los ajustes?">
              <Text left full>
                A los ajustes accedemos a través de nuestro perfil, apretando el boton de la rueda dentada situada arriba a la derecha de la pantalla.
              </Text>
            </Question>
            <Question question="¿Qué encontramos en los ajustes?">
              <Text left full>
                En los ajustes encontramos:
              </Text>
              <ul className="list-disc list-inside">
                <li className="w-full text-palette-11 text-left">Tu localización</li>
                <li className="w-full text-palette-11 text-left">El idioma</li>
                <li className="w-full text-palette-11 text-left">Cambiar contraseña</li>
                <li className="w-full text-palette-11 text-left">Boton de ayuda</li>
                <li className="w-full text-palette-11 text-left">Las preguntas y respuestas mas frecuentes (FAQS)</li>
                <li className="w-full text-palette-11 text-left">Como cerrar tu cuenta</li>
              </ul>
            </Question>
            <Question question="¿Qué tendría que explicar en mi biografía?">
              <Text left full>
                Mi biografía es un espacio dentro de mi perfil donde puedes explicar cualquier aspecto de tu vida que quieras compartir con las otras personas, siempre respetando las normas de Bled Bonds.
              </Text>
            </Question>
            <Question question="¿Puedo cerrar mi cuenta?">
              <Text left full>
                Si
              </Text>
            </Question>
          </section>
          <section className="w-full mt-7">
          <Subtitle bold mayus left className="md:ml-5">
              APP - PLANES - BLED BONDS
            </Subtitle>
            <Question question="¿Qué ocurre si me quedo sin plaza para un plan?">
              <Text left full>
                Puedes apuntarte y tu nombre aparecerá en lista de espera. Si hubiera alguna cancelación con más de 48 horas de antelación, dependiendo del orden de lista de espera, se te adjudicaría la plaza.
              </Text>
              <Text left full>
                Si no queda ninguna plaza libre, se te adjudicaría una plaza para el mismo plan el siguiente día hábil el cual se vaya a realizar.
              </Text>
            </Question>
            <Question question="¿Cuando se eliminan los chats grupales de los planes?">
              <Text left full>
                Los chats grupales de los planes se eliminan 24 horas después de la finalización del plan.
              </Text>
            </Question>
            <Question question="¿Puedo denunciar a un participante del grupo del plan?">
              <Text left full>
                En el &quotchat del plan&quot hay un dinamizador que gestiona el grupo y toma las medidas necesarias para solucionar los posibles conflictos que puedan suceder.
              </Text>
            </Question>
            <Question question="¿Quién será el responsable de supervisar el plan?">
              <Text left full>
                El plan tendrá un dinamizador cualificado y seleccionado previamente, que se encargará de:
              </Text>
              <ul className="list-disc list-inside">
                <li className="w-full text-palette-11 text-left">Resolver las dudas necesarias</li>
                <li className="w-full text-palette-11 text-left">Acompañar a los usuarios durante la actividad</li>
                <li className="w-full text-palette-11 text-left">Solucionar los posibles problemas que puedan aparecer</li>
              </ul>
            </Question>
            <Question question="¿Todos los planes tienen el mismo coste?">
              <Text left full>
                Cada plan o actividad tendrá un coste diferente, así como también habrá actividades gratuitas.
              </Text>
            </Question>
          </section>
          <section className="w-full mt-7">
          <Subtitle bold mayus left className="md:ml-5">
              APP - CITAS - BLED BONDS
            </Subtitle>
            <Question question="¿Cuándo conectas con otra persona en Dinder Club?">
              <Text full left>
                Te conectas con otra persona cuando tú y esta persona os ponéis &quotme gusta&quot la una a la otra.
              </Text>
            </Question>
            <Question question="¿Cómo puedo proponer una cita a la otra persona usuaria con quien chateo?">
              <Text left full>
                Cuando cada persona  haya enviado 20 mensajes, se activará el botón &quotPedir cita&quot en la conversación del chat para que les puedas enviar la petición de cita, indicando día, hora y lugar.
              </Text>
            </Question>
            <Question question="¿Puedo enviar fotografías por el chat con mis conexiones?">
              <Text left full>
                No
              </Text>
              <Text left full>
                El chat de Bled Bonds no permite enviar fotografías.
              </Text>
            </Question>
          </section>
        </div>
      </div>
    </main>
  )
}