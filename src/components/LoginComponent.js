import React, { Component } from 'react';
import { login } from './UserFunction'

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
      const { email, password } = this.state;
       this.setState({ submitted: true });
    //    if (email && password) {
    //     this.props.history.push('/student')
    // }else{
    //   console.log('login successful');
    // }

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (email && password) {
        this.props.history.push('/student')
    }else{
      console.log('login successful');
    }
    })
  }



  render() {
    const { email, password, submitted } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="col-md-4 col-lg-4 offset-md-4 log-block">
            <h2>Login</h2>
            <form className="form" onSubmit={this.handleSubmit} >
              <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" className="form-control" name="email" value={this.state.email}
                  onChange={this.handleChange} />
                {submitted && !email &&
                  <div className="help-block" >email is required</div>
                }
              </div>
              <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" className="form-control" name="password" value={this.state.password}
                  onChange={this.handleChange} />
                {submitted && !password &&
                  <div className="help-block">Password is required</div>
                }
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
