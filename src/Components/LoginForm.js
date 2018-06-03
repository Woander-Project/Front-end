import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="background-form">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="emailInput">Email:</label>
            <input
              className="form-control"
              type="email"
              id="emailInput"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="usernameInput">Username:</label>
            <input
              className="form-control"
              type="text"
              id="usernameInput"
              name="username"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password:</label>
            <input
              className="form-control"
              type="password"
              id="passwordInput"
              name="password"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
