'use client'

import Button from "@/app/UX/button/button";
import Imput from "@/app/UX/imput/imput"
import newsletterAPI from "@/app/api/newsletter";
import { useEffect, useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  useEffect(() => {
    if (email.includes('@') && email.includes('.')) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email])
  return (
    <>
      <div className="flex flex-row content-center justify-center items-center">
        <Imput
          label="Email"
          value={email}
          onChange={setEmail}
          isValueValid={emailValid}
          type="email"
          divClassName='w-[80%]'
        />
      </div>
      <div className="flex flex-row content-center justify-center items-center">
        <Button
          label="Register"
          onClick={() => {
            const register = async () => {
              const user = {
                email,
              };
              console.log(user);
              await newsletterAPI(user);
            };
            register();
          }}
          className="w-[80%] bg-palette-6 border-palette-6"
        />
      </div>
    </>
  )
}