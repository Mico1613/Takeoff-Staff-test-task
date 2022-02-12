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

export type ContactsActionTypes =
  | IContactsLoaded
  | IContactsLoadingBreakWithError
  | IContactsSetData;
