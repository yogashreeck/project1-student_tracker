import React, { Component } from 'react';

class RepoItem extends React.Component {
        constructor(props) {
          super(props);
          // this.delete = this.delete.bind(this);
      }
      
      // delete = (id) => {
      //   console.log(id);
      //   let url = 'http://localhost:8000/users/studentProfile/:id'+id;
      //   fetch(url).
      //     then(response => response.json()).then((repos) => {
      //       console.log(repos);
      //       console.log(repos.length);
      //       // this.setState({
      //       //   repos: repos
      //       // });
      //     });
      // };
      delete(id) {
        console.log(id)
        alert('clicked');
      
        // let url = 'http://localhost:8000/users/studentProfile/:id';
        fetch('/users/studentProfile/:id', 
            {
              method: 'DELETE',
              // body: JSON.stringify({
              //     id: id,
              // })
          })
            .then((response) => response.text()
            )
        // event.preventDefault();
      
        //  fetch(url).
        // then(response => response.json()).then((repos) => {
        //   console.log(repos);
        //   console.log(repos.length);
        //   this.setState({
        //     repos: repos
        //   });
        // });
      }
        
        render() {
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
              <button type="button" className="btn btn-info">Update</button>
              <button  onClick={this.delete.bind(this)} className="btn btn-danger"
               type="button">Delete</button>
            </div>
          )
        }
      }

export default RepoItem;

