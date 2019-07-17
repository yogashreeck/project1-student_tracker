import React, { Component } from 'react';


class CourseComponent extends Component {

  constructor() {
    super();

    this.state = {
      displayMenu: false,
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

  render() {
    return (
      <div className="container dropdown">
        <div className="row">
        <div className="col-md-4 offset-md-5">
        <button class="btn btn-warning dropdown-toggle" data-toggle="dropdown" 
        onClick={this.showDropdownMenu}> List of Courses </button>

        {this.state.displayMenu ? (
          <ul>
            <li><h3>HTML</h3></li>
            <li><h3>CSS</h3></li>
            <li><h3>JavaScript</h3></li>
            <li><h3>JQuery</h3></li>
            <li><h3>ReactJS</h3></li>
            <li><h3>AngularJS</h3></li>
            <li><h3>Sass</h3></li>
            <li><h3>NodeJS</h3></li>
          </ul>
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