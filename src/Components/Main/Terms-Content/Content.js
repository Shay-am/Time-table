import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import { List } from "../../termsList/ListContent";
import { Form } from "../../Modal/Form";
import { useSelector, useDispatch } from "react-redux";
import { show, activeTerms } from "../../app/features/addTerms/addTermsSlice";

export const Content = () => {
  // const terms = useSelector((state) => state.terms.terms);
  const terms = useSelector(activeTerms);

  useEffect(() => {
    console.log("tests");
  }, [terms]);
  const dispatch = useDispatch();
  console.log(terms);

  return (
    <>
      <Form />
      <div className={styles.wrapper}>
        <h1>22.09.2021 środa</h1>
        {terms.map((term) => {
          return <List key={term.name} {...term} />;
        })}
        <button onClick={() => dispatch(show())}>click me</button>
      </div>
    </>
  );
};
