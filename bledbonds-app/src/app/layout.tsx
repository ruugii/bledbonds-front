import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Suspense } from "react";
import HeaderMovil from "./components/HeaderMovil";
import Menu from "./interfaces/menu";
import Script from "next/script";
import ChangeTheme from "./components/ChangeTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BledBonds - Citas para personas con discapacidad",
  description: "BledBonds es la primera red social para conocer a personas con discapacidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = [
    {
      name: 'Que es BledBonds',
      url: '/what-is'
    },
    {
      name: 'Preguntas frecuentes',
      url: '/faq'
    },
    {
      name: 'La app',
      url: '/app'
    },
    {
      name: 'citas a ciegas',
      url: '/ciegas'
    },
    {
      name: 'Eventos',
      url: '/events'
    }
    // Add more menu items as needed...
  ] as Menu[]
  const menuAdmin = [
    {
      name: 'Gestion de usuarios',
      url: '',
      dropdown: [
        {
          name: 'Usuarios registrados',
          url: '/admin/users'
        },
        {
          name: 'Usuarios susctritos a la newsletter',
          url: '/admin/newsletter'
        },
        {
          name: 'usuarios apuntados a la beta',
          url: '/admin/beta-users'
        }
      ],
    },
    {
      name: 'Gestion del blog',
      url: '',
      dropdown: [
        {
          name: 'Crear post',
          url: '/admin/blog/create',
        }
      ]
    },
    {
      name: "Gestion de eventos",
      url: '/admin/events',
    },
    {
      name: "gestion menu app",
      url: '/admin/master-data',
    },
    {
      name: "chats",
      url: '',
      dropdown: [
        {
          name: "consultar chats",
          url: '/admin/chats',
        }
      ]
    }
  ] as Menu[]
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen grid grid-rows-layout`}>
        <Header
          menu={menu}
          menuAdmin={menuAdmin}
        />
        <HeaderMovil
          menu={menu}
          menuAdmin={menuAdmin}
        />
        {/* <Newsletter /> */}
        <Suspense fallback={<div></div>}>
          <Newsletter />
        </Suspense>
        {children}
        <Footer />
        <ChangeTheme />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W0JN17KS2T" />
        <script dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W0JN17KS2T');
            `
        }} />
      </body>
    </html>
  );
}
