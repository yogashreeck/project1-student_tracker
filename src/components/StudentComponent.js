import React, { Component } from 'react';
import { studentProfile } from './UserFunction';
import RepoList from './ RepoList'

class StudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentname: '',
      course: '',
      address: '',
      email: '',
      mobileNumber: '',
      repos: [],
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSearch = (user) => {
    console.log(user);
    let url = 'http://localhost:8000/users/studentProfile?studentname=' + user
    fetch(url)
    .then(response => response.json()).then((repos) => {
        console.log(repos);
        console.log(repos.length);
        this.setState({
          repos: repos
        });
      });
  };


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
        window.alert(`registered successfully`)
        window.location = '/student';  
      }
    })
  }

  render() {
    const { studentname, course, address, email, mobileNumber, submitted } = this.state;
    return (
      <div>
        <div className="conatiner">
          <div className="row">
            <div className="col-md-3 offset-md-8">
            <form action="#" className=" form">
              <div className="input-group ">
                <SearchBar handleSubmit={this.handleSearch} />
              </div>
            </form>
            </div>
            <div className="col-md-3 offset-md-1 ">
              <h3>Student's Register Form</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !studentname ? ' has-error' : '')}>
                  <label htmlFor="studentName">Student Name</label>
                  <input type="text" className="form-control" name="studentname"
                   value={this.state.studentname}
                    onChange={this.handleChange} />
                  {submitted && !studentname &&
                    <div className="help-block">Student Name is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !course ? ' has-error' : '')}>
                  <label htmlFor="course">Course</label>
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
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" name="address" value={this.state.address}
                    onChange={this.handleChange} />
                  {submitted && !address &&
                    <div className="help-block">Address is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" value={this.state.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"   onChange={this.handleChange} />
                  {submitted && !email &&
                    <div className="help-block">Email is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !mobileNumber ? ' has-error' : '')}>
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input type="number" className="form-control" name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.handleChange} />
                  {submitted && !mobileNumber &&
                    <div className="help-block">mobile Number is required</div>
                  }
                </div>
                <div className={'form-group'}>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <RepoList repos={this.state.repos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    this.props.handleSubmit(text);
  };

  render() {
    return (
      <div>
        <h6>Search Registered Student's </h6>
      <form onSubmit={this.handleSubmit} className=" form ">
        <div class="input-group ">
          <input name="text" type="text" class="form-control"  
            placeholder='Enter Student Name' />
          <div className="input-group-append">
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}



export default StudentComponent;