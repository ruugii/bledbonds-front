'use client'

import { useEffect, useState } from "react"
import Category from "../Category"
import getBlogData from "@/app/api/blog/getBlogData";
import Link from "next/link";
import Image from "next/image";
import Subtitle from "../Text/Subtitle";
import BlogData from "../BlogData";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
      {blogData.map((post, index) => (
        <BlogData
          key={index + 1}
          category={post.category}
          subtitle={post.title}
          url={`/blog/${post.id}`}
          resume={post.resume}
          name={post.postBy}
        />
      ))}

      <BlogData
        category='gestion de usuarios'
        subtitle='ELIMINAR MI CUENTA'
        url={`/blog/delete`}
        resume='Quiero eliminar mi cuenta de BledBonds, ¿cómo lo puedo hacer?'
        name='BledBonds'
      />

      <BlogData
        category='gestion de usuarios'
        subtitle='ACTUALIZAR MI CUENTA'
        url={`/blog/update`}
        resume='Quiero actualizar mi cuenta de BledBonds, ¿cómo lo puedo hacer?'
        name='BledBonds'
      />

      <BlogData
        category='FUNCIONES'
        subtitle='EVENTOS'
        url={`/events`}
        resume='Descubre eventos inclusivos para personas con discapacidad y conoce gente nueva'
        name="BledBonds"
      />

      <BlogData
        category='CONSULTORIA'
        subtitle='CONSULTORIA DE EVENTOS'
        url={`/blog/consultoria`}
        resume={<>Te preguntas en que consiste el servicio de consultoria de eventos?<br />La consultoria de eventos es un servicio que ofrecemos para ayudar a los organizadores a que sus eventos sean accesibles y acogedores para todas las personas.</>}
        name="BledBonds"
      />

      <BlogData
        category='EVENTOS'
        subtitle='Porque es importante que los eventos sean accesibles?'
        url={`/blog/accesibilidad`}
        resume={<>Segun el INE hay mas de <b>4 millones</b> de personas con discapacidad en España</>}
        name="BledBonds"
        />
    </div>
  )
}
