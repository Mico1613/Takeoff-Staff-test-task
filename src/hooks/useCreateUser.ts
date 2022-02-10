import React, { useState } from "react";
import createUser from "../api/createUser";
import getUsers from "../api/getUsers";
import { closeRegistrationWindow } from "../redux/actions/LoginActions";
import { useAppDispatch } from "./redux-hooks";

export default function useCreateUser(
  loginInputValue: string,
  passwordInputValue: string,
  setLoginInputValue: React.Dispatch<React.SetStateAction<string>>,
  setPasswordInputValue: React.Dispatch<React.SetStateAction<string>>
) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isAccountExists, setIsAccountExists] = useState(false);

  async function onCreateUser() {
    setIsLoading(true);
    const data = await getUsers();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.login === loginInputValue) {
        setIsAccountExists(true);
        setIsLoading(false);
        return;
      }
    }
    createUser(loginInputValue, passwordInputValue);
    setIsLoading(false);
    setLoginInputValue("");
    setPasswordInputValue("");
    dispatch(closeRegistrationWindow);
    return;
  }

  return [isAccountExists, setIsAccountExists, isLoading, onCreateUser] as const;
}
