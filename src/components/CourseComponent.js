import React, { Component } from 'react';


class CourseComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      repos: [],
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  handleClick(id) {
      debugger;
      console.log(id)
      alert(id);
      fetch('/users/studentProfile?course', 
          {
            method: 'GET', 
            // body: JSON.stringify({
            //     id: id,
            // })
        })
          .then((response) => response.text()
          )
    }
  render() {
    return (
      <div className="container dropdown">
        <div className="row">
          <div className="col-md-4 offset-md-5">
            <button class="btn btn-warning dropdown-toggle" data-toggle="dropdown"
              onClick={this.showDropdownMenu}> List of Courses </button>

            {this.state.displayMenu ? (
              <div>
                <button onClick={this.handleClick}><h3>HTML</h3></button><br />
                <button><h3>CSS</h3></button><br />
                <button><h3>JavaScript</h3></button><br />
                <button><h3>JQuery</h3></button><br />
                <button><h3>ReactJS</h3></button><br />
                <button><h3>AngularJS</h3></button><br />
                <button><h3>Sass</h3></button><br />
                <button onClick={this.handleClick}><h3>NodeJS</h3></button><br />
              </div>
            ) :
              (
                null
              )
            }
          </div>
        </div>
      </div>

    );
  }
}
export default CourseComponent;


class RepoItem extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    )
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