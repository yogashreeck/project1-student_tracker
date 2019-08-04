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
              headers: {'Content-Type': 'application/json'},

              body: JSON.stringify({
                  id: id,
              })
          })
            .then(response => response.text()
            )       
      }
        render() {
          debugger;
          return (
            <div className="list-group-item list-group-item-action flex-column 
            align-items-start">
               <h3 className="text-center">Student Details</h3>
              <div>
               
              <p><b>Student Name :</b> {this.props.repo.studentname}</p>
              <p><b>Email :</b> {this.props.repo.email}</p>
              <p><b>Course :</b> {this.props.repo.course}</p>
              <p><b>Address :</b> {this.props.repo.address}</p>
              <p><b>Mobile Number : </b>{this.props.repo.mobileNumber}</p>
              </div>
              <Link  type="button" className="btn btn-info" 
               to={`/student/edit/:id`}>Update</Link>
              <Link type="button" onClick={this.delete.bind(this, this.props.repo._id)}  className="btn btn-danger"
               to={`/student`}>Delete</Link>
            </div>
          )
        }
      }

export default RepoItem;

