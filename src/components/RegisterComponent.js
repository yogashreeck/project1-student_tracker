import React, { Component } from 'react';
import { register } from './UserFunction'
import './index.css';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobileNumber: '',
      fnameError: '',
      lnameError: '',
      emailError: '',
      passwordError: '',
      confirmError: '',
      mobileError: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    debugger;
    event.preventDefault();

    let reg_user = /^[A-Za-z]/;
    let reg_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/;
    let reg_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    let reg_mobile = /^[897][0-9]{9}/;

    let t = 0;
    if (!this.state.firstname) this.setState({ fnameError: 'Firstname is required' });
    else if (!reg_user.test(this.state.firstname)) this.setState({ fnameError: 'Invalid Firstname' });
    else {
      t++;
      this.setState({ fnameError: '' });
    }

    if (!this.state.username) this.setState({ userError: 'Username is required' });
    else if (!reg_user.test(this.state.username)) this.setState({ userError: 'Invalid Username' });
    else {
      t++;
      this.setState({ userError: '' });
    }
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
    if (!this.state.confirmPassword) this.setState({ confirmError: 'ConfirmPassword is required' });
    else if (!reg_pwd.test(this.state.password)) this.setState({ confirmError: 'Password not matched' });
    else {
      t++;
      this.setState({ confirmError: '' });
    }
    if (!this.state.mobileNumber) this.setState({ mobileError: 'mobile Number is required' });
    else if (!reg_mobile.test(this.state.mobileNumber)) this.setState({ mobileError: 'invalid mobile number' });
    else {
      t++;
      this.setState({ mobileError: '' });
    }
    const newUser = {
      firstname: this.state.firstname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      mobileNumber: this.state.mobileNumber
    }
    register(newUser).then(res => {
      if (t > 5) {
        window.alert(`registered successfully`)
        this.props.history.push('/login')
      }
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div className="background" >
        <div className="container" id="register-form">
          <div className="row" >
            <div className="col-md-4 offset-md-4 reg-block">
              <h3>Register</h3>
              <form className="form" onSubmit={this.handleSubmit} >

                <div className={'form-group'}>
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" className="form-control" name="firstname"
                    onChange={this.handleChange} />
                  <div className="help-block  text-danger">{this.state.fnameError}</div>
                </div>

                <div className={'form-group'}>
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username"
                    onChange={this.handleChange} />
                  <div className="help-block text-danger">{this.state.userError}</div>
                </div>

                <div className={'form-group'}>
                  <label htmlFor="email">Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.email}
                    onChange={this.handleChange} />
                  <div className="help-block text-danger">{this.state.emailError}</div>
                </div>

                <div className={'form-group'}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" value={this.state.password}
                    onChange={this.handleChange} />
                  <div className="help-block text-danger">{this.state.passwordError}</div>
                </div>

                <div className={'form-group'}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword}
                    onChange={this.handleChange} />
                  <div className="help-block text-danger">{this.state.confirmError}</div>
                </div>

                <div className={'form-group'}>
                  <label htmlFor="email">Mobile Number</label>
                  <input type="number" className="form-control" name="mobileNumber" value={this.state.mobileNumber}
                    onChange={this.handleChange} />
                  <div className="help-block text-danger">{this.state.mobileError}</div>
                </div>

                <div className={'form-group'}>
                  <button type="submit" className="btn btn-primary">Register</button>
                  <a href="./" className="btn btn-link text-decoration-none">Cancel</a>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default (RegisterComponent);