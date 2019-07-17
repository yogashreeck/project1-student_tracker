import React, { Component } from 'react';

class StudentComponent extends Component {
    render() {
        return (
            <div>
                <div className="conatiner">

<div className="row">
  <form action="#" className=" form col-md-3 offset-md-8">
    <div class="input-group ">
      <input type="text" class="form-control" placeholder='Enter Student Name' />
      <div className="input-group-append">
        <button class="btn btn-primary" type="button">Search</button>
      </div>
    </div>

  </form>
</div>
</div>
            </div>
        );
    }
}

export default StudentComponent;