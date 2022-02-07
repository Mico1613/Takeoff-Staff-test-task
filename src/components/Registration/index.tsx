import React from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { closeRegistrationWindow } from "../../redux/actions/LoginActions";
import ArrowBackSvg from "../Svgs/ArrowBack";
import styles from "./Registration.module.scss";

type Props = {};

function Registration({}: Props) {
  const dispatch = useAppDispatch();
  const onCloseRegistrationWindow = () => {
    dispatch(closeRegistrationWindow);
  };
  return (
    <main className={styles.registration}>
      <i className={styles.svgWrapper}>
        <button onClick={onCloseRegistrationWindow}>
          <ArrowBackSvg />
        </button>
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
