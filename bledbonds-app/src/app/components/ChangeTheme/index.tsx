'use client';

import Moon from "@/app/Icons/moon";
import Sun from "@/app/Icons/sun";
import Button from "@/app/UX/button/button";
import { useEffect, useState } from "react";

export default function ChangeTheme() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(sessionStorage.getItem("theme") ?? "light");
  }, [])

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  }, [theme])

  return (
    <Button onClick={changeTheme} className={`fixed bottom-4 left-4 rounded-full ${theme === 'dark' ? 'text-yellow-100' : 'text-palette-10'} shadow-md shadow-palette-11 dark:shadow-palette-50 `} noBorder>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}