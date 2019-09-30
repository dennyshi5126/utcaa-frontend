import React, { Component } from 'react';
import Section from './component/section';
import Intro from './component/intro';
import SignUp from '../signup/SignUpForm';
import './joinus.scss';

class JoinUs extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Section />
        <div id="joinusid" className="et_pb_section  et_pb_section_1 et_section_regular">
          <div className=" et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4  et_pb_column_0 et-last-child">
              <Intro />
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinUs;
