import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoslice from "./todoslice/todoslice";

export const reducers = combineReducers({
  data: todoslice,
});

export const store = configureStore({
  reducer: reducers,
});
