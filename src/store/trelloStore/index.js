import { configureStore } from "@reduxjs/toolkit";
import { trelloReducer } from "../authThunk/TrelloSlice";
import { authReducer } from "../authThunk/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trello: trelloReducer,
  },
});
