import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
         email: '',
          password: '',
          submitted: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
      
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
         this.setState({ submitted: true });
         if (email && password) {
          this.props.history.push('/student')
      }else{
        console.log('login successful');
      }
    }
    componentDidMount() {
      // if(this.props.auth.isAuthenticated) {
          this.props.history.push('/');
      // }
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.auth.isAuthenticated) {
          this.props.history.push('/')
      }
      if(nextProps.errors) {
          this.setState({
              errors: nextProps.errors
          });
      }
  }
    
      render() {
        const { email, password, submitted } = this.state;
        return (
          <div className="login">
                <div className="container">
            <div className="col-md-4 col-lg-4 offset-md-4 log-block">
              <h2>Login</h2>
              <form className="form"  onSubmit={this.handleSubmit} >
                <div className={'form-group' + (submitted && !email ? ' has-error' : '') }>
                  <label htmlFor="email"><b>Email</b></label>
                  <input type="text" className="form-control" name="email"  value={email} 
    
                  onChange={this.handleChange} />
                  {submitted && !email &&
                    <div className="help-block" >email is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label htmlFor="password"><b>Password</b></label>
                  <input type="password" className="form-control" name="password" value={password}
                    onChange={this.handleChange} />
                  {submitted && !password &&
                   <div className="help-block">Password is required</div>
                  }
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Login</button>
                  <a href="./register" className="btn btn-link text-decoration-none">Register</a>
                </div>
              </form>
              </div>
            </div>
          </div>
        );
      }
}
LoginComponent.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(LoginComponent)
