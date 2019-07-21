import React, { Component } from 'react';
import { register } from './UserFunction'
import './index.css';


class RegisterComponent extends Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobileNumber: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // const { name, value } = e.target;
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { firstname, username, email, password, confirmPassword, mobileNumber } = this.state;
    this.setState({ submitted: true });
    // if (firstName && username && email && password && confirmPassword && mobileNumber) {
    //   this.props.history.push('/login');

    // }
    const user = {
      firstname: this.state.firstname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      mobileNumber: this.state.mobileNumber
    }
    register(user).then(res => {
      if (firstname && username && email && password && confirmPassword && mobileNumber) {
        this.props.history.push('/login')
      }
    })
  }



  render() {
    const { firstname, username, email, password, confirmPassword, mobileNumber, submitted } = this.state;
    return (
      <div className="background" >
        <div className="container" id="register-form">
          <div className="row" >
            <div className="col-md-4 offset-md-4 reg-block">
              <h3>Register</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !firstname ? ' has-error' : '')}>
                  <label For="firstname">First Name</label>
                  <input type="text" className="form-control" name="firstname" value={this.state.firstname}
                    onChange={this.handleChange} />
                  {submitted && !firstname &&
                    <div className="help-block">First Name is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                  <label For="username">Username</label>
                  <input type="text" className="form-control" name="username" value={this.state.username}
                    onChange={this.handleChange} />
                  {submitted && !username &&
                    <div className="help-block">Username is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                  <label For="email">Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.email}
                    onChange={this.handleChange} />
                  {submitted && !email &&
                    <div className="help-block">Email is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label For="password">Password</label>
                  <input type="password" className="form-control" name="password" value={this.state.password}
                    onChange={this.handleChange} />
                  {submitted && !password &&
                    <div className="help-block">Password is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !confirmPassword ? ' has-error' : '')}>
                  <label For="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword}
                    onChange={this.handleChange} />
                  {submitted && !confirmPassword &&
                    <div className="help-block">confirmPassword is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !mobileNumber ? ' has-error' : '')}>
                  <label For="mobileNumber">Mobile Number</label>
                  <input type="text" className="form-control" name="mobileNumber" value={this.state.mobileNumber}
                    onChange={this.handleChange} />
                  {submitted && !mobileNumber &&
                    <div className="help-block">mobile Number is required</div>
                  }
                </div>
                <div className={'form-group'}>
                  <button type="submit" className="btn btn-primary">Register</button>
                  <a href="./index" className="btn btn-link text-decoration-none">Cancel</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default (RegisterComponent);

