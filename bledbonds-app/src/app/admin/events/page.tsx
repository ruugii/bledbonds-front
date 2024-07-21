'use client';

import Table from "@/app/components/Table";
import Title from "@/app/components/Text/Title";
import Close from "@/app/Icons/close";
import Button from "@/app/UX/button/button";
import Imput from "@/app/UX/imput/imput";
import { useEffect, useState } from "react";
import Message from "./component/Message";

import { io } from "socket.io-client";

export default function EventsPage() {

  const host = window.location.host;

  if (host.includes('localhost:3000')) {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
      const socket = io('http://localhost:3001');
      setSocket(socket);
    }, []);

    const [createEventModal, setCreateEventModal] = useState(false);
    const [name, setName] = useState("");
    const [date, setDate] = useState('');
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(); // Changed to null
    const [isFileValid, setIsFileValid] = useState(true);
    const [disabled, setDisabled] = useState(true);

    const [seeParticipantsModal, setSeeParticipantsModal] = useState(false);
    const [seeChatModal, setSeeChatModal] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [editEventModal, setEditEventModal] = useState(false);
    const [idEvent, setIdEvent] = useState(0);
    const [modalConfirm, setModalConfirm] = useState(false);
    const [idUser, setIdUser] = useState(sessionStorage.getItem('idUser') || Math.random() * 100);
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
      { name: "Nombre", onClick: () => console.log("Ordenar por nombre") },
      { name: "Fecha", onClick: () => console.log("Ordenar por fecha") },
      { name: "Lugar", onClick: () => console.log("Ordenar por lugar") },
      { name: "Descripción", onClick: () => console.log("Ordenar por descripción") },
      { name: "Ver participantes", onClick: () => console.log("Ver participantes") },
      { name: "Ver chat", onClick: () => console.log("Ver chat") },
      { name: "Editar", onClick: () => console.log("Editar") },
      { name: "Eliminar", onClick: () => console.log("Eliminar") },
    ])

    useEffect(() => {
      if (file && description && name && place && date) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }, [file, description, name, place, date]);

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };

    const updateEvent = (id) => {
      setName(events[id].name)
      setDate(events[id].date)
      setPlace(events[id].place)
      setDescription(events[id].description)
      setIdEvent(id)
      setEditEventModal(true)
    }

    const updateEventFunction = () => {
      const newEvent = {
        name,
        date,
        place,
        description,
      };

      events[idEvent] = newEvent;
      clearForm();
      setEditEventModal(false);
    }

    const [events, setEvents] = useState([
      {
        name: "Evento 1",
        date: "2021-12-31",
        place: "Lugar 1",
        description: "Descripción 1",
      },
      {
        name: "Evento 2",
        date: "2021-12-31",
        place: "Lugar 2",
        description: "Descripción 2",
      },
      {
        name: "Evento 3",
        date: "2021-12-31",
        place: "Lugar 3",
        description: "Descripción 3",
      },
    ]);

    const createEvent = () => {
      const newEvent = {
        name,
        date,
        place,
        description,
      };

      setEvents([...events, newEvent]);
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

    const seeParticipants = (idEvent) => {
      setSeeParticipantsModal(true);
      // const participants = getParticipants(idEvent);
      // setParticipants(participants);
      const aux = [...participants];
      for (let i = 0; i < aux.length; i++) {
        aux[i].email = `${idEvent}_${aux[i].name}@gmail.com`;
      }
      setParticipants(aux);
    }

    const seeChat = (idEvent) => {
      setSeeChatModal(true);
      setIdEvent(idEvent);
      // const chat = getChat(idEvent);
      // setChat(chat);
    }

    const deleteEvent = (i) => {
      setIdEvent(i);
      setModalConfirm(true);
    }

    const confirmDelete = () => {
      events.splice(idEvent, 1);
      setModalConfirm(false);
    }

    useEffect(() => {
      console.log(chat);

      socket?.on(`chat message`, (msg) => {
        if (idEvent === msg.chatId) {
          setChat([...chat, msg]);
        }
      });
    }, [socket, chat, idEvent]);

    const sendMessage = () => {
      socket?.emit(`chat message`, {
        sender: idUser,
        message: newMessage,
        chatId: idEvent,
      });
      setNewMessage("");
    }

    return (
      <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
        <Title center bold mayus>
          Eventos
        </Title>
        <div className="w-[80%]">
          <div className="w-[80%] md:w-[80vw] block overflow-auto mt-3">
            <table className={`md:min-w-[80vh] md:w-[80vw] md:max-w-[80vw] min-w-[80%] w-[80%] max-w-[80%] bg-palette-2 dark:bg-palette-10 table-auto text-palette-11 dark:text-palette-50 gap-3`}>
              <thead>
                <tr>
                  {header?.map((item, i) => (
                    <th key={i} scope="col" onClick={item.onClick} className=" p-3 ">
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
                    <tr key={i}>
                      {Object.values(item).map((value, i) => (
                        <td key={i} className=" p-3 ">
                          <div>{String(value)}</div>
                        </td>
                      ))}
                      <td className=" p-3 ">
                        <div className="flex content-center items-center">
                          <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => seeParticipants(i)}>Ver participantes</button>
                        </div>
                      </td>
                      <td className=" p-3 ">
                        <div className="flex content-center items-center">
                          <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => seeChat(i)}>Ver chat</button>
                        </div>
                      </td>
                      <td className=" p-3 ">
                        <div className="flex content-center items-center">
                          <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => updateEvent(i)}>Editar</button>
                        </div>
                      </td>
                      <td className=" p-3 ">
                        <div className="flex content-center items-center">
                          <button className="text-palette-950 dark:text-palette-50 hover:underline" onClick={() => deleteEvent(i)}>Eliminar</button>
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
              <button onClick={() => setCreateEventModal(false)}>X</button>
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
              <Table header={[{
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
                name: "Dirección",
                onClick: () => console.log("Ordenar por dirección"),
              },
              {
                name: "Foto",
                onClick: () => console.log("Ordenar por foto"),
              }]} data={participants} />
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
                    key={i}
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
                <Button className="" onClick={() => sendMessage()} label="Enviar" />
              </div>
            </div>
          </div>
        )}
        {editEventModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="absolute top-0 right-0 p-4">
              <button onClick={() => {
                setEditEventModal(false)
              }}>X</button>
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
                onClick={() => updateEventFunction()}
                label="Crear evento"
                className=""
                disabled={disabled}
              />
            </div>
          </div>
        )}
        {modalConfirm && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="absolute top-0 right-0 p-4">
              <button className="text-palette-11 dark:text-palette-1" onClick={() => setSeeParticipantsModal(false)}><Close /></button>
            </div>
            <div className=" bg-palette-50 dark:bg-palette-950 p-4 rounded-lg">
              <Title center bold mayus>
                ¿Estás seguro de eliminar el evento?
              </Title>
              <div className="flex justify-center gap-3">
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
    );
  } else {
    return (
      <div className="min-h-screen flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
        <Title center bold mayus>
          Eventos - Estamos trabajando en ello
        </Title>
      </div>
    );
  }
}
