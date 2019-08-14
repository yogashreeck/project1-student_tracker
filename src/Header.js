import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import edutech from './images/edutech.png';
import student from './images/student.png';
import course from './images/course.png';
import register from './images/register.png';
import login from './images/login.png';


class Header extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken')
    window.location = '/';
  }
  render() {
    const loginRegLink = (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar">
          <div class="container">
            <a href=""><span class="navbar-brand"><i class="left-bar"></i><i class="right-bar"><h2>
              <img src={edutech} alt="eicon" className="iconlogo" />EduTech</h2></i></span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item"><Link to="#" class="nav-link">Students
                  <img src={student} alt="sicon" className="icon" /></Link></li>
                <li class="nav-item"><Link to="#" class="nav-link">Courses
                 <img src={course} alt="sicon" className="icon" /></Link></li>
                <li class="nav-item"><Link to="./register" class="nav-link">Register
                  <img src={register} alt="sicon" className="icon" /></Link></li>
                <li class="nav-item"><Link to="/login" class="nav-link">Login
                  <img src={login} alt="sicon" className="icon" /></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
    const logoutLink = (
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar">
        <div class="container">
          <a href="/"><span class="navbar-brand"><i class="left-bar"></i><i class="right-bar"><h2>
            <img src={edutech} alt="eicon" className="iconlogo" />EduTech</h2></i></span></a>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><Link to="/student" class="nav-link">Students
                  <img src={student} alt="sicon" className="icon" /></Link></li>
              <li class="nav-item"><Link to="/course" class="nav-link">Courses
                 <img src={course} alt="sicon" className="icon" /></Link></li>
              <li class="nav-item"><a href="" onClick={this.logOut.bind(this)} class="nav-link">logOut
             </a></li>
            </ul>
          </div>
        </div>
      </nav>
    )

    return (
      <div>

        {localStorage.getItem('usertoken') ? logoutLink : loginRegLink}

      </div>
    )
  }
}

export default Header;