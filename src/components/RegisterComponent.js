import React, { Component } from 'react';
import './index.css';


class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName:'',
      username: '',
      email : '',
      password: '',
      confirmPassword:'',
      mobileNumber:'',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const {firstName, username,email, password,confirmPassword,mobileNumber } = this.state;
     this.setState({ submitted: true });
     if (firstName &&  username && email && password && confirmPassword && mobileNumber) {
      this.props.history.push('/login')
  }
  }
  

  render() {
    const { firstName,username,email,password,confirmPassword,mobileNumber, submitted } = this.state;
    return (
      <div className="background" >
      <div className="container" id="register-form">
      <div className="row" >
      <div className="col-md-4 offset-md-4 reg-block">
        <h3>Register</h3>
        <form className="form"  onSubmit={this.handleSubmit}>
          <div className={'form-group'  + (submitted && !firstName ? ' has-error' : '')}>
            <label For="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName" value={firstName}
             onChange={this.handleChange} />
            {submitted && !firstName &&
              <div className="help-block">First Name is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !username ? ' has-error' : '')}>
            <label For="username">Username</label>
            <input type="text" className="form-control" name="username" value={username} 
             onChange={this.handleChange} />
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !email ? ' has-error' : '')}>
            <label For="email">Email</label>
            <input type="text" className="form-control" name="email" value={email}
             onChange={this.handleChange} />
            {submitted && !email &&
              <div className="help-block">Email is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !password ? ' has-error' : '')}>
            <label For="password">Password</label>
            <input type="password" className="form-control" name="password"  value={password}
             onChange={this.handleChange} />
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !confirmPassword ? ' has-error' : '')}>
            <label For="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword"  value={confirmPassword}
             onChange={this.handleChange} />
            {submitted && !confirmPassword &&
              <div className="help-block">confirmPassword is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !mobileNumber ? ' has-error' : '')}>
            <label For="mobileNumber">Mobile Number</label>
            <input type="text" className="form-control" name="mobileNumber" value={mobileNumber} 
             onChange={this.handleChange} />
            {submitted && !mobileNumber &&
              <div className="help-block">mobile Number is required</div>
            }
          </div>
          <div className={'form-group' }>
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