'use client';
import Imput from "@/app/UX/imput/imput";
import { useEffect, useState } from "react";
import InputPassword from "@/app/UX/InputPassword";
import Button from "@/app/UX/button/button";
import loginAPI from "@/app/api/loginAPI";

export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneValid, setPhoneValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [hasMayus, setHasMayus] = useState(false);
    const [hasMinus, setHasMinus] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, setHasSpecial] = useState(false);
    const [moreThan8, setMoreThan8] = useState(false);
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
            setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        }, 500);
        return () => clearTimeout(validator);
    }, [email]);

    useEffect(() => {
        const validator = setTimeout(() => {
            setPhoneValid(/^\d{9}$/.test(phone));
        }, 500);
        return () => clearTimeout(validator);
    }, [phone]);

    useEffect(() => {
        const validator = setTimeout(() => {
            PasswordValidator(password);
        }, 500);
        return () => clearTimeout(validator);
    }, [password]);

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
                        id="email"
                    />
                    <Imput
                        label="TELÉFONO"
                        value={phone}
                        onChange={setPhone}
                        isValueValid={phoneValid}
                        divClassName='w-full'
                        id="phone"
                    />
                </div>
                <div className="flex flex-col justify-evenly items-center">
                    <InputPassword
                        label="CONTRASEÑA"
                        value={password}
                        onChange={setPassword}
                        isValueValid={passwordValid}
                        divClassName='w-full'
                    />
                </div>
            </div>
            <Button
                label="LOGIN"
                onClick={() => {
                    const login = async () => {
                        const user = {
                            email,
                            phone,
                            password
                        }
                        console.log(user);
                        const resp = await loginAPI(user);
                        console.log(resp);
                        
                        if (resp.token) {
                            localStorage.setItem('token', resp.token);
                        }
                        if (resp) {
                            console.log('Usuario registrado correctamente');
                            window.location.href = '/'
                        }
                    }

                    login()
                }}

                className="mt-5 w-[80vw]"
            />
        </>
    );
    
}
