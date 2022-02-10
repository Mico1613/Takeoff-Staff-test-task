import React, { useState } from "react";
import ArrowBack from "../ArrowBack";
import styles from "./Registration.module.scss";
import buttonClassesSetter from "../../utils/ButtonClassesSetter";
import useCreateUser from "../../hooks/useCreateUser";

function Registration() {
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const [isAccountExists, setIsAccountExists, isLoading, onCreateUser] =
    useCreateUser(loginInputValue,passwordInputValue,setLoginInputValue,setPasswordInputValue);
  
  React.useEffect(() => {
    if (isAccountExists) {
      setIsAccountExists(false);
    }
  }, [loginInputValue]);


  return (
    <main className={styles.registration}>
      <ArrowBack />
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
      {isAccountExists ? (
        <p className={styles.accountExists}>
          Такой аккаунт уже существует,
          <br /> попробуйте другой логин
        </p>
      ) : null}

      <button
        className={buttonClassesSetter(isLoading, styles)}
        onClick={onCreateUser}
      >
        {isLoading ? <p>Загрузка...</p> : <p>Зарегистрироваться</p>}
      </button>
    </main>
  );
}

export default Registration;
