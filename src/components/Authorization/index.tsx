import React, { useState } from "react";
import getUsers from "../../api/getUsers";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { openRegistrationWindow } from "../../redux/actions/LoginActions";
import styles from "./Authorization.module.scss";

type Props = {};

function Authorization({}: Props) {
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const onOpenRegistrationWindow = () => {
    dispatch(openRegistrationWindow);
  };

  const buttonClassesSetter = () => {
    if (isLoading) {
      return `${styles.btn} ${styles.nonActiveBtn}`;
    }
    return styles.btn;
  };

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
          return console.log("Вошли");
        }
      }
      setIsLoading(false);
      return console.log('Не вошли');
    }
  }

  return (
    <main className={styles.login}>
      <input
        type="text"
        placeholder="Логин"
        className={styles.input}
        onChange={(e) => setLoginInputValue(e.target.value)}
        value={loginInputValue}
      />
      <input
        type="password"
        placeholder="Пароль"
        className={styles.input}
        onChange={(e) => setPasswordInputValue(e.target.value)}
        value={passwordInputValue}
      />
      <button className={buttonClassesSetter()} onClick={onAuthorization}>
        {isLoading ? <p>Загрузка...</p> : <p>Войти</p>}
      </button>
      <div className={styles.toRegistration}>
        <p>Нет аккаунта?</p>
        <button onClick={onOpenRegistrationWindow}>Зарегистрируйтесь!</button>
      </div>
    </main>
  );
}

export default Authorization;
