'use client'

import Menu from "@/app/interfaces/menu";
import Link from "next/link";
import { useState } from "react";

interface DropdownProps {
  index: number,
  item: Menu,
}

export default function Dropdown(props: DropdownProps) {
  const {
    index,
    item,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <li key={index} className="relative">
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center justify-between w-full py-2 px-3 text-palette-11 rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent uppercase hover:text-palette-10 hover:underline"
        onClick={toggleDropdown}
      >
        {item.name}
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {dropdownOpen && (
        <div id="dropdownNavbar" className="z-10 absolute font-normal divide-y rounded-lg w-44 bg-palette-3 divide-palette-11 shadow-md shadow-palette-11">
          <ul className="py-2 text-sm text-palette-11" aria-labelledby="dropdownLargeButton">
            {item?.dropdown?.map((dropdownItem, idx) => (
              <li key={idx}>
                <Link href={dropdownItem.url} className="block px-4 py-2 hover:underline">
                  {dropdownItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}