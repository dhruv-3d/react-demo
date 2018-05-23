import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render(){

    return(
      <div className="login-compo">
        <Link to="/form">Skip to form</Link>
        <div className="login">
          <h3>Login Here</h3>
          <form className="login-form" name="login-form" onSubmit={this.onSubmit}>
            <div className="form-field">
              <label>Username:</label>
              <input type="text" name="username" onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
            <div className="form-field">
              <label>Password:</label>
              <input type="password" name="password" onChange={(e) => this.setState({password: e.target.value})}/>
            </div>
            <input type="submit" name="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginCompo;