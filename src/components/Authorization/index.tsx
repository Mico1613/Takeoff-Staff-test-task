import React from "react";
import styles from "./Authorization.module.scss";
type Props = {};

function Authorization({}: Props) {
  return (
    <main className={styles.login}>
      <input type="text" placeholder="Логин" className={styles.input} />
      <input type="password" placeholder="Пароль" className={styles.input} />
      <button className={styles.btn}>Войти</button>
      <div className={styles.toRegistration}>
        <p>Нет аккаунта?</p>
        <button>Зарегистрируйтесь!</button>
      </div>
    </main>
  );
}

export default Authorization;
