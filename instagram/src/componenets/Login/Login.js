import React from "react";
import "./Login.css";

const Login = props => {
  return (
    <div className="login-container">
      <h1>Instagram</h1>
      <form className="login-form" onSubmit={props.login}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter Username"
            className="login-input"
          />
          <input type="text" placeholder="Password" className="login-input" />
        </div>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
