import React from "react";
import styles from "./Main.module.scss";
// import { Calendar } from "./Calendar/Calendar";
import { Content } from "./Terms-Content/Content";

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Calendar />, */}
      <Content />
    </div>
  );
};
