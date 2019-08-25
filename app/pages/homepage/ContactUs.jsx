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
              <form className="contactus-form">
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
                    <p className="wrapperp">
                      <span className="contact-question">15 + 4</span> =
                      <input type="text" size="2" className="user-input" data-required_mark="required" />
                    </p>
                  </div>
                  <button type="submit" className="submit-button">
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
                <a href="https://www.facebook.com/groups/UTCAA/" className="facebook-icon">
                  <img
                    className="icon"
                    src="data:image/jpeg;base64,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"
                  />
                </a>
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
