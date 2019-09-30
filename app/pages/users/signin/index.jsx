import React, { Component } from 'react';
import { Link } from 'react-router';
import '../users.scss';

export default class Login extends Component {
  handleSignin() {
    console.log("haven't implemented yet");
  }

  render() {
    return (
      <div className="login-container">
        <form className="signin-form">
          <p>
            <input type="text" placeholder="用户名" />
          </p>
          <p>
            <input type="password" placeholder="密码" />
          </p>
          <p>
            <button onClick={this.handleSignin} type="submit">
              登录
            </button>
          </p>
        </form>
        <div className="more-option">
          <div className="signup-link">
            加入我们？
            <Link to="/users/signup">立即注册!</Link>
          </div>
          <div className="forget-password">
            <Link to="/users/forgetpassword">忘记密码</Link>
          </div>
        </div>
      </div>
    );
  }
}
