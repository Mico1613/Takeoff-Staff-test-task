import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { openRegistrationWindow } from "../../redux/actions/LoginActions";
import styles from "./Authorization.module.scss";
import useAuthorization from "../../hooks/useAuthorization";
import buttonClassesSetter from "../../utils/ButtonClassesSetter";
function Authorization() {
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const [isLoading, isLoggedIn, setIsLoggedIn, onAuthorization] =
    useAuthorization(loginInputValue, passwordInputValue);

  const dispatch = useAppDispatch();
  const onOpenRegistrationWindow = () => {
    dispatch(openRegistrationWindow);
  };

  React.useEffect(() => {
    if (isLoggedIn === false) {
      setIsLoggedIn(null);
    }
    return () => {
      setIsLoggedIn(null);
    };
  }, [loginInputValue, passwordInputValue]);


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
      {isLoggedIn === false ? (
        <p className={styles.notLoggedIn}>Неверный логин или пароль</p>
      ) : null}

      <button
        className={buttonClassesSetter(isLoading, styles)}
        onClick={onAuthorization}
      >
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
