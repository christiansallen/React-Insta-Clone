import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  loginChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    const user = this.state.username;
    const userPassword = this.state.password;
    localStorage.setItem("user", user);
    localStorage.setItem("password", userPassword);
    this.setState({ username: "", password: "" });
    window.location.reload();
  };

  render() {
    return (
      <div className="login-container">
        <h1>Instagram</h1>
        <form className="login-form" onSubmit={this.login}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter Username"
              className="login-input"
              name="username"
              value={this.state.username}
              onChange={this.loginChange}
            />
            <input
              type="text"
              placeholder="Password"
              className="login-input"
              name="password"
              value={this.state.password}
              onChange={this.loginChange}
            />
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
