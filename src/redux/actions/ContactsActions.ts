import axios from "axios";
import { AppDispatch } from "../store";
import IContactsData from "../types/IContactsData";
interface IContactsAxiosResponse {
  id: number;
  name: string;
  phone: string;
  username: string;
  email: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}

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

export const addContact = (payload: IContactsData) => ({
  type: "ADD_CONTACT",
  payload,
});
export const removeContact = (payload: number) => ({
  type: "REMOVE_CONTACT",
  payload,
});
export const getContacts = () => async (dispatch: AppDispatch) => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    const transformedData = data.data.map((i: IContactsAxiosResponse) => {
      return {
        id: i.id,
        name: i.name,
        email: i.email,
        phone: i.phone,
        city: i.address.city,
        street: i.address.street,
        company: i.company.name,
      };
    });
    dispatch(setData(transformedData));
    dispatch(contactsLoaded);
  } catch (error) {
    dispatch(contactsLoadingBreakWithError((error as Error).message));
  }
};
