import React, { Component } from 'react';
import Header from '../homepage/header';
import PageBanner from '../common/PageBanner';
import UserProfileComponent from './UserProfileComponent';
import AlertComponent from './AlertComponent';
import { connect } from 'react-redux';
import { get_profile, update_profile } from '../../actions/profile';

class UserProfile extends Component {
  componentDidMount() {
    if (this.props.params.operation === 'view') this.props.get_profile(this.props.params.userId);
  }

  render() {
    return (
      <div>
        <Header />
        <PageBanner pageBannerTitle="会员信息" />
        {this.props.params.operation === 'update' && this.props.updateProfileSuccess && this.props.alert ? (
          <AlertComponent info="会员信息更新成功！" />
        ) : (
          ''
        )}
        <UserProfileComponent
          profile={this.props.profile}
          operation={this.props.params.operation}
          updateProfile={this.props.update_profile}
        />
      </div>
    );
  }
}

const select = state => ({
  profile: state.profile.profile,
  updateProfileSuccess: state.profile.update_profile_success,
  alert: state.profile.alert,
});

export default connect(
  select,
  { get_profile, update_profile }
)(UserProfile);
