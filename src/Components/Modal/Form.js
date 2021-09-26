import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../app/features/addTerms/addTermsSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const terms = useSelector((state) => state.terms);

  const [data, setData] = useState({
    name: "",
    data: "",
    time: "",
    type: "",
    cykl: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add(data));
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={changeHandler}></input>
      <input type="text" name="data" onChange={changeHandler}></input>
      <input type="text" name="time" onChange={changeHandler}></input>
      <input type="text" name="type" onChange={changeHandler}></input>
      <input type="text" name="cykl" onChange={changeHandler}></input>
      <button type="submit">Click</button>
    </form>
  );
};
