import Instagram from "@/app/Icons/instagram"
import Menu from "@/app/interfaces/menu"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {

  const interests = [
    {
      name: 'Newsletter',
      url: '/newsletter',
      alternative: 'Suscribete a nuestro newsletter'
    },
    {
      name: 'Register',
      url: '/register',
      alternative: 'Registrate'
    },
    {
      name: 'Blog',
      url: '/blog',
      alternative: 'Blog'
    },
    {
      name: 'Eliminar mi cuenta',
      url: '/blog/delete',
      alternative: 'Como eliminar mi cuenta'
    },
    {
      name: 'Actualizar mi cuenta',
      url: '/blog/update',
      alternative: 'Como actualizar mi cuenta'
    },
    {
      name: 'Eventos',
      url: '/events',
      alternative: 'Eventos'
    }
  ]

  const follow = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bledbonds_app/',
      icon: 'instagram',
      alternative: 'Instagram'
    }
  ]

  const policy = [
    {
      name: 'Privacidad',
      url: '/privacidad',
      alternative: 'Política de privacidad'
    },
  ]

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
    },
    {
      name: 'política de privacidad',
      url: '/privacidad'
    },
    {
      name: 'como eliminar mi cuenta',
      url: '/delete'
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
      <footer className="bg-palette-3 dark:bg-palette-950 flex content-center justify-center items-center">
        <div className="w-[80%] p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="/logo.png" width={32} height={32} alt="Flowbite Logo" className="h-8" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-palette-11 dark:text-palette-50">BLEDBONDS</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <p className="mb-6 text-sm font-semibold text-palette-950 uppercase dark:text-palette-50">Paginas de interés</p>
                <ul className="text-palette-950 dark:text-palette-50 font-medium">
                  {interests.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className="hover:underline me-4 md:me-6" aria-label={item.alternative}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-6 text-sm font-semibold text-palette-950 uppercase dark:text-palette-50">Siguenos</p>
                <ul className="text-palette-950 dark:text-palette-50 font-medium">
                  {follow.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className="hover:underline me-4 md:me-6" aria-label={item.alternative}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-6 text-sm font-semibold text-palette-950 uppercase dark:text-palette-50">Politicas</p>
                <ul className="text-palette-950 dark:text-palette-50 font-medium">
                  {policy.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className="hover:underline me-4 md:me-6" aria-label={item.alternative}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-palette-950 sm:mx-auto dark:border-palette-50 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="block text-sm text-palette-11 dark:text-palette-1 sm:text-center">© {new Date().getFullYear()} <a href="/" className="hover:underline">BLEDBONDS™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {
                social.map((item, index) => (
                  <a href={item.url} className="text-palette-950 hover:text-palette-900 dark:text-palette-50 dark:hover:text-palette-100" key={index + 1}>
                    {
                      item.icon === 'instagram' ? (
                        <Instagram />
                      ) : item.name
                    }
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}