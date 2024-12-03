'use client';

import ArrowAsc from "@/app/Icons/arrowAsc";
import ArrowDes from "@/app/Icons/arrowDes";
import getBetaUsersAPI from "@/app/api/beta/getBetaUsersAPI";
import Table from "@/app/components/Table";
import Subtitle from "@/app/components/Text/Subtitle";
import Title from "@/app/components/Text/Title";
import { useEffect, useState } from "react";

interface NewsletterData {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}

export default function BetaUsers() {
  const [data, setData] = useState<NewsletterData[]>([]);
  const [dataOrd, setDataOrd] = useState<NewsletterData[]>([]);
  const [emailOrder, setEmailOrder] = useState<'asc' | 'desc'>('asc');
  const [idOrder, setIdOrder] = useState<'asc' | 'desc'>('asc');
  const [created_atOrder, setCreated_atOrder] = useState<'asc' | 'desc'>('asc');
  const [updated_atOrder, setUpdated_atOrder] = useState<'asc' | 'desc'>('asc');
  const [isClient, setIsClient] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (role === 'US_CC') {
      getBetaUsersAPI().then((data_) => {
        setData(data_);
        setDataOrd(data_);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [role]);

  useEffect(() => {
    sortID()
  }, [data]);

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
  const sortCreated_at = () => sortData('created_at', created_atOrder, setCreated_atOrder);
  const sortUpdated_at = () => sortData('updated_at', updated_atOrder, setUpdated_atOrder);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('role'));
    }
  }, [])

  return (
    <>
      {(role === 'US_CC' && isClient) ? (
        <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-950 flex-col">
          <Title bold width grid center>
            BLEDBONDS - USUARIOS REGISTRADOS | ADMINISTRADOR | {dataOrd?.length || 0} - USUARIOS
          </Title>
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
                name: 'created_at',
                onClick: sortCreated_at,
                icon: created_atOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'updated_at',
                onClick: sortUpdated_at,
                icon: updated_atOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              }
            ]}
            data={dataOrd}
            className="mt-3"
          />
        </div>
      ) : (
        <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
          <Title bold width grid center>
            BLEDBONDS - GESTION DE USUARIOS
          </Title>
          <Subtitle margin bold width grid center>
            Solo puedes acceder a esta página si eres un administrador
          </Subtitle>
        </div>
      )}
    </>
  );
}
