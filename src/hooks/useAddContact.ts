import { useState } from "react";
import { addContact } from "../redux/actions/ContactsActions";
import { useAppDispatch } from "./redux-hooks";

export default function useAddContact(
  setIsOpenedWindow: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    company: "",
  });

  const handleChange = (event: any) => {
    const name = event.target?.name;
    const value = event.target?.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    let isAllFieldsFilled = true;
    for (let key in formValue) {
      const el = formValue[key as keyof typeof formValue];
      if (!el) {
        isAllFieldsFilled = false;
      }
    }
    if (isAllFieldsFilled) {
      dispatch(
        addContact({
          id: Math.random() * 10 + Math.random() * 10,
          ...formValue,
        })
      );
      setIsOpenedWindow(false);
    }
  };
  return [formValue, handleChange, handleSubmit] as const;
}
