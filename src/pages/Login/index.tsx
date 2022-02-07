import React from "react";
import Authorization from "../../components/Authorization";
import Registration from "../../components/Registration";

type Props = {};

function Login({}: Props) {
  return <>{false ? <Authorization /> : <Registration />}</>;
}

export default Login;
