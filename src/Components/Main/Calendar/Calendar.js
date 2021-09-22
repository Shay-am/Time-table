import React from "react";
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

// const handle_event_add = () => {};

export function Calendar() {
  return (
    <div className={styles.wrapper}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        }}
        initialView="dayGridMonth"
        select={handle_date_click}
        // dateClick={(e) => handle_date_click(e)}
      />
    </div>
  );
}
