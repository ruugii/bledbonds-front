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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HeaderMovil />
        {/* <Newsletter /> */}
        <Suspense fallback={<div></div>}>
          <Newsletter />
          <RegisterModal />
        </Suspense>
        {children}
        <Footer />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W0JN17KS2T"></script>
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
