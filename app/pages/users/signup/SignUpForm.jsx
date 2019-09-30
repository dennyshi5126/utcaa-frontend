import React, { Component } from 'react';
import './SignUpForm.scss';
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      weChat: '',
      yearOfGrad: '',
      program: '',
      profField: '',
      city: '',
      userName: '',
      passWord: '',
      intro: '',
      regAs: '',
      hover: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggelBtn = this.toggelBtn.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    if (
      this.state.email == '' ||
      this.state.firstName == '' ||
      this.state.lastName == '' ||
      this.state.yearOfGrad == '' ||
      this.state.program == '' ||
      this.state.city == '' ||
      this.state.userName == '' ||
      this.state.passWord == '' ||
      typeof this.state.email != 'string' ||
      typeof this.state.firstName != 'string' ||
      typeof this.state.lastName != 'string' ||
      typeof this.state.yearOfGrad != 'string' ||
      typeof this.state.program != 'string' ||
      typeof this.state.city != 'string' ||
      typeof this.state.userName != 'string' ||
      typeof this.state.passWord != 'string'
    ) {
      alert('Required information is not filled');
    }
    if (typeof this.state.email != 'string') {
      alert('Required information is not filled');
    }
  }
  toggelBtn() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    return (
      <div className="et_pb_contact">
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <div className="RegisterFormContainer">
            <div className="Col1 Row1">邮箱(Email)*</div>
            <input
              className="emailInput"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="Col1 Row2">名(First Name)* </div>
            <input
              className="Col2 Row2"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <div className="Col3 Row2">姓(Last Name)*</div>
            <input
              className="Col4 Row2"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />

            <div className="Col1 Row3">联系电话(phone number)</div>
            <input
              className="Col2 Row3"
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <div className="Col3 Row3">微信(WeChat)</div>
            <input
              className="Col4 Row3"
              type="text"
              name="weChat"
              value={this.state.weChat}
              onChange={this.handleChange}
            />
            <div className="Col1 Row4">毕业年份(Year of Graduation)</div>
            <input
              className="Col2 Row4"
              type="text"
              name="yearOfGrad"
              value={this.state.yearOfGrad}
              onChange={this.handleChange}
            />
            <div className="Col3 Row4">学习专业(Program Studied)*</div>
            <input
              className="Col4 Row4"
              type="text"
              name="program"
              value={this.state.program}
              onChange={this.handleChange}
            />

            <div className="Col1 Row5">工作领域(Professional Field)</div>
            <input
              className="Col2 Row5"
              type="text"
              name="profField"
              value={this.state.profField}
              onChange={this.handleChange}
            />
            <div className="Col3 Row5">现居城市(Current City)*</div>
            <input className="Col4 Row5" type="text" name="city" value={this.state.city} onChange={this.handleChange} />

            <div className="Col1 Row6">用户名(Username)*</div>
            <input
              className="Col2 Row6"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <div className="Col3 Row6">密码(Password)*</div>
            <input
              className="Col4 Row6"
              type="password"
              name="passWord"
              value={this.state.passWord}
              onChange={this.handleChange}
            />
            <textarea
              className="introInput"
              name="intro"
              value={this.state.intro}
              placeholder={'请简单介绍一下自己和相关经验 (Self Intro and Relative Experience*)'}
              onChange={this.handleChange}
            />
          </div>
          <div className="btnContainer">
            <button
              type="submit"
              className="itemRow11 itemCol1"
              onMouseEnter={this.toggelBtn}
              onMouseLeave={this.toggelBtn}
              onClick={this.handleSubmit}
            >
              {this.state.hover ? '提交申请 >' : '提交申请'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
