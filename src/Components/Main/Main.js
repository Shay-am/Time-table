import React from "react";
import styles from "./Main.module.scss";
import { Calendar } from "./Calendar/Calendar";
import { Content } from "./Terms-Content/Content";
const obj = [
  {
    name: "meeting",
    data: "21.09.2021",
    time: "8:00 pm",
    type: "other",
    cykl: "everyday",
  },
  {
    name: "meeting1",
    data: "22.09.2021",
    time: "10:00 pm",
    type: "other2",
    cykl: "week",
  },
];

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Calendar />,
      <Content data={obj} />
    </div>
  );
};
