import { useState } from "react";
import IContactsData from "../redux/types/IContactsData";

export default function useAddContact(item: IContactsData) {
  const [formValue, setFormValue] = useState({
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    city: item.city,
    street: item.street,
    company: item.company,
  });

  const handleChange = (event: any) => {
    const name = event.target?.name;
    const value = event.target?.value;
    setFormValue({ ...formValue, [name]: value });
  };

  return [formValue, handleChange] as const;
}
