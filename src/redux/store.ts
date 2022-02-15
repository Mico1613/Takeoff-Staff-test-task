import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";
import ContactsReducer from "./reducers/ContactsReducer";

export const store = configureStore({
  reducer: {
    LoginReducer,
    ContactsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
