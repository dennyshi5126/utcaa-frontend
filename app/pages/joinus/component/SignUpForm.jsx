import React, { Component } from 'react';
import '../SignUpForm.scss';
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
      favDepartment1: '',
      favDepartment2: '',
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
    const departments = this.props.departments;

    return (
      <form className="signUpForm" onSubmit={this.handleSubmit}>
        <div className="signUpFormContainer">
          <div className="itemCol1 itemRow1">邮箱(Email)*</div>
          <input
            className="itemEmailInput itemRow1"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="itemCol1 itemRow2">名(First Name)* </div>
          <input
            className="itemCol2 itemRow2"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div className="itemCol3 itemRow2">姓(Last Name)*</div>
          <input
            className="itemCol4 itemRow2"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <div className="itemCol1 itemRow3">联系电话(phone number)</div>
          <input
            className="itemCol2 itemRow3"
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <div className="itemCol3 itemRow3">微信(WeChat)</div>
          <input
            className="itemCol4 itemRow3"
            type="text"
            name="weChat"
            value={this.state.weChat}
            onChange={this.handleChange}
          />
          <div className="itemCol1 itemRow4">毕业年份(Year of Graduation)*</div>
          <input
            className="itemCol2 itemRow4"
            type="text"
            name="yearOfGrad"
            value={this.state.yearOfGrad}
            onChange={this.handleChange}
          />
          <div className="itemCol3 itemRow4">学习专业(Program Studied)*</div>
          <input
            className="itemCol4 itemRow4"
            type="text"
            name="program"
            value={this.state.program}
            onChange={this.handleChange}
          />

          <div className="itemCol1 itemRow5">工作领域(Professional Field)</div>
          <input
            className="itemCol2 itemRow5"
            type="text"
            name="profField"
            value={this.state.profField}
            onChange={this.handleChange}
          />
          <div className="itemCol3 itemRow5">现居城市(Current City)*</div>
          <input
            className="itemCol4 itemRow5"
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />

          <div className="itemCol1 itemRow6">用户名(Username)*</div>
          <input
            className="itemCol2 itemRow6"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <div className="itemCol3 itemRow6">密码(Password)*</div>
          <input
            className="itemCol4 itemRow6"
            type="password"
            name="passWord"
            value={this.state.passWord}
            onChange={this.handleChange}
          />
          <select
            className="itemSelect itemRow7"
            onChange={this.handleChange}
            name="favDepartment1"
            value={this.state.favDepartment1}
            placeholder="Options"
          >
            <option value="" disabled selected>
              --感兴趣的部门-第一选择 (Interested Department - First Choice) *--
            </option>
            {departments.map(depatment => (
              <option key={depatment.id}>{depatment.name}</option>
            ))}
          </select>

          <select
            className="itemSelect itemRow8"
            onChange={this.handleChange}
            name="favDepartment2"
            value={this.state.favDepartment2}
            placeholder="Options"
          >
            <option value="" disabled selected>
              --感兴趣的部门-第二选择 (Interested Department - First Choice) *--
            </option>
            {departments.map(depatment => (
              <option key={depatment.id}>{depatment.name}</option>
            ))}
          </select>

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
    );
  }
}
export default SignUpForm;
