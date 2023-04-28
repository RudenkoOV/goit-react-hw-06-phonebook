import { configureStore, createReducer } from "@reduxjs/toolkit";

// import { rootReducer } from "./reducer";

const myReducer = createReducer(1000, {});

export const store = configureStore({
  reducer: {
    contacts: [],
    filter: myReducer
  },
});