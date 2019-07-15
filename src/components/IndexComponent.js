import React, { Component, Fragment } from 'react';
import index from '../images/index.jpg';
import './index.css';



class IndexComponent extends Component {
  render() {
    return (
      <Fragment >
        <nav class="navbar navbar-expand bg-light navbar-light col-sm-12">
          <a class="navbar-brand" href="#">

          </a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <img className="col-md-12 col-lg-12 col-sm-12" src={index} alt="Logo" />
            </div>
          </div>

        </div>


      </Fragment>
    );
  }
}

export default IndexComponent;