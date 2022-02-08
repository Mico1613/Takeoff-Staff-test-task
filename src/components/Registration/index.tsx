import React, { useState } from "react";
import createUser from "../../api/createUser";
import getUsers from "../../api/getUsers";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { closeRegistrationWindow } from "../../redux/actions/LoginActions";
import ArrowBackSvg from "../Svgs/ArrowBackSvg";
import styles from "./Registration.module.scss";

type Props = {};

function Registration({}: Props) {
  const dispatch = useAppDispatch();
  const onCloseRegistrationWindow = () => {
    dispatch(closeRegistrationWindow);
  };
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const buttonClassesSetter = () => {
    if (isLoading) {
      return `${styles.btn} ${styles.nonActiveBtn}`;
    }
    return styles.btn;
  };

  async function onCreateUser() {
    let isAccountExists = false;
    setIsLoading(true);
    const data = await getUsers();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.login === loginInputValue) {
        isAccountExists = true;
      }
    }
    if (!isAccountExists) {
      createUser(loginInputValue, passwordInputValue);
      setIsLoading(false);
      return console.log("Zaregan");
    }
    setIsLoading(false);
    return console.log("Ne zaregan");
  }
  return (
    <main className={styles.registration}>
      <i className={styles.svgWrapper}>
        <button onClick={onCloseRegistrationWindow}>
          <ArrowBackSvg />
        </button>
      </i>
      <input
        type="text"
        placeholder="Логин"
        className={styles.input}
        onChange={(e) => setLoginInputValue(e.target.value)}
        value={loginInputValue}
      />
      <input
        type="text"
        placeholder="Пароль"
        className={styles.input}
        onChange={(e) => setPasswordInputValue(e.target.value)}
        value={passwordInputValue}
      />
      <button className={buttonClassesSetter()} onClick={onCreateUser}>
        {isLoading ? <p>Загрузка...</p> : <p>Зарегистрироваться</p>}
      </button>
    </main>
  );
}

export default Registration;
