import React, { Component } from 'react';
import { studentProfile } from './UserFunction';
import { Link } from 'react-router-dom';


class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentname: '',
      course: '',
      address: '',
      email: '',
      mobileNumber: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    // this.setState({ [e.target.name]: e.target.value });
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { studentname, address, email, mobileNumber } = this.state;
    this.setState({ submitted: true });
    const profileuser = {
      studentname: this.state.studentname,
      address: this.state.address,
      email: this.state.email,
      course: this.state.course,
      mobileNumber: this.state.mobileNumber
    }
    studentProfile(profileuser).then(res => {
      if (studentname && address && email && mobileNumber) {
        this.props.history.push('/student')
        window.alert(`registered successfully`)
      }
    })
  }

  edit(id) {
    debugger;
    console.log(id)
    alert(id);
    fetch('/users/studentProfile/:id', 
        {
          method: 'PUT', 
          headers: {'Content-Type': 'application/json'},

          body: JSON.stringify({
              id: id,
          })
      })
        .then(response => response.text()
        )
        
  }

  render() {
    const { studentname, course, address, email, mobileNumber, submitted } = this.state;
    return (
      <div>
        <div className="conatiner">
          <div className="row">
            <form action="#" className=" form col-md-3 offset-md-9">
              <div class="input-group ">
              </div>
            </form>
            <div className="col-md-3 offset-md-1 ">
              <h3> Edit Student Details</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !studentname ? ' has-error' : '')}>
                  <label For="studentName">Student Name</label>
                  <input type="text" className="form-control" name="studentname" value={this.state.studentname}
                    onChange={this.handleChange} />
                  {submitted && !studentname &&
                    <div className="help-block">Student Name is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !course ? ' has-error' : '')}>
                  <label For="course">Course</label>
                  <select id="myList" name="course" className="form-control"
                    onChange={this.handleChange} >
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                    <option>JQuery</option>
                    <option>ReactJS</option>
                    <option>AngularJS</option>
                    <option>Autocad</option>
                    <option>NodeJS</option>
                  </select>
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
                  <input type="number" className="form-control" name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.handleChange} />
                  {submitted && !mobileNumber &&
                    <div className="help-block">mobile Number is required</div>
                  }
                </div>
                <div className={'form-group'}>
                  <Link type="submit" className="btn btn-primary"  to={`/student`}
                 >Update</Link>
                  <button type="submit" className="btn btn-danger text-center">Cancel</button>
                </div>
              </form>
            </div>
            <div className="col-md-4 offset-md-1">
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Edit;