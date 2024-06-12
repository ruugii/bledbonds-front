'use client';

import { useEffect, useState } from "react";
import Menu from "@/app/interfaces/menu";
import Link from "next/link";

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
                    <li key={index} className="relative">
                        <button 
                            id="dropdownNavbarLink" 
                            data-dropdown-toggle="dropdownNavbar" 
                            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            onClick={toggleDropdown}
                        >
                            {item.name}
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div id="dropdownNavbar" className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    {item.dropdown.map((dropdownItem, idx) => (
                                        <li key={idx}>
                                            <Link href={dropdownItem.url} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                {dropdownItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                        )}
                    </li>
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