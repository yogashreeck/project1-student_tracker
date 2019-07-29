import React, { Component } from 'react';
import { studentProfile } from './UserFunction';
// import StudentDetails from './StudentDetails'
import axios from 'axios';



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
    let url = 'http://localhost:8000/users/studentProfile?studentname='+user
    fetch(url).
      then(response => response.json()).then((repos) => {
        console.log(repos);
        console.log(repos.length);
        this.setState({
          repos: repos
        });
      });
  };


  handleChange(e) {
    // const { name, value } = e.target;
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
        this.props.history.push('/student')
        window.alert(`registered successfully`)
      }
    })
  }

  render() {
    const { studentname,course, address, email, mobileNumber, submitted } = this.state;
    return (
      <div>
        <div className="conatiner">
          <div className="row">
            <form action="#" className=" form col-md-3 offset-md-9">
              <div class="input-group ">
                <SearchBar handleSubmit={this.handleSearch} />
              </div>
            </form>
            <div className="col-md-3 offset-md-1 ">
              <h3>Student's Register Form</h3>
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
                  <input type="text" className="form-control" name="course" value={this.state.course}
                    onChange={this.handleChange} />
                  {submitted && !course &&
                    <div className="help-block">Course is required</div>
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
                  <input type="text" className="form-control" name="mobileNumber" 
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
            <div className="col-md-4 offset-md-1">
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
      <form onSubmit={this.handleSubmit} className=" form col-md-11 offset-md-1">
        <div class="input-group ">
          {/* <input
            name="text"
            className="form-control"
            type="text"
            placeholder="Type github user and press ENTER"
          /> */}
            <input  name="text" type="text" class="form-control" 
              placeholder='Enter Student Name' />
          <div className="input-group-append">
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>
    );
  }
}


class RepoList extends React.Component {

  render() {
    var rows = [];
    this.props.repos.map((repo, index) => rows.push(<RepoItem key={index} repo={repo} />))
    return (
      <div className="list-group">
        {rows}
      </div>
    )
  }
}
RepoList.defaultProps = {
  repos: []
};

class RepoItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
// delete= () => {
//   console.log();
//     axios.delete('http://localhost:8000/users/studentProfile')
//         .then(console.log('Deleted'))
//         .catch(err => console.log(err))
// }
delete = (user) => {
  console.log(user);
  let url = 'http://localhost:8000/users/studentProfile/:id'
  fetch(url).
    then(response => response.json()).then((repos) => {
      console.log(repos);
      console.log(repos.length);
      this.setState({
        repos: repos
      });
    });
};
  
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
        <button  onClick={this.delete} className="btn btn-danger" type="button">Delete</button>
      </div>
    )
  }
}



export default StudentComponent;