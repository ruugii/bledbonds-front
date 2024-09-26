'use client'

import Button from "@/app/UX/button/button";
import Imput from "@/app/UX/imput/imput"
import newsletterAPI from "@/app/api/newsletter";
import useStyle from "@/app/utilities/style";
import { useEffect, useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [style, setStyle] = useStyle(); // Uso del hook personalizado

  useEffect(() => {
    if (email.includes('@') && email.includes('.')) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email])
  return (
    <>
      <div className="flex flex-row content-center justify-center items-center mb-4">
        <Imput
          label="Email"
          value={email}
          onChange={setEmail}
          isValueValid={emailValid}
          type="email"
          divClassName='w-full mt-3'
          mui
        />
      </div>
      <div className="flex flex-row content-center justify-center items-center w-full">
        <Button
          label="Register"
          onClick={() => {
            const register = async () => {
              const user = {
                email,
              };
              await newsletterAPI(user);
            };
            register();
          }}
          className="w-full bg-palette-6 border-palette-6"
        />
      </div>
    </>
  )
}