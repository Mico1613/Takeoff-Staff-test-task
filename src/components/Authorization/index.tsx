import React from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { openRegistrationWindow } from "../../redux/actions/LoginActions";
import styles from "./Authorization.module.scss";
type Props = {};

function Authorization({}: Props) {
  const dispatch = useAppDispatch();
  const onOpenRegistrationWindow = () => {
    dispatch(openRegistrationWindow);
  };
  return (
    <main className={styles.login}>
      <input type="text" placeholder="Логин" className={styles.input} />
      <input type="password" placeholder="Пароль" className={styles.input} />
      <button className={styles.btn}>Войти</button>
      <div className={styles.toRegistration}>
        <p>Нет аккаунта?</p>
        <button onClick={onOpenRegistrationWindow}>Зарегистрируйтесь!</button>
      </div>
    </main>
  );
}

export default Authorization;
