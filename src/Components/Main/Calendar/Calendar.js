import React, { useRef } from "react";
import styles from "./Calendar.module.scss";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

import listPlugin from "@fullcalendar/list"; // needed for dayClick

const events = [];

const handle_date_click = (arg) => {
  let calendarApi = arg.view.calendar;
  console.log(calendarApi);
};

export function Calendar() {
  const calendarRef = useRef();
  const handle_event_add = () => {
    let calenadarApi = calendarRef.current;
    return console.log(calenadarApi);
  };

  return (
    <div className={styles.wrapper}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "addEventButton",
          right: "dayGridMonth,timeGridWeek,listWeek",
        }}
        // customButtons={{
        //   addEventButton: {
        //     text: "Add event",
        //     click: function () {
        //       let dateStr = prompt();
        //       let date = new Date(dateStr + "T00:00:00");

        //       calendarRef.addEvent({
        //         title: "dynamic",
        //         start: date,
        //         allDay: true,
        //       });
        //     },
        //   },
        // }}
        initialView="dayGridMonth"
        // select={handle_date_click}
        dateClick={(e) => handle_event_add(e)}
        ref={calendarRef}
      />
    </div>
  );
}
