import React from "react";
import Authorization from "../../components/Authorization";
import Registration from "../../components/Registration";
import { useAppSelector } from "../../hooks/redux-hooks";
import styles from "./Login.module.scss";
type Props = {};

function Login({}: Props) {
  const { isRegistrationWindowOpen } = useAppSelector(
    (state) => state.LoginReducer
  );

  return (
    <div className={styles.wrapper}>
      {isRegistrationWindowOpen ? <Registration /> : <Authorization />}
    </div>
  );
}

export default Login;
