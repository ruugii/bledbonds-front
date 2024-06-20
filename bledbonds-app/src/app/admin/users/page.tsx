'use client';

import ArrowAsc from "@/app/Icons/arrowAsc";
import ArrowDes from "@/app/Icons/arrowDes";
import getNewsletterAPI from "@/app/api/getNewsletter";
import getUsersAPI from "@/app/api/getUsers";
import Table from "@/app/components/Table";
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
  const [data, setData] = useState<NewsletterData[]>([]);
  const [dataOrd, setDataOrd] = useState<NewsletterData[]>([]);
  const [emailOrder, setEmailOrder] = useState<'asc' | 'desc'>('asc');
  const [idOrder, setIdOrder] = useState<'asc' | 'desc'>('asc');
  const [tokenOrder, setTokenOrder] = useState<'asc' | 'desc'>('asc');
  const [passwdOrder, setPasswdOrder] = useState<'asc' | 'desc'>('asc');
  const [isActiveOrder, setIsActiveOrder] = useState<'asc' | 'desc'>('asc');
  const [genreOrder, setGenreOrder] = useState<'asc' | 'desc'>('asc');
  const [nameOrder, setNameOrder] = useState<'asc' | 'desc'>('asc');
  const [birthdateOrder, setBirthdateOrder] = useState<'asc' | 'desc'>('asc');
  const [roleOrder, setRoleOrder] = useState<'asc' | 'desc'>('asc');

  const [isClient, setIsClient] = useState(false);

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (role === 'US_CC') {
      getUsersAPI().then((data_) => {
        console.log(data_);
        setData(data_.users);
        console.log(data);
        setDataOrd(data_.users);
        console.log(dataOrd);
      });
    }
  }, [role]);

  const sortData = (key: keyof NewsletterData, order: 'asc' | 'desc', setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>) => {
    const aux = [...dataOrd].sort((a, b) => {
      if (order === 'asc') {
        setOrder('desc');
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          return (a[key] as string).localeCompare(b[key] as string);
        } else if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return (a[key] as number) - (b[key] as number);
        }
      } else {
        setOrder('asc');
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          return (b[key] as string).localeCompare(a[key] as string);
        } else if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return (b[key] as number) - (a[key] as number);
        }
      }
      return 0;
    });
    setDataOrd(aux);
  };

  const sortEmail = () => sortData('email', emailOrder, setEmailOrder);
  const sortID = () => sortData('id', idOrder, setIdOrder);
  const sortToken = () => sortData('phone', tokenOrder, setTokenOrder);
  const sortPasswd = () => sortData('passwd', tokenOrder, setTokenOrder);
  const sortIsActive = () => sortData('isActive', isActiveOrder, setIsActiveOrder);
  const sortGenre = () => sortData('id_genre', genreOrder, setGenreOrder);
  const sortName = () => sortData('name', nameOrder, setNameOrder);
  const sortBirthdate = () => sortData('birthdate', birthdateOrder, setBirthdateOrder);
  const sortRole = () => sortData('role_name', roleOrder, setRoleOrder);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('role'));
    }
  }, [])

  return (
    <>
      {(role === 'US_CC' && isClient) ? (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
          <h1 className="text-4xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
            BLEDBONDS - USUARIOS REGISTRADOS | ADMINISTRADOR | {dataOrd.length} - USUARIOS
          </h1>
          <Table
            header={[
              {
                name: 'ID',
                onClick: sortID,
                icon: idOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'email',
                onClick: sortEmail,
                icon: emailOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'phone',
                onClick: sortToken,
                icon: tokenOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'genre',
                onClick: sortGenre,
                icon: genreOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'name',
                onClick: sortName,
                icon: nameOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'birthdate',
                onClick: sortBirthdate,
                icon: birthdateOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'role',
                onClick: sortRole,
                icon: roleOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              }
            ]}
            data={dataOrd}
            className="mt-3"
          />
        </div>
      ) : (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
          <h1 className="text-4xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
            BLEDBONDS - USUARIOS SUSCRITOS A LA NEWSLETTER
          </h1>
          <h2 className="text-3xl font-bold text-palette-11 mt-3 md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center text-left">
            Solo puedes acceder a esta página si eres un administrador
          </h2>
        </div>
      )}
    </>
  );
}
