import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

function LoginPage(props) {
  return (
    <div>
      <Header />
      <h1>Login now</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;