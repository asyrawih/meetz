'use client'

import FullCalendar from "@fullcalendar/react"
import Daygrid from "@fullcalendar/daygrid"
import Interaction, { DateClickArg } from "@fullcalendar/interaction"
import TimeGridWeek from "@fullcalendar/timegrid"
import { ClassAttributes, useEffect, useRef, useState } from "react"
import { CalendarOptions, DateSelectArg, DateUnselectArg, EventClickArg, EventInput, EventSourceInput } from "@fullcalendar/core/index.js"


type WithRange = {
  start?: string
  end?: string
}

type Events = WithRange & {
  id: string
  title?: string
  date?: string
}

export const Calendar = () => {

  let events = [
    { id: "1", title: "Event 1", start: "2023-09-06", end: "2023-09-10" },
  ]

  const [event, setEvent] = useState<Events[]>(events)


  const handleRangeSelectedEvenet = async (arg: DateSelectArg) => {
    const min = 1;
    const max = 10000;
    const randomNumber = Math.random() * (max - min + 1) + min;
    const id = randomNumber.toString()

    let newEvent: Events = { id: id, title: `random - ${id}`, start: arg.startStr, end: arg.endStr }
    setEvent(prev => [...prev, newEvent])
    console.log(event)
  }

  const handleUnSelectRange = (arg : DateUnselectArg) => {
    console.log(arg.view)
  }



  return (
    <FullCalendar
      allDaySlot={false}
      headerToolbar={{
        start: "today prev next",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      dragScroll={true}
      events={event}
      editable={true}
      selectable={true}
      select={handleRangeSelectedEvenet}
      unselect={handleUnSelectRange}
      plugins={[Daygrid, Interaction, TimeGridWeek]}
    />
  )
}
