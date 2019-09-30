import React, { Component } from 'react';
import './UsersProfile.scss';
import { Link } from 'react-router';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      wechat: '',
      yearOfGraduation: '',
      programStudied: '',
      professionalField: '',
      currentCity: '',
      username: '',
      password: '',
    };
    this.updateInputField = this.updateInputField.bind(this);
  }

  updateInputField(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleUpdateProfile() {
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form className="container userForm">
          <div className="row d-flex justify-content-center my-row">
            <div className="col-md-offset-1 col-sm-2 col-md-2 col-xs-2">邮箱(Email) *</div>
            <input className="col-sm-8 col-md-8 col-xs-8" type="text" name="email" onChange={this.updateInputField} />
          </div>
          <div className="row d-flex justify-content-between align-items-stretch my-row">
            <div className="col-md-offset-1 col-sm-2 col-md-2 col-xs-2">名(First Name) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3"
              type="text"
              name="firstName"
              onChange={this.updateInputField}
            />
            <div className="col-sm-2 col-md-2 col-xs-2">姓(Last Name) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3"
              type="text"
              name="lastName"
              onChange={this.updateInputField}
            />
          </div>

          <div className="row justify-content-between align-items-stretch my-row">
            <div className="col-md-offset-1 col-sm-2 col-md-2 col-xs-2">联系电话(Phone Number)</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3"
              type="text"
              name="phoneNumber"
              onChange={this.updateInputField}
            />
            <div className="col-sm-2 col-md-2 col-xs-2">微信(Wechat)</div>
            <input className="col-sm-3 col-md-3 col-xs-3" type="text" name="wechat" onChange={this.updateInputField} />
          </div>
          <div className="row justify-content-between align-items-stretch my-row">
            <div className="col-md-offset-1 col-sm-2 col-md-2 col-xs-2">毕业年份(Year of Graduation) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3"
              type="text"
              name="yearOfGraduation"
              onChange={this.updateInputField}
            />
            <div className="col-sm-2 col-md-2 col-xs-2">学习专业(Program Studied) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3 "
              type="text"
              name="programStudied"
              onChange={this.updateInputField}
            />
          </div>
          <div className="row justify-content-between align-items-stretch my-row">
            <div className="col-md-offset-1 col-sm-2 col-md-2 col-xs-2">工作领域(Professional Field)</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3  "
              type="text"
              name="professionalField"
              onChange={this.updateInputField}
            />
            <div className="col-sm-2 col-md-2 col-xs-2">现居城市(Current City) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3  "
              type="text"
              name="currentCity"
              onChange={this.updateInputField}
            />
          </div>
          <div className="row justify-content-between align-items-stretch my-row">
            <div className="col-md-offset-1 col-sm-2 col-md-2 col-xs-2">用户名(Username) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3  "
              type="text"
              name="username"
              onChange={this.updateInputField}
            />
            <div className="col-sm-2 col-md-2 col-xs-2">密码(Password) *</div>
            <input
              className="col-sm-3 col-md-3 col-xs-3  "
              type="text"
              name="password"
              onChange={this.updateInputField}
            />
          </div>
          <div className="row d-flex justify-content-between">
            <button
              className="col-sm-2 col-md-2 col-xs-2 col-md-offset-3 userBtn"
              onClick={this.handleUpdateProfile.bind(this)}
            >
              Update Profile
            </button>
            <Link to="/users/reset_password">
              <button className="col-sm-2 col-md-2 col-xs-2 col-md-offset-2 userBtn">Reset Password</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfile;
