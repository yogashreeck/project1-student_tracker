import React, { Component } from 'react';
import { login } from './UserFunction'

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
     
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let reg_pwd = /^[@#*&_%$!][A-Za-z0-9]{4}$/;
    let reg_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    let t = 0;
    if (!this.state.email) this.setState({ emailError: 'Email is required' });
    else if (!reg_email.test(this.state.email)) this.setState({ emailError: 'Invalid Email' });
    else {
      t++;
      this.setState({ emailError: '' });
    }

    if (!this.state.password) this.setState({ passwordError: 'Password is required' });
    else if (!reg_pwd.test(this.state.password)) this.setState({ passwordError: 'Password should standerd format' });
    else {
      t++;
      this.setState({ passwordError: '' });
    }
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (res) {
        window.location = '/student';    
    }else{
      console.log('login successful');
    }
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
                    onChange={this.handleChange} />
                  <div className="help-block text-danger" >{this.state.emailError}</div>
              </div>

              <div className={'form-group' }>
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" className="form-control" name="password" value={this.state.password}
                  onChange={this.handleChange} />
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
