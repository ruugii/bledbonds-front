'use client'

import { useEffect, useState } from "react"
import Category from "../Category"
import getBlogData from "@/app/api/blog/getBlogData";
import Link from "next/link";
import Image from "next/image";

interface BlogDataInterface {
  category: string;
  title: string;
  resume: string;
  postBy: string;
  postByAvatar: string | null; // Allow postByAvatar to be null
  id: number;
}

export default function BlogPreview() {
  const [blogData, setBlogData] = useState<BlogDataInterface[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogData();
      setBlogData(data);
    }
    fetchData();
  }, [])

  return (
    <div className="grid grid-cols-3 gap-3">
      {blogData.map((post, index) => (
        <article key={index} className="p-6 bg-palette-11 rounded-lg border border-palette-9 shadow-md">
          <div className="flex justify-between items-center mb-5 text-palette-2">
            <span className="bg-palette-10 text-palette-2 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              <Category category={post.category} />
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-palette-1">
            <a href="/">{post.title}</a>
          </h2>
          <p className="mb-5 font-light text-palette-1">{post.resume}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {post.postByAvatar ? (
                <Image className="w-7 h-7 rounded-full" src={post.postByAvatar} alt={`${post.postBy} avatar`} />
              ) : (
                <div className="w-7 h-7 rounded-full bg-palette-10 flex items-center justify-center">
                  <span className="text-palette-2 font-medium">
                    {post.postBy.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="font-medium text-palette-1">
                {post.postBy}
              </span>
            </div>
            <Link href={`/blog/${post.id}`} className="inline-flex items-center font-medium text-palette-1 hover:underline">
              Read more
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
