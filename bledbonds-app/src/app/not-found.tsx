import { Button } from "@mui/material";
import Subtitle from "./components/Text/Subtitle";
import Title from "./components/Text/Title";
import Text from "./components/Text/Text";

export default function NotFoundPage() {
  return (
    <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center text-center p-4'>
      <div className="md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Title bold mayus center>
            Vaya, parece que este usuario no existe
          </Title>
          <Subtitle center bold>
            Parece que has acabado en una pagina que no existe, por favor, vuelve a la pagina principal
          </Subtitle>
          <div className="mt-6">
            <Button href="/" variant="contained" className={`w-full bg-palette-500 hover:bg-palette-600 active:bg-palette-700 disabled:bg-palette-100 dark:disabled:bg-palette-950 text-palette-950 disabled:text-palette-400 dark:disabled:text-palette-700 border-solid border-2 border-palette-500 hover:border-palette-600 active:border-palette-700 disabled:border-palette-100 dark:disabled:border-palette-900 p-2`}>
              <p className=" text-palette-11 dark:text-palette-1">
                Ir a la pagina principal
              </p>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}