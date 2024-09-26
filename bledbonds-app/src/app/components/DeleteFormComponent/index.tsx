'use client'

import emailValidation from "@/app/utilities/validation/emailValidation"
import Input from "@/app/UX/imput/imput"
import { useEffect, useState } from "react"
import Subtitle from "../Text/Subtitle"
import phoneValidation from "@/app/utilities/validation/phoneValidation"
import Button from "@/app/UX/button/button"
import deleteUserAPI from "@/app/api/delete/deleteUserAPI"

export default function DeleteFormComponent() {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)

  useEffect(() => {
    const validator = setTimeout(() => {
      setEmailError(emailValidation(email))
    }, 500)
    return () => clearTimeout(validator)
  }, [email])

  useEffect(() => {
    const validator = setTimeout(() => {
      setPhoneError(phoneValidation(phone))
    }, 500)
    return () => clearTimeout(validator)
  }, [phone])

  const handleDelete = () => {
    setCount(count + 1);
    const deleteUser = async () => {
      const user = {
        email,
        phone
      }
      const resp = await deleteUserAPI(user)
      if (resp) {
        window.location.href = '/'
      }
    }
    if (count === 1) {
      deleteUser()
    }
  }

  const [count, setCount] = useState(0);

  return (
    <div className=" border-solid border-palette-11 dark:border-palette-50 border-2 p-5 mt-8 ">
      <Subtitle bold left width mayus className="mt-4">
        formulario para eliminar mi cuenta
      </Subtitle>
      <form>
        <div className="mb-3 mt-3">
          <Input
            label="CORREO ELECTRÓNICO DEL USUARIO"
            value={email}
            onChange={setEmail}
            isValueValid={emailError}
            divClassName='w-full'
            id="email"
            mui
          />
        </div>
        <div className="mb-3 mt-3">
          <Input
            label="TELÉFONO DEL USUARIO"
            value={phone}
            onChange={setPhone}
            isValueValid={phoneError}
            divClassName='w-full'
            mui
            id="phone"
          />
        </div>
        <div className="mb-3 mt-3">
          <Button
            label="Eliminar"
            onClick={() => {
              console.log('aaa');
              handleDelete()
            }}
            className="w-full"
            mui
          />
        </div>
      </form>
    </div>
  )
}