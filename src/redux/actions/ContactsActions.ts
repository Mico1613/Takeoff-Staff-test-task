import axios from "axios";
import { AppDispatch } from "../store";
import IContactsData from "../types/IContactsData";

export const contactsOnLoading = {
  type: "ON_LOADING",
};

export const contactsLoaded = {
  type: "LOADED",
};

export const contactsLoadingBreakWithError = (payload: string) => ({
  type: "ON_ERROR",
  payload,
});

export const setData = (payload: IContactsData[]) => ({
  type: "SET_DATA",
  payload,
});

export const getContacts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contactsOnLoading);
    const data = await axios.get<IContactsData[]>("https://jsonplaceholder.typicode.com/users");
    dispatch(setData(data.data));
    dispatch(contactsLoaded);
  } catch (error) {
    dispatch(contactsLoadingBreakWithError((error as Error).message));
  }
};
