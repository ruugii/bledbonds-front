'use client'

import Image from "next/image"
import Link from "next/link"
import RegisterModal from "../RegisterModal"
import { useEffect, useState } from "react"
import Button from "@/app/UX/button/button"
import Newsletter from "../Newsletter"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        console.log('Header component loaded', isOpen);
    }, [isOpen])
    const menu = [
        {
            name: 'register',
            url: '?register=true'
        },
        // {
        //     name: 'login',
        //     url: '/login'
        // },
        // {
        //     name: 'about',
        //     url: '/about'
        // },
        // {
        //     name: 'contact',
        //     url: '/contact'
        // }
    ]
    return (
        <>
            {!localStorage.getItem('token') && (
                    <header className="w-screen absolute top-0">
                        <nav className="bg-palette-3 flex content-center items-center justify-between">
                            <Link href="/">
                                <div className="flex content-center items-center ml-14 mt-2 mb-2">
                                    <Image src="/logo.png" alt="logo" height={48} width={48}/>
                                    <h1 className="text-2xl font-bold text-palette-11">BLED BONDS</h1>
                                </div>
                            </Link>
                            <div className="mr-14 mt-2 mb-2">
                                <ul className="flex content-center items-center">
                                    {menu.map((item, index) => (
                                        <Button key={index} onClick={() => setIsOpen(!isOpen)} className="bg-transparent border-transparent m-0 p-0 border-0 mb-0">
                                            <li className="mr-2 text-xl font-bold text-palette-11 hover:text-palette-10 hover:underline">
                                                {item.name}
                                            </li>
                                        </Button>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </header>
            )}
            <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <Newsletter isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}