import React, { Component } from 'react';
import UserInformationField from './UserInformationField';
import UserButton from '../../pages/UsersProfile/UserButton';
import '../../pages/UsersProfile/UsersProfile.scss';

class UsersProfileContainer extends Component {
  render() {
    return (
      <div>
        <UserInformationField />
        <UserButton />
      </div>
    );
  }
}

export default UsersProfileContainer;
