'use client';

import { useEffect, useState } from "react";
import Menu from "@/app/interfaces/menu";
import Link from "next/link";
import Dropdown from "../Dropdown";

interface HeaderProps {
    menuAdmin: Menu[]
}

export default function MenuAdmin(props: HeaderProps) {
    const { menuAdmin } = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    let value

    if (typeof window !== 'undefined') {
        value = localStorage.getItem('role') || '';
    }

    return (
        <>
            {(value === 'US_CC' && isClient) && (
                menuAdmin.map((item, index) => item.dropdown ? (
                    <Dropdown key={index} index={index} item={item} />
                ) : (
                    <li key={index}>
                        <Link href={item.url} className="block py-2 px-3 text-palette-11 rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent uppercase hover:text-palette-10 hover:underline" aria-label={`${item.alternative}_d`}>
                                {item.name}
                        </Link>
                    </li>
                ))
            )}
        </>
    );
}