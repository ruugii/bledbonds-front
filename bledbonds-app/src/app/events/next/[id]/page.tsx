'use client';

import getEventsById from "@/app/api/events/getEventsById";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import { useEffect, useState } from "react";

interface NextEventsParams {
  id: string;
}

export default function GetEventsByIdPage({ params }: { params: NextEventsParams }) {

  const [event, setEvent] = useState<{
    id: number;
    event_name: string;
    event_date: string;
    event_location: string;
    event_description: string;
  }>();

  const [eventDate, setEventDate] = useState<Date>(new Date());

  useEffect(() => {
    getEventsById(params.id).then((data) => {
      if (data[0].event_date && data[0].event_description && data[0].event_location && data[0].event_name) {
        setEvent({
          id: data[0].id,
          event_name: data[0].event_name.replaceAll("\n", "<br />"),
          event_date: data[0].event_date,
          event_location: data[0].event_location.replaceAll("\n", "<br />"),
          event_description: data[0].event_description.replaceAll("\n", "<br />"),
        })
      }
    })
  }, [])

  useEffect(() => {
    if (event) {
      setEventDate(new Date(event.event_date));
    }
  }, [event])

  return (
    <div className="items-center content-center justify-center bg-palette-3 dark:bg-palette-11 flex-col">
      <div className="w-[80%] my-4 mx-auto">
        <Title bold width grid center mayus>
          {event?.event_name}
        </Title>
        <Text left bold className=" mt-2">
          {eventDate.toLocaleDateString()}
        </Text>
        <Text left bold className=" mt-2">
          {event?.event_location}
        </Text>
        <Text left className=" mt-2">
          {event?.event_description}
        </Text>
      </div>
    </div>
  )
}
