import React from "react";
import Authorization from "../../components/Authorization";
import Registration from "../../components/Registration";
import { useAppSelector } from "../../hooks/redux-hooks";

type Props = {};

function Login({}: Props) {
  const { isRegistrationWindowOpen } = useAppSelector(
    (state) => state.LoginReducer
  );

  return <>{isRegistrationWindowOpen ? <Registration /> : <Authorization />}</>;
}

export default Login;
