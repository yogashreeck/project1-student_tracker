import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import { studentProfile } from './UserFunction'

class StudentComponent extends Component {
  constructor() {
    super();

    this.state = {
      studentname: '',
      address: '',
      email: '',
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
    const { studentname,  address, email, mobileNumber } = this.state;
    this.setState({ submitted: true });
    const profileuser = {
      studentname: this.state.studentname,
       address: this.state. address,
      email: this.state.email,
      mobileNumber: this.state.mobileNumber
    }
    studentProfile(profileuser).then(res => {
      if (studentname &&  address && email && mobileNumber) {
        this.props.history.push('/student')
      }
    })
  }
  render() {
    const { studentname, address, email, mobileNumber, submitted } = this.state;
    return (
      <div>
        <div className="conatiner">

          <div className="row">
            <form action="#" className=" form col-md-3 offset-md-8">
              <div class="input-group ">
                <input type="text" class="form-control" placeholder='Enter Student Name' />
                <div className="input-group-append">
                  <button class="btn btn-primary" type="button">Search</button>
                </div>
              </div>
            </form>



            <div className="col-md-4 offset-md-2 ">
              <h3>Student's Register Form</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !studentname ? ' has-error' : '')}>
                  <label For="student Name">Student Name</label>
                  <input type="text" className="form-control" name="studentname" value={this.state.studentname}
                    onChange={this.handleChange} />
                  {submitted && !studentname &&
                    <div className="help-block">Student Name is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
                  <label For="address">Address</label>
                  <input type="text" className="form-control" name="address" value={this.state.address}
                    onChange={this.handleChange} />
                  {submitted && !address &&
                    <div className="help-block">Address is required</div>
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
                <div className={'form-group' + (submitted && !mobileNumber ? ' has-error' : '')}>
                  <label For="mobileNumber">Mobile Number</label>
                  <input type="text" className="form-control" name="mobileNumber" value={this.state.mobileNumber}
                    onChange={this.handleChange} />
                  {submitted && !mobileNumber &&
                    <div className="help-block">mobile Number is required</div>
                  }
                </div>
                <div className={'form-group'}>
                  <button type="submit" className="btn btn-primary">Create</button>
                  <a href="./index" className="btn btn-link text-decoration-none">Cancel</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <StudentProfile />
      </div>
    );
  }
}

export default StudentComponent;