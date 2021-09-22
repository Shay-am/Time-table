import React from "react";
import styles from "./Content.module.scss";
import { List } from "../../termsList/ListContent";

// const obj = [
//   {
//     name: "meeting",
//     data: "21.09.2021",
//     time: "8:00 pm",
//     type: "other",
//     cykl: "everyday",
//   },
//   {
//     name: "meeting1",
//     data: "22.09.2021",
//     time: "10:00 pm",
//     type: "other2",
//     cykl: "week",
//   },
// ];

export const Content = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h1>22.09.2021 środa</h1>
      <div className={styles.terms_content}>
        {data.map((item) => {
          return <List item={item} />;
        })}
      </div>
    </div>
  );
};
