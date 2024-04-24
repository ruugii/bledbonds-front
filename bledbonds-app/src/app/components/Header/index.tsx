import Image from "next/image"

export default function Header() {
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
        <header className="w-screen absolute top-0">
            <nav className="bg-palette-3 flex content-center items-center justify-between">
                <a href="/">
                    <div className="flex content-center items-center ml-14 mt-2 mb-2">
                        <Image src="/logo.png" alt="logo" height={48} width={48}/>
                        <h1 className="text-2xl font-bold text-palette-11">BLED BONDS</h1>
                    </div>
                </a>
                <div className="mr-14 mt-2 mb-2">
                    <ul className="flex content-center items-center">
                        {menu.map((item, index) => (
                            <a href={item.url} key={index}>
                                <li className="mr-2 text-xl font-bold text-palette-11 hover:text-palette-10 hover:underline">
                                    {item.name}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}