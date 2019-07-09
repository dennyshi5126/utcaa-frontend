import React, { Component } from 'react';

class UserInformationField extends Component {
  render() {
    return (
      <div className="userInput">
        <input className="emailInput" type="text" placeholder="邮箱(Email) *" />
        <input type="text" placeholder="名(First Name) *" />
        <input type="text" placeholder="姓(Last Name) *" />
        <input type="text" placeholder="联系电话(Phone Number) *" />
        <input type="text" placeholder="微信(Wechat) *" />
        <input type="text" placeholder="毕业年份(Year of Graduation) *" />
        <input type="text" placeholder="学习专业(Program Studied) *" />
        <input type="text" placeholder="工作领域(Professional Field) *" />
        <input type="text" placeholder="现居城市(Current City) *" />
        <input type="text" placeholder="用户名(Username) *" />
        <input type="text" placeholder="密码(Password) *" />
      </div>
    );
  }
}

export default UserInformationField;
