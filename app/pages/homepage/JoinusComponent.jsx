/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import './JoinusComponent.scss';
import '../signup/Register.jsx';
import '../joinus/joinus.jsx';
import { Link } from 'react-router';

class JoinusComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="join" name="joinus" className="joinus_container">
        <section className="joinus_layer">
          <div
            className="et_pb_parallax_css"
            // style="background-image: url(https://utcaa.com/wp-content/uploads/2018/07/team-01-2.jpg);"
          />
          <div className="et_pb_fullwidth_header_container center">
            <div className="header-content-container center">
              <div className="header-content">
                <h1 className="module_header">加入我们</h1>
                <div className="intro_text">
                  UTCAA希望能将更好服务带给更多的多伦多大学华人校友。只要是曾在多伦多大学学习过4个月以上都是学校的正式校友，并可以成为UTCAA的会员。注册会员可以及时得到我们最新活动信息及学校Alumni
                  Office为校友提供的福利消息更新。如果你也想为华人校友们付出自己的一份力量，认识更多志同道合的朋友，欢迎加入我们的执委团队，让UTCAA更加壮大。
                </div>
                <div className="two_buttons">
                  <Link to="/register" className="button1">
                    成为会员
                  </Link>
                  <Link to="/jointeam" className="button2">
                    加入团队
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default JoinusComponent;
