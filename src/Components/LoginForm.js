import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputchange = this.handleInputchange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputchange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    // TODO Make form submit to the backend
    console.log(`Email: ${this.state.email}, Password: ${this.state.password}`);
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="background-form">
        <div className="form-container">
          <p className="logo" />
          <p className="text-center">Welcome Back</p>
          <p className="text-muted text-small">Choose Your Path</p>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="emailInput">Email:</label>
              <input
                className="form-control form-control-lg"
                type="email"
                id="emailInput"
                name="email"
                autoComplete="off"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputchange}
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
                value={this.state.password}
                onChange={this.handleInputchange}
                required
              />
            </div>
            <button type="submit" className="btn btn-toggle btn-block">
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
