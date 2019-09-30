import React, { Component } from 'react';
import './ResetPassword.scss';

class ResetInformationField extends Component {
  render() {
    return (
      <div>
        <div className="reset-form">
          <input className="reset" placeholder="旧密码(Old Password)" />
          <input className="reset" placeholder="新密码(New Password)" />
          <input className="reset" placeholder="确认新密码(Confirm New Password)" />
        </div>
        <div className="reset-btn-block">
          <button className="reset-btn">Update</button>
        </div>
      </div>
    );
  }
}

export default ResetInformationField;
