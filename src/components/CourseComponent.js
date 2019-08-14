import React, { Component } from 'react';
import brain from '../images/brain.png';

class CourseComponent extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      users: [],
    };
    this.handleClick = this.handleClick.bind(this)
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }
  handleClick(event) {
    console.log(event.target.textContent)
    fetch(
      'http://localhost:8000/users/course?course=' + event.target.textContent
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ users: data })
      })
      .catch(e => console.log('err', e))
  }

  render() {
    return (
      <div>
        <div className="container dropdown">
          <div className="row">
            <div className="col-md-4">
              <img src={brain} alt="sicon" className="code" />
            </div>
            <div className="col-md-4 offset-md-3">
              <h6>Select a course to get Student Details</h6>
              <button class="btn btn-warning dropdown-toggle" data-toggle="dropdown"
                onClick={this.showMenu}> List of Courses </button>

              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <button className="btn-pro" onClick={this.handleClick}><h3>HTML</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>CSS</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>JavaScript</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>JQuery</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>ReactJS</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>AngularJS</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>Autocad</h3></button><br />
                      <button className="btn-pro" onClick={this.handleClick}><h3>NodeJS</h3></button><br />
                    </div>
                  )
                  : (
                    null
                  )
              }
            </div>
            <div className="col-md-8 offset-md-2">
              {this.state.users &&
                this.state.users.map((item, index) => (
                  <div>
                    <h1 className="text-center"><u>Course with Student Details</u></h1>
                    <div className="list-group-item flex-column box-course">
                      <div key={index.toString()} >
                        <h3 className="text-center"> {item.course}</h3>
                        <p><b>Student Name :</b> {item.studentname}</p>
                        <p><b>Email :</b> {item.email}</p>
                        <p><b>Address:</b> {item.address}</p>
                        <p><b>Mobile Number :</b> {item.mobileNumber}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseComponent;
