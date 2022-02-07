import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";

export const store = configureStore({
  reducer: {
    LoginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
