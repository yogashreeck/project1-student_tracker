import React, { Component } from 'react';
// import './register.css';


class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName:'',
      lastName:'',
      username: '',
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
    const {firstName,lastName, username, password,confirmPassword,mobileNumber } = this.state;
     this.setState({ submitted: true });
     if (firstName && lastName && username && password && confirmPassword && mobileNumber) {
      this.props.history.push('/login')
  }
  }
  

  render() {
    const { firstName,lastName,username,password,confirmPassword,mobileNumber, submitted } = this.state;
    return (
      <div className="register">
      <div className="col-md-3 reg-block">
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
          <div className={'form-group'  + (submitted && !lastName ? ' has-error' : '')}>
            <label For="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={lastName}
             onChange={this.handleChange} />
            {submitted && !lastName &&
              <div className="help-block">Last Name is required</div>
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
            <a href="./login" className="btn btn-link text-decoration-none">Cancel</a>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default (RegisterComponent);