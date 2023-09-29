'use client'

import FullCalendar from "@fullcalendar/react"
import Daygrid from "@fullcalendar/daygrid"
import { useRef } from "react"
import { CalendarOptions } from "@fullcalendar/core/index.js"


export const Calendar = () => {

  return (
    <FullCalendar
      headerToolbar={{
        start: "today prev next",
        end: "dayGridMonth dayGridWeek dayGridDay",
      }}
      plugins={[Daygrid]} />
  )
}
