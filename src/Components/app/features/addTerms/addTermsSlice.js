import { createSlice } from "@reduxjs/toolkit";

const initialTerms = {
  terms: [
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
  ],
};

export const termsSlice = createSlice({
  name: "addTerms",
  initialState: initialTerms,
  reducers: {
    show: (state) => state.terms,
    add: (state, action) => {
      state.terms.push(action.payload);
    },
  },
});

export const { add, show } = termsSlice.actions;
export const activeTerms = (state) => state.terms.terms;
export default termsSlice.reducer;
