import React, { Component } from 'react';
import './register.scss';

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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div class="et_pb_contact">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>邮箱(Email)</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </p>
          <p>
            <label>名(First Name)* </label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
            <label>姓(Last Name)* </label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </p>

          <p>
            <label>联系电话（phone number）</label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
            <label>微信（WeChat）</label>
            <input type="text" name="weChat" value={this.state.weChat} onChange={this.handleChange} />
          </p>
          <p>
            <label>毕业年份 （Year of Graduation* </label>
            <input type="text" name="yearOfGrad" value={this.state.yearOfGrad} onChange={this.handleChange} />
            <label>学习专业 (Program Studied)</label>
            <input type="text" name="program" value={this.state.program} onChange={this.handleChange} />
          </p>
          <p>
            <label>工作领域（Professional Field）</label>
            <input type="text" name="profField" value={this.state.profField} onChange={this.handleChange} />
            <label>现居城市 （Current City） *</label>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </p>
          <p>
            <label>用户名（Username）*</label>
            <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
            <label>密码 （Password）*</label>
            <input type="password" name="passWord" value={this.state.passWord} onChange={this.handleChange} />
          </p>
          <p>
            <label className="register_label">注册为 (Register As)</label>
            <select onChange={this.handleChange} name="regAs" value={this.state.regAs}>
              <option value="" disabled selected>
                options
              </option>
              <option value="member">Member</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </p>
          <p className="select-container">
            <select
              onChange={this.handleChange}
              name="favDepartment1"
              value={this.state.favDepartment1}
              placeholder="Options"
            >
              <option value="" disabled selected>
                --感兴趣的部门-第一选择 (Interested Department - First Choice) *--
              </option>
              <option value="Events">活动部 Events</option>
              <option value="Sponsorship">赞助部 Sponsorship</option>
              <option value="Marketing">市场部 Marketing</option>
              <option value="HR">人事部 HR</option>
            </select>
          </p>
          <p className="select-container">
            <select
              onChange={this.handleChange}
              name="favDepartment2"
              value={this.state.favDepartment2}
              placeholder="Options"
            >
              <option value="" disabled selected>
                --感兴趣的部门-第二选择 (Interested Department - First Choice) *--
              </option>
              <option value="Events">活动部 Events</option>
              <option value="Sponsorship">赞助部 Sponsorship</option>
              <option value="Marketing">市场部 Marketing</option>
              <option value="HR">人事部 HR</option>
            </select>
          </p>
          {/* <h1>{this.state.regAs}</h1> */}
          {/* <p> */}
          <textarea
            name="intro"
            value={this.state.intro}
            placeholder={'请简单介绍一下自己和相关经验 (Self Intro and Relative Experience*)'}
            onChange={this.handleChange}
          />
          {/* </p> */}
          <br />

          <div className="et_contact_bottom_container">
            <button type="submit" className="et_pb_contact_submit et_pb_button">
              提交申请
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
