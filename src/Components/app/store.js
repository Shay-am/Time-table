import { configureStore } from "@reduxjs/toolkit";
import termsReducer from "./features/addTerms/addTermsSlice";

export const store = configureStore({
  reducer: {
    terms: termsReducer,
  },
});
