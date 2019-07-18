import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from './actions/authentication';
import { withRouter } from 'react-router-dom';
// import edutech from './images/edutech.png';
// import student from './images/student.png';
// import course from './images/course.png';
// import register from './images/register.png';
// import login from './images/login.png';

class Header extends Component {
//   onLogout(e) {
//     e.preventDefault();
//     this.props.logoutUser(this.props.history);
// }
//   render() {
//     return (
//       <div>
//         <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
//           id="ftco-navbar">
//           <div class="container">
//             <a href="./index"><span class="navbar-brand"><i class="left-bar"></i><i class="right-bar"><h2>
//               <img src={edutech} alt="eicon" className="iconlogo" />EduTech</h2></i></span></a>
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
//               <span class="oi oi-menu"></span> Menu
//             </button>
//             <div class="collapse navbar-collapse" id="ftco-nav">
//               <ul class="navbar-nav ml-auto">
//                 <li class="nav-item"><a href="" class="nav-link">Students
//                   <img src={student} alt="sicon" className="icon" /></a></li>
//                 <li class="nav-item"><a href="" class="nav-link">Courses
//                  <img src={course} alt="sicon" className="icon" /></a></li>
//                 <li class="nav-item"><a href="./register" class="nav-link">Register
//                   <img src={register} alt="sicon" className="icon" /></a></li>
//                 <li class="nav-item"><a href="" class="nav-link">Login
//                   <img src={login} alt="sicon" className="icon" /></a></li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

onLogout(e) {
  e.preventDefault();
  this.props.logoutUser(this.props.history);
}

render() {
  const {isAuthenticated, user} = this.props.auth;
  const authLinks = (
      <ul className="navbar-nav ml-auto">
          <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
              <img src={user.avatar} alt={user.name} title={user.name}
                  className="rounded-circle"
                  style={{ width: '25px', marginRight: '5px'}} />
                      Logout
          </a>
      </ul>
  )
const guestLinks = (
  <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/login">Sign In</Link>
      </li>
  </ul>
)
  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Redux Node Auth</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {isAuthenticated ? authLinks : guestLinks}
          </div>
      </nav>
  )
}
}
Header.propTypes = {
logoutUser: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter( Header));

// export default Header;