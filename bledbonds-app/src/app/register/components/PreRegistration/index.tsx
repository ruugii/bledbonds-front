'use client'
import Imput from "@/app/UX/imput/imput";
import { useEffect, useState } from "react";

export default function PreRegistration() {
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)

    useEffect(() => {
        setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    }, [email])

    return (
        <div className="min-w-[80vh] grid grid-cols-2 gap-2">
            <div className="flex flex-col justify-center items-center">
                <fieldset>aaa</fieldset>
                <Imput
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    isValueValid={emailValid}
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                
            </div>
        </div>
    )
}