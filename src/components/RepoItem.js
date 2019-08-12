import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RepoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  delete(id) {
    debugger;
    console.log(id)
    alert(id);
    fetch('/users/studentProfile',
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
          id: id,
        })
      })
      .then(response => response.text()
      )
    window.location = '/student';
  }
  render() {
    debugger;
    return (
      <div>
        <h3 className="text-center">Student Details</h3>
        <div className="list-group-item  flex-column box-course">
          <p><b>Student Name :</b> {this.props.repo.studentname}</p>
          <p><b>Email :</b> {this.props.repo.email}</p>
          <p><b>Course :</b> {this.props.repo.course}</p>
          <p><b>Address :</b> {this.props.repo.address}</p>
          <p><b>Mobile Number : </b>{this.props.repo.mobileNumber}</p>
          <div>
            <Link type="button" className="btn btn-info" to={"/student/edit/" + this.props.repo._id}
            >Edit</Link>
            <Link type="button" onClick={this.delete.bind(this, this.props.repo._id)} className="btn btn-danger btn-delete"
              to={`/student`}>Delete</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default RepoItem;

