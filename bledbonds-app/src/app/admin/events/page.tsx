'use client';

import Title from "@/app/components/Text/Title";
import Close from "@/app/Icons/close";
import Button from "@/app/UX/button/button";
import Imput from "@/app/UX/imput/imput";
import { useEffect, useState } from "react";
import Message from "./component/Message";

import { io, Socket } from "socket.io-client";
import getParticipantsEvent from "@/app/api/events/getParticipants";
import getChatByEvent from "@/app/api/events/getChatByEvent";
import updateEventAPI from "@/app/api/events/updateEvent";
import deleteEventAPI from "@/app/api/events/deleteEventsAPI";
import createEventAPI from "@/app/api/events/createEventAPI";
import uploadImage from "@/app/api/uploadImage";
import Subtitle from "@/app/components/Text/Subtitle";
import SectionTitle from "@/app/components/Text/SectionTitle";
import getChatData from "@/app/api/getChatData";
import getAllEvents from "@/app/api/events/getAllEvents";

export default function EventsPage() {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [createEventModal, setCreateEventModal] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState('');
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null); // Changed to null
  const [isFileValid, setIsFileValid] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [seeParticipantsModal, setSeeParticipantsModal] = useState(false);
  const [seeChatModal, setSeeChatModal] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [editEventModal, setEditEventModal] = useState(false);
  const [idEvent, setIdEvent] = useState(0);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [idUser, setIdUser] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIdUser(localStorage.getItem('idUser') ?? '');
    }
  }, [])

  const [chat, setChat] = useState([{
    sender: "Usuario 1",
    message: "Hola",
  },
  {
    sender: "Yo",
    message: "Hola, ¿cómo estás?",
  },
  {
    sender: "Usuario 2",
    message: "¡Todo bien! ¿Y tú?",
  }])
  const [participants, setParticipants] = useState([{
    name: "Participante 1",
    email: "",
    phone: "",
    address: "",
    photo: "",
  },
  {
    name: "Participante 2",
    email: "",
    phone: "",
    address: "",
    photo: "",
  },
  {
    name: "Participante 3",
    email: "",
    phone: "",
    address: "",
    photo: "",
  },
  {
    name: "Participante 4",
    email: "",
    phone: "",
    address: "",
    photo: "",
  }
  ])
  const [header] = useState([
    { name: "ID", onClick: () => console.log("Ordenar por ID") },
    { name: "Nombre", onClick: () => console.log("Ordenar por nombre") },
    { name: "Fecha", onClick: () => console.log("Ordenar por fecha") },
    { name: "Lugar", onClick: () => console.log("Ordenar por lugar") },
    { name: "Descripción", onClick: () => console.log("Ordenar por descripción") },
    { name: "imagen del evento", onClick: () => console.log("Ver imagen del evento") },
    { name: "Ver participantes", onClick: () => console.log("Ver participantes") },
    { name: "Ver chat", onClick: () => console.log("Ver chat") },
    { name: "Editar", onClick: () => console.log("Editar") },
    { name: "Eliminar", onClick: () => console.log("Eliminar") },
  ])
  const [headerParticipants] = useState([{
    name: "Nombre",
    onClick: () => console.log("Ordenar por nombre"),
  },
  {
    name: "Email",
    onClick: () => console.log("Ordenar por email"),
  },
  {
    name: "Teléfono",
    onClick: () => console.log("Ordenar por teléfono"),
  },
  {
    name: "Foto",
    onClick: () => console.log("Ordenar por foto"),
  }])
  const [events, setEvents] = useState<{ event_name: string, event_date: string, event_location: string, event_description: string, id: number }[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllEvents();
      setEvents(data);
    }

    fetchEvents();
  }, [])

  useEffect(() => {
    const socket = io('https://api.bledbonds.es');
    setSocket(socket);

    seeChat(idEvent)
    // return () => socket.disconnect();
  }, []);

  useEffect(() => {
    socket?.on(`chat message ${idEvent}`, (msg) => {
      seeChat(idEvent)
    });
  }, [socket, idEvent]);

  useEffect(() => {
    if (file && description && name && place && date) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [file, description, name, place, date]);

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

  const [role, setRole] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [])

  if (role === 'US_CC' && isClient) {

    const handleFileChange = (e: any) => {
      setFile(e?.target?.files[0] || null);
    };

    const updateEvent = (id: number) => {
      const event = events?.find((item) => item.id === id);
      if (event) {
        setName(event.event_name || '')
        setDate(event.event_date || '')
        setPlace(event.event_location || '')
        setDescription(event.event_description || '')
        setIdEvent(event.id || 0)
      }
      setEditEventModal(true)
    }

    const HandleUpdateEvent = async () => {
      const newEvent = {
        name,
        date,
        place,
        description,
      };

      const data = await updateEventAPI(idEvent, newEvent, localStorage.getItem('token') ?? '');
      if (data) {
        const aux = events.find((item) => item.id === idEvent)
        if (aux) {
          aux.event_name = name;
          aux.event_date = date;
          aux.event_location = place;
          aux.event_description = description;
          const i = events.findIndex((item) => item.id === idEvent);
          events[i] = aux;
        }
      }
      clearForm();
      setEditEventModal(false);
    }

    const createEvent = async () => {
      const newEvent = {
        name,
        date,
        place,
        description,
        url: '',
      };

      const url = await uploadImage(file);
      newEvent.url = url;
      await createEventAPI(newEvent, localStorage.getItem('token') ?? '');
      const eventsArray = events;
      const newId = events[events.length - 1]?.id ? events[events.length - 1].id + 1 : 1;
      const aux = {
        id: newId,
        event_name: name,
        event_date: date,
        event_location: place,
        event_description: description,
      }
      eventsArray.push(aux);
      setEvents(eventsArray);
      clearForm();
      setCreateEventModal(false);
    }

    const clearForm = () => {
      setName("");
      setDate("");
      setPlace("");
      setDescription("");
      setFile(null);
      setIsFileValid(true);
      setDisabled(true);
    }

    const seeParticipants = (idEvent: number) => {
      setSeeParticipantsModal(true);

      const fetchGetParticipantsEvent = async (idEvent: number) => {
        const data = await (getParticipantsEvent(idEvent));
        setParticipants(data);
      }
      fetchGetParticipantsEvent(idEvent);
    }

    const seeChat = async (idEvent: number) => {
      setSeeChatModal(true);
      const fetchChat = async (idEvent: number) => {
        const data = await getChatByEvent(idEvent);
        // messages: [ { ID_message: 2, ID_user: 11, ID_chat: 1, message: 'HOLA MUNDO' } ]
        setIdEvent(data.chatId)
        setChat(
          data.messages.map((item: {
            ID_user: string;
            message: string;
          }, i: number) => ({
            sender: item.ID_user == idUser ? "Yo" : "Usuario",
            message: item.message,
          })) || []
        )
      }
      await fetchChat(idEvent);
    }

    const deleteEvent = (i: number) => {
      setIdEvent(i);
      setModalConfirm(true);
    }

    const confirmDelete = async () => {
      await deleteEventAPI(idEvent, localStorage.getItem('token') ?? '');
      let aux = events;
      aux = aux.filter((item) => item.id !== idEvent);
      if (aux) {
        setEvents(aux);
      }
      setIdEvent(0);
      setModalConfirm(false);
    }

    const sendMessage = async () => {
      const token = await localStorage.getItem('token') ?? '';
      socket?.emit(`chat message`, {
        sender: idUser,
        message: newMessage,
        chatId: idEvent,
        token: token
      });
      setNewMessage("");
    }
    return (
      (role === 'US_CC' && isClient) ? (
        <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
          <Title center bold mayus>
            Eventos
          </Title>
          <div className="w-[80%] mb-3">
            <div className="w-full md:w-[80vw] block overflow-auto mt-3">
              <table className={`md:min-w-[80vh] md:w-[80vw] md:max-w-[80vw] min-w-[80%] w-[80%] max-w-[80%] bg-palette-2 dark:bg-palette-10 table-auto text-palette-11 dark:text-palette-50 gap-3`}>
                <thead>
                  <tr>
                    {header?.map((item, i) => (
                      <th key={i + 1} scope="col" onClick={item.onClick} className=" p-3 ">
                        <div className="flex content-center items-center">
                          {item.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {
                    events?.map((item, i) => (
                      <tr key={i + 1}>
                        {Object.values(item).map((value, i) => (
                          <td key={i + 1} className=" p-3 ">
                            <div>{String(value)}</div>
                          </td>
                        ))}
                        <td className=" p-3 ">
                          <div className="flex content-center items-center">
                            <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => seeParticipants(item.id)}>Ver participantes</button>
                          </div>
                        </td>
                        <td className=" p-3 ">
                          <div className="flex content-center items-center">
                            <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => seeChat(item.id)}>Ver chat</button>
                          </div>
                        </td>
                        <td className=" p-3 ">
                          <div className="flex content-center items-center">
                            <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => updateEvent(item.id)}>Editar</button>
                          </div>
                        </td>
                        <td className=" p-3 ">
                          <div className="flex content-center items-center">
                            <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => deleteEvent(item.id)}>Eliminar</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          <button className="fixed bottom-4 right-4 bg-palette-500 text-palette-950 rounded-full p-3 hover:bg-palette-600 active:bg-palette-700 shadow-md shadow-palette-11 dark:shadow-palette-50" onClick={() => setCreateEventModal(true)}>CREAR EVENTO</button>

          {createEventModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setCreateEventModal(false)}><Close /></button>
              </div>
              <div className=" bg-palette-50 dark:bg-palette-950 p-4 rounded-lg">
                <Title center bold mayus>
                  Crear evento
                </Title>
                <Imput label="Nombre" value={name} onChange={setName} isValueValid />
                <Imput label="Fecha" type="date" value={date} onChange={setDate} isValueValid />
                <Imput label="Lugar" isValueValid value={place} onChange={setPlace} />
                <Imput label="Descripción" text value={description} onChange={setDescription} isValueValid />
                <input type="file" onChange={handleFileChange} className={`p-2 rounded-lg border-solid border-2 w-full mb-3 focus:outline-none bg-transparent ${isFileValid
                  ? 'border-palette-600 text-palette-600 hover:border-palette-700 hover:text-palette-700 focus:border-palette-800 focus:text-palette-800 disabled:border-palette-300 disabled:text-palette-300 dark:disabled:border-palette-900 dark:disabled:text-palette-900'
                  : 'border-red-500 text-red-500 focus:border-red-500'
                  }`} />
                <Button
                  onClick={() => createEvent()}
                  label="Crear evento"
                  className=""
                  disabled={disabled}
                />
              </div>
            </div>
          )}
          {seeParticipantsModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="absolute top-0 right-0 p-4">
                <button className="text-palette-11 dark:text-palette-1" onClick={() => setSeeParticipantsModal(false)}><Close /></button>
              </div>
              <div className=" bg-palette-50 dark:bg-palette-950 p-4 rounded-lg">
                <Title center bold mayus>
                  Participantes
                </Title>
                <div className="w-[80%]">
                  <div className="w-[80%] md:w-[80vw] block overflow-auto mt-3">
                    <table className={`md:min-w-[80vh] md:w-[80vw] md:max-w-[80vw] min-w-[80%] w-[80%] max-w-[80%] bg-palette-2 dark:bg-palette-10 table-auto text-palette-11 dark:text-palette-50 gap-3`}>
                      <thead>
                        <tr>
                          {headerParticipants?.map((item, i) => (
                            <th key={i + 1} scope="col" onClick={item.onClick} className=" p-3 ">
                              <div className="flex content-center items-center">
                                {item.name}
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          participants?.map((item, i) => (
                            <tr key={i + 1}>
                              <td key={i + 1} className=" p-3 ">
                                <div>{item.name}</div>
                              </td>
                              <td key={i + 1} className=" p-3 ">
                                <div>{item.email}</div>
                              </td>
                              <td key={i + 1} className=" p-3 ">
                                <div>{item.phone}</div>
                              </td>
                              <td key={i + 1} className=" p-3 ">
                                <div>{item.photo || ''}</div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                  Chat - {idEvent}
                </Title>
                <div className="flex flex-col gap-3 flex-1 overflow-auto bg-palette-3 p-4 rounded-lg scroll-smooth">
                  {chat?.map((item, i) => (
                    <Message
                      sender={item.sender}
                      message={item.message}
                      isMine={item.sender === "Yo" || item.sender == `${idUser}`}
                      key={i + 1}
                    />
                  ))}
                </div>
                <div className="flex">
                  <Imput
                    label=""
                    value={newMessage}
                    onChange={setNewMessage}
                    isValueValid
                    divClassName="w-full mr-2"
                  />
                  <Button className="text-palette-11 dark:text-palette-1" onClick={() => sendMessage()} label="Enviar" />
                </div>
              </div>
            </div>
          )}
          {editEventModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="absolute top-0 right-0 p-4">
                <button className="text-palette-11 dark:text-palette-1" onClick={() => {
                  setEditEventModal(false)
                }}><Close /></button>
              </div>
              <div className=" bg-palette-50 dark:bg-palette-950 p-4 rounded-lg">
                <Title center bold mayus>
                  Editar evento
                </Title>
                <Imput label="Nombre" value={name} onChange={setName} isValueValid />
                <Imput label="Fecha" type="date" value={date} onChange={setDate} isValueValid />
                <Imput label="Lugar" isValueValid value={place} onChange={setPlace} />
                <Imput label="Descripción" text value={description} onChange={setDescription} isValueValid />
                <input type="file" onChange={handleFileChange} className={`p-2 rounded-lg border-solid border-2 w-full mb-3 focus:outline-none bg-transparent ${isFileValid
                  ? 'border-palette-600 text-palette-600 hover:border-palette-700 hover:text-palette-700 focus:border-palette-800 focus:text-palette-800 disabled:border-palette-300 disabled:text-palette-300 dark:disabled:border-palette-900 dark:disabled:text-palette-900'
                  : 'border-red-500 text-red-500 focus:border-red-500'
                  }`} />
                <Button
                  onClick={() => HandleUpdateEvent()}
                  label="Crear evento"
                  className=""
                  disabled={!(name !== '' && date !== '' && place !== '' && description !== '')}
                />
              </div>
            </div>
          )}
          {modalConfirm && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="absolute top-0 right-0 p-4">
                <button className="text-palette-11 dark:text-palette-1" onClick={() => setModalConfirm(false)}><Close /></button>
              </div>
              <div className=" bg-palette-50 dark:bg-palette-950 p-4 rounded-lg">
                <Title center bold mayus>
                  ¿Estás seguro de eliminar el evento?
                </Title>
                <div className="flex justify-center gap-3 mt-4">
                  <button className={`bg-green-500 hover:bg-green-600 active:bg-green-700 text-palette-950 p-2 rounded-lg`} onClick={() => { confirmDelete() }}>
                    Si
                  </button>
                  <button className={`bg-red-500 hover:bg-red-600 active:bg-red-700 text-palette-950 p-2 rounded-lg`} onClick={() => {
                    setModalConfirm(false)
                    clearForm()
                  }}>
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
          <Title bold width grid center>
            BLEDBONDS - GESTION DE EVENTOS
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
          BledBonds - Gestión de eventos
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
