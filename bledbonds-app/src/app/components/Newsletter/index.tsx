'use client'

import Close from "@/app/Icons/close"
import Next from "@/app/Icons/next"
import Button from "@/app/UX/button/button"
import Imput from "@/app/UX/imput/imput"
import newsletterAPI from "@/app/api/newsletter"
import { useEffect, useState } from "react"

export default function Newsletter () {

    const [openModal, setOpenModal] = useState(false)
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)

    useEffect(() => {
        const aux = setTimeout(() => {
            setEmailValid(email.includes('@') && email.split('@')[1].includes('.') && email.split('@')[1].split('.').length > 1)
        }, 500)
        console.log(emailValid);
        return () => clearTimeout(aux)
    }, [email])

    useEffect(() => {
        setTimeout(() => {
            setOpenModal(true)
        }, 5000)
    }, [])

    return (
        openModal && (
            <div className="fixed inset-0 bg-palette-11 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div className="p-8 border shadow-lg rounded-md bg-palette-1 h-[80%] w-[80%]">
                    <div className="text-center h-full">
                        <div className="text-palette-11 flex justify-end">
                            <Button onClick={() => setOpenModal(!openModal)} className='bg-transparent flex flex-row justify-end border-none'>
                                <Close />
                            </Button>
                        </div>
                        <div className="flex flex-row h-[90%] content-center items-center justify-center">
                            <div className="flex flex-col w-full">
                                <h3 className="text-2xl font-bold text-palette-11">REGISTRATE EN BLED BONDS</h3>
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
                                            }
                                            console.log(user);
                                            const data = await newsletterAPI(user)
                                            if (data) {
                                                setOpenModal(false)
                                            }
                                        }

                                        register()
                                    }}
                                    className="w-[80%]"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}