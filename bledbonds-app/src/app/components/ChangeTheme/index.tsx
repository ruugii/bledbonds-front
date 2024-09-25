'use client';

import Moon from "@/app/Icons/moon";
import Sun from "@/app/Icons/sun";
import Button from "@/app/UX/button/button";
import { useEffect, useState } from "react";
import useStyle from "@/app/utilities/style";

export default function ChangeTheme() {
  const [theme, setTheme] = useState('light');
  const [style, setStyle] = useStyle(); // Uso del hook personalizado

  useEffect(() => {
    setTheme(sessionStorage.getItem("theme") ?? "light");
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setStyle(newTheme === "dark" ? "custom-dark-style" : "custom-light-style"); // Cambia el estilo según el tema
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <Button
      onClick={changeTheme}
      className={`fixed bottom-4 left-4 rounded-full ${theme === 'dark' ? 'text-yellow-100' : 'text-palette-10'} ${style} shadow-md shadow-palette-11 dark:shadow-palette-50`} // Aplicación del estilo dinámico
      noBorder
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
