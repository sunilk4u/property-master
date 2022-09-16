import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/AuthForm/LoginForm";

const Login = () => {
  return (
    <Fragment>
      <Header />
      <LoginForm />
    </Fragment>
  );
};

export default Login;
