'use client'

import { useEffect, useState } from "react"
import styles from './RegisterModal.module.css'
import Imput from "@/app/UX/imput/imput"
import { emit } from "process"
import Email from "@/app/Icons/email"
import Phone from "@/app/Icons/phone"
import Passwd from "@/app/Icons/passwd"
import Genre from "@/app/Icons/genre"
import Name from "@/app/Icons/name"
import Calendar from "@/app/Icons/calendar"
import Next from "@/app/Icons/next"
import Prev from "@/app/Icons/prev"
import Link from "next/link"
import Dropdown from "@/app/UX/dropdown/dropdown"
import getGenderAPI from "@/app/api/getGenders"
import Button from "@/app/UX/button/button"
import registerAPI from "@/app/api/register"
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation"
import Close from "@/app/Icons/close"

interface RegisterInterface {
    isOpen?: boolean,
    setIsOpen?: Function
}

export default function RegisterModal(props : RegisterInterface) {
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneValid, setPhoneValid] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(false)
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [passwordConfirmationValid, setPasswordConfirmationValid] = useState(false)
    const [gender, setGender] = useState('SELECT')
    const [genderList, setGenderList] = useState<string[]>([])
    const [gendreValid, setGendreValid] = useState(false)
    const [name, setName] = useState('')
    const [nameValid, setNameValid] = useState(false)
    const [birthDate, setBirthDate] = useState('')
    const [birthDateValid, setBirthDateValid] = useState(false)

    const [step, setStep] = useState(1)

    const searchParams = useSearchParams()

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const aux = setTimeout(() => {
            setEmailValid(email.includes('@') && email.includes('.'))
            console.log(email);
        }, 500)
        return () => clearTimeout(aux)
    }, [email])

    useEffect(() => {
        const aux = setTimeout(() => {
            setPhoneValid(phone.length === 9 && (phone.split('')[0] === '7' || phone.split('')[0] === '6'))
            console.log(phone);
        }, 500)
        return () => clearTimeout(aux)
    }, [phone])

    useEffect(() => {
        const aux = setTimeout(() => {
            if (
                password.length > 8 &&
                password.length < 16 &&
                (
                    password.includes('0') ||
                    password.includes('1') ||
                    password.includes('2') ||
                    password.includes('3') ||
                    password.includes('4') ||
                    password.includes('5') ||
                    password.includes('6') ||
                    password.includes('7') ||
                    password.includes('8') ||
                    password.includes('9')
                ) && (
                    password.includes('!') ||
                    password.includes('@') ||
                    password.includes('#') ||
                    password.includes('$') ||
                    password.includes('%') ||
                    password.includes('&') ||
                    password.includes('*') ||
                    password.includes('(') ||
                    password.includes(')') ||
                    password.includes('-') ||
                    password.includes('_')
                ) && (
                    password.includes('A') ||
                    password.includes('B') ||
                    password.includes('C') ||
                    password.includes('D') ||
                    password.includes('E') ||
                    password.includes('F') ||
                    password.includes('G') ||
                    password.includes('H') ||
                    password.includes('I') ||
                    password.includes('J') ||
                    password.includes('K') ||
                    password.includes('L') ||
                    password.includes('M') ||
                    password.includes('N') ||
                    password.includes('O') ||
                    password.includes('P') ||
                    password.includes('Q') ||
                    password.includes('R') ||
                    password.includes('S') ||
                    password.includes('T') ||
                    password.includes('U') ||
                    password.includes('V') ||
                    password.includes('W') ||
                    password.includes('X') ||
                    password.includes('Y') ||
                    password.includes('Z')
                ) && (
                    password.includes('a') ||
                    password.includes('b') ||
                    password.includes('c') ||
                    password.includes('d') ||
                    password.includes('e') ||
                    password.includes('f') ||
                    password.includes('g') ||
                    password.includes('h') ||
                    password.includes('i') ||
                    password.includes('j') ||
                    password.includes('k') ||
                    password.includes('l') ||
                    password.includes('m') ||
                    password.includes('n') ||
                    password.includes('o') ||
                    password.includes('p') ||
                    password.includes('q') ||
                    password.includes('r') ||
                    password.includes('s') ||
                    password.includes('t') ||
                    password.includes('u') ||
                    password.includes('v') ||
                    password.includes('w') ||
                    password.includes('x') ||
                    password.includes('y') ||
                    password.includes('z')
                )
            ) {
                setPasswordValid(true)
            }

            if (password === passwordConfirmation && passwordConfirmation) {
                setPasswordConfirmationValid(true)
            }
        }, 500)

        return () => clearTimeout(aux)
    }, [password, passwordConfirmation])

    useEffect(() => {
        const aux = setTimeout(() => {
            setNameValid(name.length > 1)
        }, 500)
        return () => clearTimeout(aux)
    }, [name])

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
        if (step < 1) {
            setStep(7)
        } else if (step > 7) {
            setStep(1)
        }
    }, [step])

    useEffect(() => {
        if (gender !== 'SELECT' && genderList.includes(gender)) {
            setGendreValid(true)
        } else {
            setGendreValid(false)
        }
    }, [gender])

    useEffect(() => {
        const aux = ['SELECT'];

        const getGenderaAPI = async () => {
            const list = await getGenderAPI();
            for (let i = 0; i < list.length; i++) {
                aux.push(list[i].genre_name.toUpperCase());
                console.log(aux);
            }
        }
        setGenderList(aux)
        getGenderaAPI()
    }, [])

    const pathname = usePathname()

    const close = () => {
        setOpenModal(false)
        props.setIsOpen ? props.setIsOpen(false) : null
    }

    useEffect(() => {
        setOpenModal(searchParams.get('register') ? true : false)
        console.log(searchParams);
        console.log(pathname);
        
    }, [searchParams])

    return (
        (props.isOpen || openModal) && (
            <div className="fixed inset-0 bg-palette-11 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div className="p-8 border shadow-lg rounded-md bg-palette-1">
                    <div className="text-center">
                        <div className="text-palette-11 flex justify-end">
                            <Link onClick={() => close()} href={pathname}>
                                <Close />
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className='text-palette-11 content-center justify-center items-center'>
                                <div onClick={() => setStep(step - 1)}>
                                    <Prev />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <h3 className="text-2xl font-bold text-palette-11">REGISTRATE EN BLED BONDS</h3>
                                <div className="flex flex-row content-center justify-center items-center">
                                    {
                                        step === 1 ? (
                                            <Imput
                                                label="Inserte su correo electronico"
                                                value={email}
                                                onChange={setEmail}
                                                isValueValid={emailValid}
                                            />
                                        ) : step === 2 ? (
                                            <Imput
                                                label="Inserte su numero de telefono"
                                                value={phone}
                                                onChange={setPhone}
                                                isValueValid={phoneValid}
                                                type="number"
                                            />
                                        ) : step === 3 ? (
                                            <Imput
                                                label="Inserte su contraseña"
                                                value={password}
                                                onChange={setPassword}
                                                isValueValid={passwordValid}
                                                type='password'
                                            />
                                        ) : step === 4 ? (
                                            <Imput
                                                label="Repita su contraseña"
                                                value={passwordConfirmation}
                                                onChange={setPasswordConfirmation}
                                                isValueValid={passwordConfirmationValid}
                                                type='password'
                                            />
                                        ) : step === 5 ? (
                                            <Imput
                                                label="Inserte su nombre completo"
                                                value={name}
                                                onChange={setName}
                                                isValueValid={nameValid}
                                            />
                                        ) : step === 6 ? (
                                            <Imput
                                                type="date"
                                                label="Inserte su fecha de nacimiento"
                                                value={birthDate}
                                                onChange={setBirthDate}
                                                isValueValid={birthDateValid}
                                            />
                                        ) : step === 7 ? (
                                            <Dropdown
                                                label="Genero"
                                                value={gender}
                                                onChange={setGender}
                                                options={genderList}
                                                isValueValid={gendreValid}
                                            />
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                                <div className={`flex flex-row ${styles.counter}`}>
                                    <div className={`${emailValid ? 'text-green-500' : 'text-red-500'} ${step === 1 && styles.active}`} onClick={() => setStep(1)}>
                                        <Email />
                                        <div className={`${emailValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    </div>
                                    <div className={`${phoneValid ? 'text-green-500' : 'text-red-500'} ${step === 2 && styles.active}`} onClick={() => setStep(2)}>
                                        <Phone />
                                        <div className={`${phoneValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    </div>
                                    <div className={`${passwordValid ? 'text-green-500' : 'text-red-500'} ${(step === 3 || step === 4) && styles.active}`} onClick={() => setStep(3)}>
                                        <Passwd />
                                        <div className={`${passwordConfirmationValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    </div>
                                    <div className={`${nameValid ? 'text-green-500' : 'text-red-500'} ${step === 5 && styles.active}`} onClick={() => setStep(5)}>
                                        <Name />
                                        <div className={`${nameValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    </div>
                                    <div className={`${birthDateValid ? 'text-green-500' : 'text-red-500'} ${step === 6 && styles.active}`} onClick={() => setStep(6)}>
                                        <Calendar />
                                        <div className={`${birthDateValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    </div>
                                    <div className={`${gendreValid ? 'text-green-500' : 'text-red-500'} ${step === 7 && styles.active}`} onClick={() => setStep(7)}>
                                        <Genre />
                                        <div className={`${gendreValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    </div>
                                </div>
                                <Button
                                    label="Register"
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
                                            console.log(user);
                                            const resp = await registerAPI(user)
                                            if (resp) {
                                                console.log('Usuario registrado correctamente');
                                                close()
                                            }
                                        }

                                        register()
                                    }}

                                    className=""
                                />
                            </div>
                            <div className='text-palette-11 content-center justify-center items-center'>
                                <div onClick={() => setStep(step + 1)}>
                                    <Next />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    )
}