import React, { Component } from 'react';
import { login } from './UserFunction';

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
     
    };

    this.handleInputChnage = this.handleInputChnage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChnage(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
   
    login(user).then(res => {

      if (res === "User does not exist") {
        console.log(res);
        // window.location = '/student'; 
        window.alert('invalid user does not exist')
    
      } else if (res === "incorrect password") {
        window.alert('invalid password ')
      }
      else 
        // window.alert('invalid user ') 
        // this.props.history.push('/student')  
       window.location = '/student'; 
    })
  }

  render() {
   
    return (
      <div className="login">
        <div className="container">
          <div className="col-md-4 col-lg-4 offset-md-4 log-block">
            <h2>Login</h2>
            <form className="form" onSubmit={this.handleSubmit} >
              <div className={'form-group' }>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" className="form-control" name="email" value={this.state.email}
                    onChange={this.handleInputChnage} />
                  <div className="help-block text-danger" >{this.state.emailError}</div>
              </div>

              <div className={'form-group' }>
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" className="form-control" name="password" value={this.state.password}
                  onChange={this.handleInputChnage} />
                  <div className="help-block text-danger">{this.state.passwordError}</div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
                <a href="./register" className="btn btn-link text-decoration-none">Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default (LoginComponent)
