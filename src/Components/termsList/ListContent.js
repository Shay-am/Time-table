import React from "react";
import styles from "./ListContent.module.scss";

export const List = ({ item }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>{item.name}</li>
      <li className={styles.list_item}>{item.data}</li>
      <li className={styles.list_item}>{item.time}</li>
      <li className={styles.list_item}>{item.type}</li>
      <li className={styles.list_item}>{item.cykl}</li>
    </ul>
  );
};
