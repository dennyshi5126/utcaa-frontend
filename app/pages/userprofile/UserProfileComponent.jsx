import React, { Component } from 'react';
import './UsersProfile.scss';
import { Link } from 'react-router';

class UserProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      wechat: '',
      yearOfGraduation: '',
      program: '',
      profession: '',
      city: '',
    };
    this.textInputReRender = true;
    this.formRef = null;
    this.updateInputField = this.updateInputField.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  updateInputField(event) {
    this.textInputReRender = false;
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderContent(operation, profile, fieldName, labelName, required) {
    let field,
      maxlength = 0,
      max = 0;

    if (fieldName === 'yearOfGraduation') max = 2099;
    else if (fieldName === 'phone') maxlength = 15;
    else maxlength = 45;

    if (operation === 'update')
      field = (
        <input
          className="col-sm-6 col-xs-6 inputField"
          type={fieldName === 'yearOfGraduation' ? 'number' : 'text'}
          name={fieldName}
          maxLength={maxlength}
          max={max}
          onChange={this.updateInputField}
          required={required}
        />
      );
    else if (operation === 'view') field = <span className="col-sm-6 col-xs-6 spanField">{profile[fieldName]}</span>;
    return (
      <div className="singleField">
        <span className="col-sm-4 col-xs-4">{labelName}</span>
        {field}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.textInputReRender) return false;
    else return true;
  }

  render() {
    const { profile, operation, updateProfile } = this.props;
    return (
      <div className="profileContainer">
        <form
          ref={ref => (this.formRef = ref)}
          className="userForm"
          onSubmit={e => {
            e.preventDefault();
            updateProfile(profile.userId, this.state);
            this.formRef.reset();
          }}
        >
          {operation === 'view' ? <h2></h2> : <h3>更新会员信息</h3>}
          <div className="email singleField">
            <div className="col-sm-2 col-xs-2">邮箱(Email) *</div>
            <span className="col-sm-4 col-xs-4">{profile.user ? profile.user.email : ''}</span>
          </div>
          <div className="my-row">
            {this.renderContent(operation, profile, 'firstName', '名(First Name) *', true)}
            {this.renderContent(operation, profile, 'lastName', '姓(Last Name) *', true)}
          </div>
          <div className="my-row">
            {this.renderContent(operation, profile, 'phone', '联系电话(Phone Number)', false)}
            {this.renderContent(operation, profile, 'wechat', '微信(Wechat)', false)}
          </div>
          <div className="my-row">
            {this.renderContent(operation, profile, 'yearOfGraduation', '毕业年份(Year of Graduation) *', true)}
            {this.renderContent(operation, profile, 'program', '学习专业(Program Studied) *', true)}
          </div>
          <div className="my-row">
            {this.renderContent(operation, profile, 'profession', '工作领域(Professional Field)', false)}
            {this.renderContent(operation, profile, 'city', '现居城市(Current City) *', true)}
          </div>
          {operation === 'view' ? (
            <div className="row">
              <Link to={`/users/profile/update/${profile.userId}`}>
                <button className="btn btn-danger userBtn">更新信息</button>
              </Link>
            </div>
          ) : (
            <div className="row">
              <button className="btn btn-danger userBtn">确定</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default UserProfileComponent;
