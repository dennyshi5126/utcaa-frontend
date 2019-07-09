import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class UserButton extends Component {
  render() {
    return (
      <div className="btn-block">
        <button className="btn">Update Profile</button>
        <Link to="/users/reset_password">
          <button className="btn">Reset Password</button>
        </Link>
      </div>
    );
  }
}

export default UserButton;
