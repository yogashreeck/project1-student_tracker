import React, { Component, Fragment } from 'react';
import indimg from '../images/indimg.png';
import './index.css';



class IndexComponent extends Component {
  render() {
    return (
      <Fragment >
        <div className="conatiner">

          <div className="col-md-6 offset-md-3 text-center">
            <h1>Take the first step to learn with us</h1>
            <p>Popular Courses Available Right Now</p>
          </div>

          <div>
            <img className=" col-lg-12 " src={indimg} alt="Logo" />
          </div>
        </div>

      </Fragment>

    );
  }
}

export default IndexComponent;