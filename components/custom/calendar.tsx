'use client'

import FullCalendar from "@fullcalendar/react"
import Daygrid from "@fullcalendar/daygrid"
import Interaction, { DateClickArg } from "@fullcalendar/interaction"
import { ClassAttributes, useEffect, useRef } from "react"
import { CalendarOptions, EventClickArg } from "@fullcalendar/core/index.js"


export const Calendar = () => {

  const ref = useRef(null)

  const handlerEvent = (arg: DateClickArg) => {
    alert(arg.dateStr)
  }

  useEffect(() => {

  },[])

  return (
    <FullCalendar
      ref={ref}
      headerToolbar={{
        start: "today prev next",
        end: "dayGridMonth dayGridWeek dayGridDay",
      }}
      events={[
        { title: "Event 1", date: "2023-09-06" },
        { title: "Event 2", date: "2023-09-06" },
        { title: "Event 2", date: "2023-09-29" },
        { title: "Event 3", date: "2023-09-06", display: "test", color: "red" },
      ]}
      dateClick={handlerEvent}
      plugins={[Daygrid, Interaction]}
    />

  )
}
