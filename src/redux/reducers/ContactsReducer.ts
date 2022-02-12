import { ContactsActionTypes } from "../types/ContactsActionTypes";
import IContactsData from "../types/IContactsData";

interface IContacts {
  data: IContactsData[];
  isLoaded: boolean;
  errorMessage: string;
}
const initialState: IContacts = {
  data: [],
  isLoaded: false,
  errorMessage: "",
};

export default (
  state = initialState,
  action: ContactsActionTypes
): IContacts => {
  switch (action.type) {
    case "LOADED":
      return { ...state, isLoaded: true };
    case "ON_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
