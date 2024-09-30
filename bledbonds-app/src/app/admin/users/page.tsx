'use client';

import ArrowAsc from "@/app/Icons/arrowAsc";
import ArrowDes from "@/app/Icons/arrowDes";
import getNewsletterAPI from "@/app/api/getNewsletter";
import getUsersAPI from "@/app/api/getUsers";
import Table from "@/app/components/Table";
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
  roleName: string;
  findText: string | null;
  orientationText: string | null;
  statusText: string | null;
  bio: string | null;
  lat: number | null;
  lon: number | null;
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
  const [findOrder, setFindOrder] = useState<'asc' | 'desc'>('asc');
  const [orientationOrder, setOrientationOrder] = useState<'asc' | 'desc'>('asc');
  const [statusOrder, setStatusOrder] = useState<'asc' | 'desc'>('asc');
  const [bioOrder, setBioOrder] = useState<'asc' | 'desc'>('asc');
  const [heightOrder, setHeightOrder] = useState<'asc' | 'desc'>('asc');
  const [studyPlaceOrder, setStudyPlaceOrder] = useState<'asc' | 'desc'>('asc');
  const [workOrder, setWorkOrder] = useState<'asc' | 'desc'>('asc');
  const [ChargeWorkOrder, setChargeWorkOrder] = useState<'asc' | 'desc'>('asc');
  const [EnterpriseOrder, setEnterpriseOrder] = useState<'asc' | 'desc'>('asc');
  const [drinkOrder, setDrinkOrder] = useState<'asc' | 'desc'>('asc');
  const [educativeLevelOrder, setEducativeLevelOrder] = useState<'asc' | 'desc'>('asc');
  const [personalOrder, setPersonalOrder] = useState<'asc' | 'desc'>('asc');
  const [zodiacOrder, setZodiacOrder] = useState<'asc' | 'desc'>('asc');
  const [mascotasOrder, setMascotasOrder] = useState<'asc' | 'desc'>('asc');
  const [religionOrder, setReligionOrder] = useState<'asc' | 'desc'>('asc');
  const [latOrder, setLatOrder] = useState<'asc' | 'desc'>('asc');
  const [lonOrder, setLonOrder] = useState<'asc' | 'desc'>('asc');

  const [isClient, setIsClient] = useState(false);

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (role === 'US_CC') {
      getUsersAPI().then((data_) => {
        setData(data_.users);
        setDataOrd(data_.users);
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
  const sortToken = () => sortData('phone', tokenOrder, setTokenOrder);
  const sortPasswd = () => sortData('passwd', tokenOrder, setTokenOrder);
  const sortIsActive = () => sortData('isActive', isActiveOrder, setIsActiveOrder);
  const sortGenre = () => sortData('id_genre', genreOrder, setGenreOrder);
  const sortName = () => sortData('name', nameOrder, setNameOrder);
  const sortBirthdate = () => sortData('birthdate', birthdateOrder, setBirthdateOrder);
  const sortRole = () => sortData('roleName', roleOrder, setRoleOrder);
  const sortFind = () => sortData('findText', findOrder, setFindOrder);
  const sortOrientation = () => sortData('orientationText', orientationOrder, setOrientationOrder);
  const sortStatus = () => sortData('statusText', statusOrder, setStatusOrder);
  const sortBio = () => sortData('bio', bioOrder, setBioOrder);
  const sortHeight = () => sortData('height', heightOrder, setHeightOrder);
  const sortStudyPlace = () => sortData('you_work', studyPlaceOrder, setStudyPlaceOrder);
  const sortWork = () => sortData('charge_work', workOrder, setWorkOrder);
  const sortChargeWork = () => sortData('charge_work', ChargeWorkOrder, setChargeWorkOrder);
  const sortEnterprise = () => sortData('enterprise', EnterpriseOrder, setEnterpriseOrder);
  const sortDrink = () => sortData('drink', drinkOrder, setDrinkOrder);
  const sortEducativeLevel = () => sortData('educative_level_id', educativeLevelOrder, setEducativeLevelOrder);
  const sortPersonal = () => sortData('personality', personalOrder, setPersonalOrder);
  const sortZodiac = () => sortData('mascotas', zodiacOrder, setZodiacOrder);
  const sortMascotas = () => sortData('mascotas', mascotasOrder, setMascotasOrder);
  const sortReligion = () => sortData('id_religion', religionOrder, setReligionOrder);
  const sortLat = () => sortData('lat', latOrder, setLatOrder);
  const sortLon = () => sortData('lon', lonOrder, setLonOrder);

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
              },
              {
                name: 'find',
                onClick: sortFind,
                icon: findOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'orientation',
                onClick: sortOrientation,
                icon: orientationOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'status',
                onClick: sortStatus,
                icon: statusOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'bio',
                onClick: sortBio,
                icon: bioOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'height',
                onClick: sortHeight,
                icon: heightOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Study Place',
                onClick: sortStudyPlace,
                icon: studyPlaceOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Work',
                onClick: sortWork,
                icon: workOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Charge Work',
                onClick: sortChargeWork,
                icon: ChargeWorkOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Enterprise',
                onClick: sortEnterprise,
                icon: EnterpriseOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Drink',
                onClick: sortDrink,
                icon: drinkOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Educative Level',
                onClick: sortEducativeLevel,
                icon: educativeLevelOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Personality',
                onClick: sortPersonal,
                icon: personalOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Zodiac',
                onClick: sortZodiac,
                icon: zodiacOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Mascotas',
                onClick: sortMascotas,
                icon: mascotasOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Religion',
                onClick: sortReligion,
                icon: religionOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Lat',
                onClick: sortLat,
                icon: latOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
              {
                name: 'Lon',
                onClick: sortLon,
                icon: lonOrder === 'asc' ? <ArrowDes /> : <ArrowAsc />,
              },
            ]}
            data={dataOrd}
            className="mt-3"
            divider
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
