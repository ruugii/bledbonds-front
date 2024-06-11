import Menu from "@/app/interfaces/menu"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
    menu: Menu[]
}

export default function Header(props: HeaderProps) {
    const { menu } = props
    return (
        <header className="sticky top-0 w-full z-10 hidden md:block">
            <nav className="border-palette-1 dark:border-palette-10 bg-palette-3">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/logo.png" alt="Flowbite Logo" width={32} height={32} className="h-8" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-palette-11">BLEDBONDS</span>
                    </a>
                    <div className={`w-full md:block md:w-auto hidden`} id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-palette-1 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-palette-7">
                            {
                                menu.map((item, index) => item.dropdown ? (
                                    <>
                                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{item.name}
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <li>
                                            {/* <!-- Dropdown menu --> */}
                                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                    </li>
                                                </ul>
                                                <div className="py-1">
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                ) : (
                                    <li key={index}>
                                        <Link href={item.url} className="block py-2 px-3 text-palette-11 rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent uppercase hover:text-palette-10 hover:underline" aria-label={`${item.alternative}_d`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className="border-palette-10" />
        </header>
    )
}
