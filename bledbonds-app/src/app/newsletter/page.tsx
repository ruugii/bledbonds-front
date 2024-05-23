'use client'

import { useEffect, useState } from "react";
import Imput from "../UX/imput/imput";
import Newsletter from "../components/Newsletter";
import Button from "../UX/button/button";
import newsletterAPI from "../api/newsletter";

export default function Page() {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <main className='bg-palette-3 h-screen flex flex-col content-center justify-center items-center'>
            <div className="flex items-center justify-center">
                <div className="p-8 h-[80%] w-[80%]">
                    <div className="text-center h-full">
                        <div className="flex flex-row h-[90%] content-center items-center justify-center">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row content-center justify-center items-center">
                                    <h3 className="text-2xl font-bold text-palette-11 w-[80%]">
                                        REGISTRATE A LA NEWSLETTER DE BLEDBONDS Y VAS A ESTAR INFORMADO DE TODAS NUESTRAS NOVEDADES
                                    </h3>
                                </div>
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
                                                const data = await newsletterAPI(user);
                                                if (data) {
                                                    setOpenModal(false);
                                                }
                                            };
                                            register();
                                        }}
                                        className="w-[80%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}