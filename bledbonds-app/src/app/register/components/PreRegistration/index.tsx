'use client'
import Check from "@/app/Icons/check";
import Close from "@/app/Icons/close";
import EyeOpen from "@/app/Icons/eyeOpen";
import EyeClose from "@/app/Icons/eyeClose";
import Imput from "@/app/UX/imput/imput";
import getGenderAPI from "@/app/api/getGenders";
import { useEffect, useState } from "react";
import Select from 'react-select';
import InputPassword from "@/app/UX/InputPassword";
import { stat } from "fs";
import Button from "@/app/UX/button/button";
import registerAPI from "@/app/api/register";
import { redirect } from "next/dist/server/api-utils";
import SectionTitle from "@/app/components/Text/SectionTitle";

export default function PreRegistration() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [birthDateValid, setBirthDateValid] = useState(false);
  const [genderList, setGenderList] = useState<{ value: string, label: string }[]>([]);
  const [genderListIsLoading, setGenderListIsLoading] = useState(true);
  const [gender, setGender] = useState('');
  const [genderValid, setGenderValid] = useState(false);
  const [hasMayus, setHasMayus] = useState(false);
  const [hasMinus, setHasMinus] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [moreThan8, setMoreThan8] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);
  const [minPasswordLength] = useState(8);
  const [maxPasswordLength] = useState(12);

  const PasswordValidator = (passwordA: string) => {
    setHasMayus(/[A-Z]/.exec(passwordA) !== null);
    setHasMinus(/[a-z]/.exec(passwordA) !== null);
    setHasNumber(/[\d]/.exec(passwordA) !== null);
    setHasSpecial(/[!@#$%^&*-]/.exec(passwordA) !== null);
    setMoreThan8(passwordA.length >= minPasswordLength && passwordA.length <= maxPasswordLength);
    setPasswordValid(
      /[A-Z]/.test(passwordA) &&
      /[a-z]/.test(passwordA) &&
      /[0-9]/.test(passwordA) &&
      /[!@#$%^&*-]/.test(passwordA) &&
      passwordA.length > minPasswordLength &&
      passwordA.length < maxPasswordLength
    );
  }

  useEffect(() => {
    const validator = setTimeout(() => {
      PasswordValidator(password);
    }, 500);
    return () => clearTimeout(validator);
  }, [password]);

  useEffect(() => {
    const validator = setTimeout(() => {
      setPasswordConfirmValid(password === passwordConfirm && passwordValid);
    }, 500);
    return () => clearTimeout(validator);
  }, [passwordConfirm]);

  useEffect(() => {
    const getGenderaAPI = async () => {
      const list = await getGenderAPI();
      const aux = [];
      for (const item of list) {
        aux.push({ value: item.genre_name.toUpperCase(), label: item.genre_name.toUpperCase() });
      }
      setGenderList(aux);
      setGenderListIsLoading(false);
    };
    getGenderaAPI();
  }, []);

  useEffect(() => {
    const validator = setTimeout(() => {
      setNameValid(name.length > 0);
    }, 500);
    return () => clearTimeout(validator);
  }, [name]);

  useEffect(() => {
    const aux = setTimeout(() => {
      let date = new Date(birthDate)
      let now = new Date()
      let age = now.getFullYear() - date.getFullYear()
      if (now.getMonth() < date.getMonth() || (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())) {
        age--
      }
      setBirthDateValid(age > 18)
    }, 500)
    return () => clearTimeout(aux)
  }, [birthDate])

  useEffect(() => {
    const validator = setTimeout(() => {
      setPhoneValid(/^\d{9}$/.test(phone));
    }, 500);
    return () => clearTimeout(validator);
  }, [phone]);

  useEffect(() => {
    const validator = setTimeout(() => {
      setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    }, 500);
    return () => clearTimeout(validator);
  }, [email]);

  useEffect(() => {
    if (gender !== '') {
      setGenderValid(true);
    } else {
      setGenderValid(false);
    }
  }, [gender])

  return (
    <>
      <div className="md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 md:grid-cols-2 md:gap-6 min-w-[80%] w-[80%] mt-3">
        <div className="flex flex-col justify-between items-center">
          <Imput
            label="CORREO ELECTRÓNICO"
            value={email}
            onChange={setEmail}
            isValueValid={emailValid}
            divClassName='w-full'
          />
          <Imput
            label="TELÉFONO"
            value={phone}
            onChange={setPhone}
            isValueValid={phoneValid}
            divClassName='w-full'
          />
          <Imput
            label="NOMBRE"
            value={name}
            onChange={setName}
            isValueValid={nameValid}
            divClassName='w-full'
          />
          <Imput
            label="FECHA DE NACIMIENTO"
            value={birthDate}
            onChange={setBirthDate}
            isValueValid={birthDateValid}
            divClassName='w-full'
            type="date"
          />
        </div>
        <div className="flex flex-col justify-between items-center">
          <InputPassword
            label="CONTRASEÑA"
            value={password}
            onChange={setPassword}
            isValueValid={passwordValid}
            divClassName='w-full'
          />
          <InputPassword
            label="CONFIRMAR CONTRASEÑA"
            value={passwordConfirm}
            onChange={setPasswordConfirm}
            isValueValid={passwordConfirmValid}
            divClassName='w-full'
          />
          <div className={`flex flex-col w-full mb-3`}>
            <label className="text-palette-11 dark:text-palette-50">SELECCIONA TU GÉNERO</label>
            <Select
              options={genderList}
              isClearable
              className={`${genderValid ? 'border-palette-600 hover:border-palette-700 active:border-palette-800 text-palette-600 focus:border-palette-700 active:text-palette-800' : 'border-red-500 hover:border-red-500 text-red-500 focus:border-red-500'} w-full bg-palette-1 bg-transparent`}
              styles={{
                control: (styles) => ({
                  ...styles,
                  border: '2px solid',
                }),
              }}
              isLoading={genderListIsLoading}
              onChange={(selected) => {
                if (selected) {
                  setGender(selected.value);
                } else {
                  setGender('');
                }
              }}
              isDisabled={genderListIsLoading || genderList.length === 0}
            />
          </div>
        </div>
      </div>
      <div className="content-start items-start bg-palette-4 dark:bg-palette-10 shadow-md shadow-palette-11 dark:shadow-palette-50 border-solid border-palette-4 dark:border-palette-10 border-2 p-5 pl-0 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%]">
        {/* Errores de la contraseña */}
        <SectionTitle bold lg>
          La contraseña debe contener:
        </SectionTitle>
        {hasMayus ? (
          <span className="text-palette-7 dark:text-palette-2 w-full flex"><Check />
            Debe tener al menos una letra mayúscula</span>
        ) : (
          <span className="text-red-500 w-full flex"><Close /> Debe tener al menos una letra mayúscula</span>
        )}
        {hasMinus ? (
          <span className="text-palette-7 dark:text-palette-2 w-full flex"><Check /> Debe contener al menos una letra minúscula</span>
        ) : (
          <span className="text-red-500 w-full flex"><Close /> Debe contener al menos una letra minúscula</span>
        )}
        {hasNumber ? (
          <span className="text-palette-7 dark:text-palette-2 w-full flex"><Check /> Debe contener al menos un número</span>
        ) : (
          <span className="text-red-500 w-full flex"><Close /> Debe contener al menos un número</span>
        )}
        {hasSpecial ? (
          <span className="text-palette-7 dark:text-palette-2 w-full flex"><Check /> Debe contener al menos un carácter especial (!@#$%^&*-)</span>
        ) : (
          <span className="text-red-500 w-full flex"><Close /> Debe contener al menos un carácter especial (!@#$%^&*-)</span>
        )}
        {moreThan8 ? (
          <span className="text-palette-7 dark:text-palette-2 w-full flex"><Check /> La contraseña debe tener entre {minPasswordLength} y {maxPasswordLength} caracteres | {password.length} caracteres</span>
        ) : (
          <span className="text-red-500 w-full flex"><Close /> La contraseña debe tener entre {minPasswordLength} y {maxPasswordLength} caracteres | {password.length} caracteres</span>
        )}
      </div>
      <Button
        label="Registrarse"
        onClick={() => {
          const register = async () => {
            const user = {
              email,
              phone,
              password,
              name,
              birthDate,
              genre: gender
            }
            const resp = await registerAPI(user)
            if (resp) {
              window.location.href = '/'
            }
          }
          register()
        }}

        className="mt-5 w-[80vw]"
      />
    </>
  );

}
