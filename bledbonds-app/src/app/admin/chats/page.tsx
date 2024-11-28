'use client';

import Title from "@/app/components/Text/Title";
import { useEffect, useState } from "react";
import Subtitle from "@/app/components/Text/Subtitle";
import SectionTitle from "@/app/components/Text/SectionTitle";
import getAllChats from "@/app/api/chats/getAll";
import ChatOptions from "@/app/components/ChatOptions";
import Close from "@/app/Icons/close";
import { io, Socket } from "socket.io-client";
import Message from "../events/component/Message";
import Imput from "@/app/UX/imput/imput";
import getChatData from "@/app/api/getChatData";

export default function ChatsPage() {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [idChat, setIdChat] = useState(0);
  const [chatName, setChatName] = useState("");
  const [seeChatModal, setSeeChatModal] = useState(false);
  const [chat, setChat] = useState<[{ sender: string, message: string }]>()
  const [chats, setChats] = useState<{
    ID: number,
    name: string,
  }[]>([])

  useEffect(() => {
    const socket = io('https://api.bledbonds.es');
    setSocket(socket);
    // return () => socket.disconnect();
  }, []);

  useEffect(() => {
    const fetchChats = async () => {
      setChats(await getAllChats());
    }
    fetchChats();
  }, [])

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [])

  useEffect(() => {
    console.log(idChat);
    
    seeChat(idChat)
  }, [idChat])

  const onClickOption = (id: number, name: string) => {
    console.log(id);
    setIdChat(id);
    setChatName(name);
    setSeeChatModal(true);
  }

  const seeChat = async (idEvent: number) => {
    const fetchChat = async (idEvent: number) => {
      const token = await localStorage.getItem('token') ?? '';
      const data = await getChatData(idEvent, await token);
      setChat(
        data?.messages?.map((item: {
          ID_user: string;
          message: string;
          user: boolean;
        }) => ({
          sender: item.ID_user,
          message: item.message,
          user: item.user
        })) || []
      );
    };
    await fetchChat(idEvent);
  };

  if (role === 'US_CC' && isClient) {
    return (
      (role === 'US_CC' && isClient) ? (
        <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
          <Title center bold mayus>
            Chat
          </Title>
          <div className="w-[80%] mb-3 gap-3">
            <div className="w-full h-full grid gap-2 p-4 mt-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {chats.map((c, i) => (
                <ChatOptions
                  key={i + 1}
                  chatId={c.ID}
                  chatName={c.name}
                  onClick={() => onClickOption(c.ID, c.name)}
                />
              ))}
            </div>
          </div>
          {seeChatModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="absolute top-0 right-0 p-4">
                <button className="text-palette-11 dark:text-palette-1" onClick={
                  () => {
                    setSeeChatModal(false)
                  }}><Close /></button>
              </div>
              <div className=" bg-palette-50 dark:bg-palette-950 p-4 rounded-lg w-[80vw] h-[80vh] flex flex-col gap-3 overflow-auto">
                <Title center bold mayus>
                  {chatName}
                </Title>
                <div className="flex flex-col gap-3 flex-1 overflow-auto bg-palette-3 p-4 rounded-lg scroll-smooth">
                  {chat?.map((item, i) => (
                    <Message
                      sender={item.sender}
                      message={item.message}
                      isMine={item.sender === "Yo" || item.sender == ``}
                      key={i + 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
          <Title bold width grid center>
            BLEDBONDS - GESTION DE CHATS
          </Title>
          <Subtitle margin bold width grid center>
            Solo puedes acceder a esta página si eres un administrador
          </Subtitle>
        </div>
      )
    );
  } else {
    return (
      <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
        <Title center bold mayus>
          BledBonds - Gestión de chats
        </Title>
        <Subtitle margin bold width grid center>
          Solo puedes acceder a esta página si eres un administrador
        </Subtitle>
        <SectionTitle bold >
          Error 403 - No tienes permisos para acceder a esta página
        </SectionTitle>
      </div>
    );
  }
}
