'use client';

import ArrowAsc from "@/app/Icons/arrowAsc";
import ArrowDes from "@/app/Icons/arrowDes";
import getNewsletterAPI from "@/app/api/getNewsletter";
import Table from "@/app/components/Table";
import { useEffect, useState } from "react";
import ButtonSendMail from "./componts/ButtonSendMail";
import Title from "@/app/components/Text/Title";

interface NewsletterData {
  id: number;
  email: string;
  token: string;
}

export default function RegisterPage() {
  const [data, setData] = useState<NewsletterData[]>([]);
  const [dataOrd, setDataOrd] = useState<NewsletterData[]>([]);
  const [emailOrder, setEmailOrder] = useState<'asc' | 'desc'>('asc');
  const [idOrder, setIdOrder] = useState<'asc' | 'desc'>('asc');
  const [tokenOrder, setTokenOrder] = useState<'asc' | 'desc'>('asc');

  const [isClient, setIsClient] = useState(false);

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    role === 'US_CC' && getNewsletterAPI().then((data) => {
      setData(data);
        setDataOrd(data);
      });
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
  const sortToken = () => sortData('token', tokenOrder, setTokenOrder);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('role'));
    }
  }, [])

  return (
    <>
      {(role === 'US_CC' && isClient) ? (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 dark:bg-palette-950 flex-col">
          <Title bold width grid center>
            BLEDBONDS - USUARIOS SUSCRITOS A LA NEWSLETTER | ADMINISTRADOR | {dataOrd?.length || 0} - USUARIOS SUSCRITOS
          </Title>
          <Table
            header={[
              {
                name: 'ID',
                onClick: sortID,
                icon: idOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Correo Electrónico',
                onClick: sortEmail,
                icon: emailOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Token',
                onClick: sortToken,
                icon: tokenOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
            ]}
            data={dataOrd}
            className="mt-3"
          />
          <ButtonSendMail />
        </div>
      ) : (
        <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 flex-col">
          <Title bold width grid center>
            Solo puedes acceder a esta página si eres un administrador
          </Title>
        </div>
      )}
    </>
  );
}
