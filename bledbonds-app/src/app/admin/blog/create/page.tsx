'use client';

import Button from "@/app/UX/button/button";
import Dropdown from "@/app/UX/dropdown/dropdown";
import Imput from "@/app/UX/imput/imput";
import createBlogData from "@/app/api/blog/create";
import getCategoriesAPI from "@/app/api/category/getCategories";
import Subtitle from "@/app/components/Text/Subtitle";
import Title from "@/app/components/Text/Title";
import { useEffect, useState } from "react";

interface NewsletterData {
  id: number;
  email: string;
  phone: string;
  passwd: string;
  isActive: number;
  id_genre: number;
  name: string;
  birthdate: string;
  id_find: number | null;
  id_orientation: number | null;
  id_status: number | null;
  bio: string | null;
  height: number | null;
  studyPlace: string | null;
  you_work: string | null;
  charge_work: string | null;
  enterprise: string | null;
  drink: string | null;
  educative_level_id: number | null;
  personality: string | null;
  id_zodiac: number | null;
  mascotas: string | null;
  id_religion: number | null;
  role_name: string;
}

export default function RegisterPage() {

  const [isClient, setIsClient] = useState(false);

  const [role, setRole] = useState<string | null>(null);

  const [categoryList, setCategoryList] = useState<string[]>([
    'seleccione una categoría'
  ]);
  const [category, setCategory] = useState<string>('');

  const [title, setTitle] = useState<string>('');
  const [resume, setResume] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (role === 'US_CC' && isClient) {
      const getCategories = async () => {
        const categories = await getCategoriesAPI();
        const aux = categories.map((category: any) => category.name);
        setCategoryList([...categoryList, ...aux]);
      }
      getCategories();
    }
  }, [isClient, categoryList, role])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('role'));
    }
  }, [])

  return (
    <>
      {(role === 'US_CC' && isClient) ? (
        <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
          <Title bold width grid center>
            CREAR BLOG
          </Title>
          <Subtitle margin bold width grid center>
            Porfavor llena el siguiente formulario para poder crear un post en el blog
          </Subtitle>
          <div>
            <Dropdown
              label="Categoria - en caso de que no exista la categoría que buscas, porfavor contacta a un administrador para que la agregue."
              value={category}
              onChange={setCategory}
              options={categoryList}
              isValueValid={category.length > 0}
            />
            <Imput
              value={title}
              onChange={setTitle}
              label="Título del post"
              isValueValid={title.length > 0}
            />
            <Imput
              value={resume}
              onChange={setResume}
              label="Resumen del post"
              isValueValid={resume.length > 0}
              text
            />
            <Imput
              value={content}
              onChange={setContent}
              label="Contenido del post"
              isValueValid={content.length > 0}
              text
            />
          <Button
            onClick={() => {
              const push = async () => {
                const token = localStorage.getItem('token') ?? '';
                const data = {
                  category,
                  title,
                  resume,
                  text: content,
                  token
                }
                await createBlogData(data);
              }

              push();
            }}
            className="w-full"
          />
          </div>
        </div>
      ) : (
        <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
          <Title bold width grid center>
            BLEDBONDS - CREAR POST EN EL BLOG
          </Title>
          <Subtitle margin bold width grid center>
            Solo puedes acceder a esta página si eres un administrador
          </Subtitle>
        </div>
      )}
    </>
  );
}
