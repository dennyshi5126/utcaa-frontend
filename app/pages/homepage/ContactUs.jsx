import React, { Component } from 'react';
import '../../stylesheets/contactus.scss';

export default class ContactUs extends Component {
  render() {
    return (
      <div id="contact" className="contactus-section">
        <div className="row-container">
          <div className="left-component">
            <div className="contact-text">
              <p>
                如果您有任何问题，包括如何加入会员，如何成为执委，活动咨询及建议，合作或加入我们的赞助商，都欢迎您咨询我们
              </p>
            </div>
            <div className="contact-form">
              <form>
                <p>
                  <input type="text" placeholder="姓名" />
                </p>
                <p>
                  <input type="text" placeholder="邮箱" />
                </p>
                <p>
                  <textarea placeholder="信息" />
                </p>
                <div className="submit-container">
                  <div className="validation-question">
                    <span>15+9</span>= <input type="text" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    发送
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right-component">
            <div className="contact-info">
              <p>
                联系邮箱： admin@utcaa.com
                <br />
                微信公众号： utcaa2012
              </p>
            </div>
            <div className="media-follow">
              <div>
                <img src="https://utcaa.com/wp-content/uploads/2017/09/qrcode.png" alt="" />
              </div>
              <li className="facebook-info">
                <i className="fab fa-facebook-square facebook-icon btn btn-link" />
                <a
                  href="https://www.facebook.com/groups/UTCAA/"
                  className="btn btn-link follow-button"
                  title="Facebook"
                >
                  Follow
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
