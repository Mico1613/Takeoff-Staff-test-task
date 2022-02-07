import React from "react";
import ArrowBackSvg from "../Svgs/ArrowBack";
import styles from "./Registration.module.scss";

type Props = {};

function Registration({}: Props) {
  return (
    <main className={styles.registration}>
      <i className={styles.svgWrapper}>
        <ArrowBackSvg />
      </i>
      <input type="text" placeholder="Логин" className={styles.input} />
      <input type="text" placeholder="Пароль" className={styles.input} />
      <input
        type="text"
        placeholder="Повторите пароль"
        className={styles.input}
      />
      <button className={styles.btn}>Зарегистрироваться</button>
    </main>
  );
}

export default Registration;
