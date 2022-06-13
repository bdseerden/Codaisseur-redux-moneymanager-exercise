// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
