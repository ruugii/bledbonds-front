import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Head from "next/head";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Suspense } from "react";
import RegisterModal from "./components/RegisterModal";
import HeaderMovil from "./components/HeaderMovil";
import Menu from "./interfaces/menu";
import Script from "next/script";
import ChangeTheme from "./components/ChangeTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bled Bonds - Citas para personas con discapacidad",
  description: "Bled Bonds es la primera red social para conocer a personas con discapacidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = [
    {
      name: 'newsletter',
      url: '/newsletter'
    },
    {
      name: 'Que es Bled Bonds',
      url: '/what-is'
    },
    {
      name: 'La app',
      url: '/app'
    },
    {
      name: 'Preguntas frecuentes',
      url: '/faq'
    },
    {
      name: 'citas a ciegas',
      url: '/ciegas'
      // Va a dar una persona aleatoria, vas a tener 20 mensajes para conocer a esa persona, al acabar, da la opcion de dar LIKE o DISLIKE, si los 2 dan LIKE, puedes seguir hablando con esa persona sin un limite de mensajes.
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
    }
  ] as Menu[]
  return (
    <html lang="en">
      <body className={inter.className}>
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
          <RegisterModal />
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
