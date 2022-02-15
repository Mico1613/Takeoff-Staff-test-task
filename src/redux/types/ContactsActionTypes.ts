import IContactsData from "./IContactsData";

interface IContactsLoaded {
  type: "LOADED";
}
interface IContactsLoadingBreakWithError {
  type: "ON_ERROR";
  payload: string;
}
interface IContactsSetData {
  type: "SET_DATA";
  payload: IContactsData[];
}
interface IContactsAddContact {
  type: "ADD_CONTACT";
  payload: IContactsData;
}
interface IContactsRemoveContact {
  type: "REMOVE_CONTACT";
  payload: number;
}
export type ContactsActionTypes =
  | IContactsLoaded
  | IContactsLoadingBreakWithError
  | IContactsSetData
  | IContactsAddContact
  | IContactsRemoveContact;
