import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUsers from "../api/getUsers";

export default function useAuthorization(
  loginInputValue: string,
  passwordInputValue: string
) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const navigate = useNavigate();

  async function onAuthorization() {
    setIsLoading(true);
    const data = await getUsers();
    if (data.length) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (
          element.login === loginInputValue &&
          element.password === passwordInputValue
        ) {
          setIsLoading(false);
          setIsLoggedIn(true);
          navigate("contacts", { replace: false });
        }
      }
      setIsLoading(false);
      setIsLoggedIn(false);
    } else {
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }
  return [isLoading, isLoggedIn, setIsLoggedIn, onAuthorization] as const;
}
