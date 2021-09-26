import React from "react";
import styles from "./ListContent.module.scss";

export const List = ({ name, data, time, type, cykl }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>{name}</li>
      <li className={styles.list_item}>{data}</li>
      <li className={styles.list_item}>{time}</li>
      <li className={styles.list_item}>{type}</li>
      <li className={styles.list_item}>{cykl}</li>
    </ul>
  );
};
