'use client'

import SectionTitle from "@/app/components/Text/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react"
import Text from "../Text/Text";
import Link from "next/link";
import getAllEventsFuture from "@/app/api/events/getAllEventsFuture";

export default function NextEvents() {

  const [events, setEvents] = useState<{ event_name: string, event_date: string, event_location: string, event_description: string, id: number, eventImageURL: string }[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllEventsFuture();
      setEvents(data);
    }
    fetchEvents();
  }, [])

  const BentoCard = ({ children, className = "", row = 1, col = 1 }: { children: React.ReactNode, className?: string, row?: number, col?: number }) => (
    <div className={`p-2 bg-palette-50 dark:bg-palette-900 text-black flex flex-col justify-center items-center rounded-xl ${className}`}>
      {children}
    </div>
  );

  return (
    <>
      {events.length === 0 ? (
        <SectionTitle bold>
          No hay eventos programados para el momento
        </SectionTitle>
      ) : events.length === 1 ? (
        <div className="w-full h-full grid gap-2 p-4 mt-4 mb-4 grid-cols-1">
          {events.map((event, index) => (
            <BentoCard key={index + 1} className="w-1/2 mx-auto">
              <SectionTitle>{event.event_name}</SectionTitle>
              <Image src={event.eventImageURL} alt="imagen del evento" width={100} height={100} className=" w-3/12" />
              <Link href={`/events/next/${event.id}`} className="mt-4 w-full text-right hover:underline me-4 text-palette-950 dark:text-palette-50">
                VER MAS
              </Link>
            </BentoCard>
          ))}
        </div>
      ) : events.length === 2 ? (
        <div className="w-full h-full grid gap-2 p-4 mt-4 mb-4 grid-cols-1 md:grid-cols-2">
          {events.map((event, index) => (
            <BentoCard key={index + 1}>
              <SectionTitle>{event.event_name}</SectionTitle>
              <Image src={event.eventImageURL} alt="imagen del evento" width={100} height={100} className=" w-3/12" />
              <Link href={`/events/next/${event.id}`} className="mt-4 w-full text-right hover:underline me-4 text-palette-950 dark:text-palette-50">
                VER MAS
              </Link>
            </BentoCard>
          ))}
        </div>
      ) : (
        <div className="w-full h-full grid gap-2 p-4 mt-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <BentoCard key={index + 1} className="px-5">
              <SectionTitle>{event.event_name}</SectionTitle>
              <Image src={event.eventImageURL} alt="imagen del evento" width={100} height={100} className=" w-full" />
              <Link href={`/events/next/${event.id}`} className="mt-4 w-full text-right hover:underline me-4 text-palette-950 dark:text-palette-50">
                VER MAS
              </Link>
            </BentoCard>
          ))}
        </div>
      )}
    </>
  )
}