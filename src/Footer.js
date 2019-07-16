import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './App.css';

class Footer extends Component {
  render() {
    return (
     
        <div id="foot-page">
        <footer className="site-footer">

          <div class="row">
            <div class="col-sm-3 col-md-3 col-xl-3">
              <h2>About</h2>
              <p>Online education gives learning a new relevance to
                contemporary society and professional and industry practice </p>
            </div>

            <form action="#" className="col-md-3 offset-md-1">
              <div class="input-group ">
                <h4></h4>
                <input type="text" class="form-control" placeholder='Enter email address' />
                <div className="input-group-append">
                  <button class="btn btn-danger" type="button">Send</button>
                </div>
              </div>
            </form>



            <div className="social_icon col-md-4 offset-md-1 ">
              <h4>Connect With Us</h4>
              <SocialIcon url="https://twitter.com/" />
              <SocialIcon url="https://www.facebook.com/" />
              <SocialIcon url="https://www.whatsapp.com/" />
              <SocialIcon url="https://www.email.com/" />
              <SocialIcon url="http://linkedin.com/" />
            </div>
          </div>

          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright_part_text text-center">
                  <div class="row">
                    <div class="col-lg-12">
                      <p>Copyright @ All rights reserved | This template is made by yogashree.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
     
    );
  }
}

export default Footer;