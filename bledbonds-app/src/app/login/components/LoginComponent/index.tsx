'use client';
import { useEffect, useState } from "react";
import Imput from "@/app/UX/imput/imput"; // Corrected import for Input
import InputPassword from "@/app/UX/InputPassword";
import Button from "@/app/UX/button/button"; // Corrected import for Button
import loginAPI from "@/app/api/loginAPI";

export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneValid, setPhoneValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);

    const minPasswordLength = 8;
    const maxPasswordLength = 12;

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone: string) => /^\d{9}$/.test(phone);
    const validatePassword = (password: string) => {
        const hasMayus = /[A-Z]/.test(password);
        const hasMinus = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*-]/.test(password);
        const lengthValid = password.length >= minPasswordLength && password.length <= maxPasswordLength;
        return hasMayus && hasMinus && hasNumber && hasSpecial && lengthValid;
    };

    useEffect(() => {
        const validator = setTimeout(() => setEmailValid(validateEmail(email)), 500);
        return () => clearTimeout(validator);
    }, [email]);

    useEffect(() => {
        const validator = setTimeout(() => setPhoneValid(validatePhone(phone)), 500);
        return () => clearTimeout(validator);
    }, [phone]);

    useEffect(() => {
        const validator = setTimeout(() => setPasswordValid(validatePassword(password)), 500);
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
                        if (resp.role) {
                            localStorage.setItem('role', resp.role === 'admin' ? 'US_CC' : '');
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
