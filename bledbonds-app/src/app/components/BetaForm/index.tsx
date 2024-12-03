'use client'

import emailValidation from "@/app/utilities/validation/emailValidation"
import Input from "@/app/UX/imput/imput"
import { useEffect, useState } from "react"
import Subtitle from "../Text/Subtitle"
import phoneValidation from "@/app/utilities/validation/phoneValidation"
import Button from "@/app/UX/button/button"
import deleteUserAPI from "@/app/api/delete/deleteUserAPI"
import accesBetaAPI from "@/app/api/beta/accesBetaAPI"

export default function BetaForm() {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    const validator = setTimeout(() => {
      setEmailError(emailValidation(email))
    }, 500)
    return () => clearTimeout(validator)
  }, [email])

  const handleAccesBeta = async () => {
    const response = await accesBetaAPI(email)
    .then(res => {
      setEmail('')
    })
    .catch(err => {
      console.log(err)
    })
    console.log(response)
  }

  return (
    <div className=" border-solid border-palette-11 dark:border-palette-50 border-2 p-5 mt-8 ">
      <Subtitle bold left width mayus className="mt-4">
        formulario para acceder a la fase de prueba
      </Subtitle>
      <form>
        <div className="mb-3 mt-3">
          <Input
            label="CORREO ELECTRÓNICO"
            value={email}
            onChange={setEmail}
            isValueValid={emailError}
            divClassName='w-full'
            id="email"
            mui
          />
        </div>
        <div className="mb-3 mt-3">
          <Button
            label="Eliminar"
            onClick={() => {
              console.log('aaa');
              handleAccesBeta()
            }}
            className="w-full"
            mui
          />
        </div>
      </form>
    </div>
  )
}