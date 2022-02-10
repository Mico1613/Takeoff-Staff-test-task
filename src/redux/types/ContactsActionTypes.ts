import IContactsData from "./IContactsData";

interface IContactsOnLoading {
  type: "ON_LOADING";
}
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
  | IContactsOnLoading
  | IContactsLoaded
  | IContactsLoadingBreakWithError
  | IContactsSetData;
