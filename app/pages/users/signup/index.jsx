import React, { Component } from 'react';
import './register.scss';
import Section from './section';
import SignUpForm from './SignUpForm';

class SignUpContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="et-main-area">
        <div id="main-content">
          <div className="entry-content">
            <Section />
            <div className=" et_pb_row et_pb_row_0">
              <div
                id="et_pb_contact_form_1"
                className="et_pb_module et_pb_contact_form_container"
                data-form_unique_num="0"
              >
                <h1 className="et_pb_contact_main_title">注册UTCAA会员</h1>
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpContainer;
