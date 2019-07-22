import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'

class StudentProfile extends Component {
  constructor() {
    super()
    this.state = {
      studentname: '',
      address: '',
      email: '',
      mobileNumber: ''
    }
  }

  // componentDidMount() {
  //   const token = localStorage.usertoken
  //   const decoded = jwt_decode(token)
  //   this.setState({
  //     studentname: decoded. studentname,
  //     address: decoded. address,
  //     email: decoded.email,
  //     mobileNumber: decoded. mobileNumber
  //   })
  // }

  render() {
    return (
      <div className="container">
        {/* <div className="jumbotron mt-1"> */}
        <div className="col-sm-8 mx-auto">
          <h5 className="text-center">PROFILE</h5>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Student Name</td>
              <td>{this.state.first_name}</td>
            </tr>
            <tr>
              <td> address</td>
              <td>{this.state.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>{this.state.mobileNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      // </div>
    )
  }
}


export default StudentProfile;