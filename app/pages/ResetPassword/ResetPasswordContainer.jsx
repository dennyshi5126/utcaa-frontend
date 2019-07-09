import React, { Component } from 'react';
import ResetInformationField from './ResetInformationField';
import ResetButton from '../../pages/ResetPassword/ResetButton';
import '../../pages/ResetPassword/ResetPassword.scss';

class ResetPasswordContainer extends Component {
  render() {
    return (
      <div>
        <ResetInformationField />
        <ResetButton />
      </div>
    );
  }
}

export default ResetPasswordContainer;
