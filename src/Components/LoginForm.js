import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="background-form">
        <div className="form-container">
          <p className="logo" />
          <p className="text-center">Welcome Back</p>
          <p className="text-muted text-small">Choose Your Path</p>
          <form>
            <div className="form-group">
              <label htmlFor="emailInput">Email:</label>
              <input
                className="form-control form-control-lg"
                type="email"
                id="emailInput"
                name="email"
                autoComplete="off"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password:</label>
              <input
                className="form-control form-control-lg"
                type="password"
                id="passwordInput"
                name="password"
                autoComplete="off"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
              Continue
            </button>
            <br />
            <div className="text-center">Or</div>
            <br />
            <button className="btn btn-block btn-facebook">Facebook</button>
            <button className="btn btn-block btn-google">Google+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
