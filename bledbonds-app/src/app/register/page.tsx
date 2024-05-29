import PreRegistration from "./components/PreRegistration";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
            <h1 className="text-4xl font-bold text-palette-11 mt-3 text-center">
                BLEDBONDS PRE-REGISTRATION FORM
            </h1>
            <PreRegistration />
        </div>
    )
}