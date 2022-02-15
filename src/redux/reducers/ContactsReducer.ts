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
    case "ADD_CONTACT":
      return { ...state, data: [...state.data, action.payload] };
    case "REMOVE_CONTACT":
      const filteredArr = state.data.filter((i) => i.id !== action.payload);
      return { ...state, data: filteredArr };
    case "EDIT_CONTACT":
      const editedArr = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        data: [...editedArr],
      };
    default:
      return state;
  }
};
