import LoginComponent from "./components/LoginComponent";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
            <h1 className="text-4xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
                BLEDBONDS - ACCESO
            </h1>
            <h2 className="text-3xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
                Inicia sesión con tu email o número de teléfono
            </h2>
            <LoginComponent />
        </div>
    )
}