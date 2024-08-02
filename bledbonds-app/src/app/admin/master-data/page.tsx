'use client';

import menuEnabled from "@/app/api/menu/menuenabled";
import menuUpdate from "@/app/api/menu/menuUpdate";
import Title from "@/app/components/Text/Title";
import Button from "@/app/UX/button/button";
import React, { useEffect, useState } from "react";

export default function MasterDataPage() {

  const [matches, setMatches] = useState(false);
  const [event, setEvent] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [chat, setChat] = useState(false);
  const [citas_a_ciegas, setCitas_a_ciegas] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      const matchesData = await menuEnabled({ key: 'matches' });

      const eventsData = await menuEnabled({ key: 'events' });
      const calendarData = await menuEnabled({ key: 'calendar' });
      const chatData = await menuEnabled({ key: 'chat' });
      const citas_a_ciegas_data = await menuEnabled({ key: 'ciegas' });

      if (matchesData && matchesData.Valor === '1') {
        setMatches(true);
      }

      if (eventsData && eventsData.Valor === '1') {
        setEvent(true);
      }

      if (calendarData && calendarData.Valor === '1') {
        setCalendar(true);
      }

      if (chatData && chatData.Valor === '1') {
        setChat(true);
      }

      if (citas_a_ciegas_data && citas_a_ciegas_data.Valor === '1') {
        setCitas_a_ciegas(true);
      }

    }
    handleData();
  }, [])

  const handleChange = () => {
    menuUpdate({
      key: 'matches',
      value: (matches ? '1' : '0')
    })
    menuUpdate({
      key: 'events',
      value: (event ? '1' : '0')
    })
    menuUpdate({
      key: 'calendar',
      value: (calendar ? '1' : '0')
    })
    menuUpdate({
      key: 'chat',
      value: (chat ? '1' : '0')
    })
    menuUpdate({
      key: 'ciegas',
      value: (citas_a_ciegas ? '1' : '0')
    })
  }

  return (
    <div className="flex items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <Title center bold mayus>
        Gestion del menu de la app
      </Title>

      <fieldset className="mt-2">
        <div>
          <label className="text-palette-950 dark:text-palette-50">
            <input type="checkbox" checked={matches} onClick={() => setMatches(!matches)} className="mr-3" />
            Matches
          </label>
        </div>
        <div>
          <label className="text-palette-950 dark:text-palette-50">
            <input type="checkbox" checked={event} onClick={() => setEvent(!event)} className="mr-3" />
            Events
          </label>
        </div>
        <div>
          <label className="text-palette-950 dark:text-palette-50">
            <input type="checkbox" checked={calendar} onClick={() => setCalendar(!calendar)} className="mr-3" />
            Calendar
          </label>
        </div>
        <div>
          <label className="text-palette-950 dark:text-palette-50">
            <input type="checkbox" checked={chat} onClick={() => setChat(!chat)} className="mr-3" />
            Chat
          </label>
        </div>
        <div>
          <label className="text-palette-950 dark:text-palette-50">
            <input type="checkbox" checked={citas_a_ciegas} onClick={() => setCitas_a_ciegas(!citas_a_ciegas)} className="mr-3" />
            Citas a ciegas
          </label>
        </div>
        <Button onClick={() => handleChange()} className="w-full mt-2">
          Guardar
        </Button>
      </fieldset>
    </div>
  );
}