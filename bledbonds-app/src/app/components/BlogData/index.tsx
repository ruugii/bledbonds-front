import React from "react";
import Category from "../Category";
import Subtitle from "../Text/Subtitle";
import Link from "next/link";

interface BlogInterface {
  category: string;
  subtitle: string;
  url: string;
  resume: React.ReactNode;
  name: string;
  image?: string;
}

export default function BlogData(props : BlogInterface) {
  return (
    <article className="p-6 bg-palette-11 dark:bg-palette-900 rounded-lg border border-palette-9 dark:border-palette-800 shadow-md">
      <div className="flex justify-between items-center mb-5 text-palette-2">
        <span className="bg-palette-10 dark:bg-palette-9 text-palette-2 dark:text-palette-50 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <Category category={props.category} />
        </span>
      </div>
      <Subtitle margin bold traking className="text-palette-50">
        <a href={props.url}>{props.subtitle}</a>
      </Subtitle>
      <p className="mb-5 font-light text-palette-1">
        {props.resume}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-7 h-7 rounded-full bg-palette-10 dark:bg-palette-2 flex items-center justify-center">
            <span className="text-palette-2 dark:text-palette-900 font-medium">
              {props.image ? props.image : props.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="font-medium text-palette-1">
            {props.name}
          </span>
        </div>
        <Link href={props.url} className="inline-flex items-center font-medium text-palette-1 hover:underline">
          Leer mas
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </article>
  )
}