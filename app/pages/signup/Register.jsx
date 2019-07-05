import React, { Component } from 'react';
import './register.scss';
import Section from './section';
import SignUpForm from './SignUpForm';

class JoinUs extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="et-main-area">
        <div id="main-content">
          <article id="post-326" className="post-326 page type-page status-publish hentry">
            <div className="entry-content">
              <Section />

              <div className="et_pb_section  et_pb_section_1 et_section_regular">
                <div className=" et_pb_row et_pb_row_0">
                  <div className="et_pb_column et_pb_column_4_4  et_pb_column_0 et-last-child">
                    <div
                      id="et_pb_contact_form_1"
                      className="et_pb_module et_pb_contact_form_container clearfix  et_pb_contact_form_0"
                      data-form_unique_num="0"
                    >
                      <h1 className="et_pb_contact_main_title">注册UTCAA会员</h1>
                      <div className="et-pb-contact-message">
                        <div className="et_pb_contact">
                          <SignUpForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default JoinUs;
