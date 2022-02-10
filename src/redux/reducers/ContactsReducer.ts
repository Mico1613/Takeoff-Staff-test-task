import { ContactsActionTypes } from "../types/ContactsActionTypes";
import IContactsData from "../types/IContactsData";

interface IContacts {
  data: IContactsData[];
  isLoading: boolean;
  errorMessage: string;
}
const initialState: IContacts = {
  data: [],
  isLoading: false,
  errorMessage: "",
};

export default (
  state = initialState,
  action: ContactsActionTypes
): IContacts => {
  switch (action.type) {
    case "ON_LOADING":
      return { ...state, isLoading: true };
    case "LOADED":
      return { ...state, isLoading: false };
    case "ON_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
