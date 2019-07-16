import React, { Component } from 'react';
import edutech from './images/edutech.png';
import home from './images/home.png';
import student from './images/student.png';
import course from './images/course.png';
import register from './images/register.png';
import login from './images/login.png';

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark  bg-dark ">
          <div class="container">
            <span class="navbar-brand active"><h2>
              <img src={edutech} alt="eicon" className="iconlogo" />EduTech</h2>
            </span>
            <div >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="" class="nav-link">Home
                  <img src={home} alt="hicon" className="icon" /></a></li>
                <li class="nav-item"><a href="" class="nav-link">Students
                  <img src={student} alt="sicon" className="icon" /></a></li>
                <li class="nav-item"><a href="" class="nav-link">Courses
                 <img src={course} alt="sicon" className="icon" /></a></li>
                <li class="nav-item"><a href="./register" class="nav-link">Register
                  <img src={register} alt="sicon" className="icon" /></a></li>
                <li class="nav-item"><a href="./login" class="nav-link">Login
                  <img src={login} alt="sicon" className="icon" /></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;