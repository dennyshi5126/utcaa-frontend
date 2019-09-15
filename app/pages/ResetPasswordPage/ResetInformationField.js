import React, { Component } from 'react';

class ResetInformationField extends Component {
  render() {
    return (
      <div className="reset-form">
        <input className="reset" placeholder="旧密码(Old Password)" />
        <input className="reset" placeholder="新密码(New Password)" />
        <input className="reset" placeholder="确认新密码(Confirm New Password)" />
      </div>
    );
  }
}

export default ResetInformationField;
