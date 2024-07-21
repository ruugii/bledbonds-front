'use client';

import Close from "@/app/Icons/close";
import Next from "@/app/Icons/next";
import Button from "@/app/UX/button/button";
import Imput from "@/app/UX/imput/imput";
import newsletterAPI from "@/app/api/newsletter";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../Text/SectionTitle";

interface NewsletterProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export default function Newsletter(props: NewsletterProps) {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const aux = setTimeout(() => {
      setEmailValid(
        email.includes('@') &&
        email.split('@')[1].includes('.') &&
        email.split('@')[1].split('.').length > 1
      );
    }, 500);
    return () => clearTimeout(aux);
  }, [email]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        searchParams.get('register') || 
        pathname === '/register' || 
        pathname === '/login' || 
        pathname.includes('admin') || 
        pathname.includes('activate') || 
        pathname.includes('blog') || 
        pathname.includes('what-is') || 
        pathname.includes('app') || 
        pathname.includes('faq') ||
        props.isOpen
      ) {
        setOpenModal(false);
      } else if (!pathname.includes('newsletter')) {
        setOpenModal(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, props.isOpen]);

  useEffect(() => {
    if (props.isOpen !== undefined) {
      setOpenModal(!props.isOpen);
      console.log('props.isOpen', props.isOpen);
      console.log('openModal', openModal);
    }
  }, [props.isOpen]);

  useEffect(() => {
    console.log('openModal', openModal);
  }, [openModal]);

  return (
    (openModal && (props.isOpen === false || props.isOpen === undefined)) && (
      <div className="fixed inset-0 bg-palette-11 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div className="p-8 border shadow-lg rounded-md bg-palette-1 dark:bg-palette-950 h-[80%] w-[80%]">
          <div className="text-center h-full">
            <div className="text-palette-11 flex justify-end">
              <Button onClick={() => setOpenModal(!openModal)} className="bg-transparent hover:bg-transparent active:bg-transparent flex flex-row border-none p-2 h-12 w-12 content-center justify-center items-center">
                <Close className="hover:h-12 hover:w-12 dark:text-palette-50 text-palette-950" />
              </Button>
            </div>
            <div className="flex flex-row h-[90%] content-center items-center justify-center">
              <div className="flex flex-col w-full">
                <SectionTitle bold>
                  REGISTRATE A LA NEWSLETTER DE BLEDBONDS Y VAS A ESTAR INFORMADO DE TODAS NUESTRAS NOVEDADES
                </SectionTitle>
                <div className="flex flex-row content-center justify-center items-center">
                  <Imput
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    isValueValid={emailValid}
                    type="email"
                    divClassName="w-[80%]"
                  />
                </div>
                <div className="flex flex-row content-center justify-center items-center">
                  <Button
                    label="Register"
                    onClick={() => {
                      const register = async () => {
                        const user = { email };
                        console.log(user);
                        const data = await newsletterAPI(user);
                        if (data) {
                          setOpenModal(false);
                        }
                      };

                      register();
                    }}
                    className="w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
