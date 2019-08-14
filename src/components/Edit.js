import React, { Component } from 'react';

import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.state = {
      studentname: '',
      course: '',
      address: '',
      email: '',
      mobileNumber: '',
      submitted: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const profileuser = {
      studentname: this.state.studentname,
      address: this.state.address,
      email: this.state.email,
      course: this.state.course,
      mobileNumber: this.state.mobileNumber
    }
    axios.put('http://localhost:8000/users/studentProfile/update/' + this.props.match.params.id, profileuser)
      .then(res => console.log(res.data, "hi"));
    this.setState({
      studentname: '',
      address: '',
      email: '',
      course: '',
      mobileNumber: ''
    })
    this.props.history.push('/student');
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    debugger;
    axios.get('http://localhost:8000/users/edit/' + this.props.match.params.id)

      .then(res => {
        this.setState({
          studentname: res.data.studentname,
          course: res.data.course,
          address: res.data.address,
          email: res.data.email,
          mobileNumber: res.data.mobileNumber,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({
      studentname: e.target.value
    });
  }
  onChangeCourse(e) {
    this.setState({
      course: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeMobile(e) {
    this.setState({
      mobileNumber: e.target.value
    });
  }

  render() {
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

                <div className={'form-group'}>
                  <label For="studentName">Student Name</label>
                  <input type="text" className="form-control" value={this.state.studentname}
                    onChange={this.onChangeStudentName} />
                </div>
                <div className={'form-group'}>
                  <label For="course">Course</label>
                  <select id="myList" className="form-control"
                    onChange={this.onChangeCourse} >
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
                <div className={'form-group'}>
                  <label For="address">Address</label>
                  <input type="text" className="form-control" value={this.state.address}
                    onChange={this.onChangeAddress} />
                </div>
                <div className={'form-group'}>
                  <label For="email">Email</label>
                  <input type="email" className="form-control" value={this.state.email}
                    onChange={this.onChangeEmail} />
                </div>
                <div className={'form-group'}>
                  <label For="mobileNumber">Mobile Number</label>
                  <input type="number" className="form-control"
                    value={this.state.mobileNumber}
                    onChange={this.onChangeMobile} />
                </div>
                <div className={'form-group'}>
                  <input type="submit" className="btn btn-primary" value="Update" />
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