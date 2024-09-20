import Instagram from "@/app/Icons/instagram"
import Menu from "@/app/interfaces/menu"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const footer = [
    {
      name: 'newsletter',
      url: '/newsletter',
      alternative: 'Suscribete a nuestro newsletter'
    },
    {
      name: 'register',
      url: '/register',
      alternative: 'Registrate'
    },
    {
      name: 'blog',
      url: '/blog'
    }
    // {
    //     name: 'login',
    //     url: '/login'
    // }
    // {
    //     name: 'register',
    //     url: '?register=true'
    // }
  ] as Menu[]

  const social = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bledbonds_app/',
      icon: 'instagram',
      alternative: 'Instagram'
    }
  ]

  return (
    <>
      <hr className="border-palette-10 dark:border-palette-50" />
      <footer className="bg-palette-3 dark:bg-palette-950 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image src="/logo.png" width={32} height={32} alt="Flowbite Logo" className="h-8" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-palette-11 dark:text-palette-50">BLEDBONDS</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-palette-11 dark:text-palette-50 sm:mb-0">
              {
                footer.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:underline me-4 md:me-6" aria-label={item.alternative}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <hr className="my-6 border-palette-11 dark:border-palette-50 sm:mx-auto lg:my-8" />
          <ul className="flex content-center justify-center items-center mb-6 text-sm font-medium text-palette-11 dark:text-palette-50 sm:mb-0">
            {
              social.map((item, index) => (
                <li key={index} className="flex">
                  <Link href={item.url} className="hover:underline me-4 md:me-6" aria-label={item.alternative}>
                    {
                      item.icon === 'instagram' ? (
                        <Instagram />
                      ) : item.name
                    }
                  </Link>
                </li>
              ))
            }
          </ul>
          <hr className="my-6 border-palette-11 dark:border-palette-50 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-palette-11 dark:text-palette-1 sm:text-center">© {new Date().getFullYear()} <a href="/" className="hover:underline">BLEDBONDS™</a>. All Rights Reserved.</span>
          <hr className="my-6 border-palette-11 dark:border-palette-50 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-palette-11 dark:text-palette-1 sm:text-center">Developed by: <a href="https://github.com/bledbonds" className="hover:underline">ruugii</a></span>
        </div>
      </footer>
    </>
  )
}