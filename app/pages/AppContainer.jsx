import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from 'pages/common/footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AppContainer extends Component {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="overall" transitionEnterTimeout={1000} transitionLeaveTimeout={100}>
          {React.cloneElement(this.props.children, {
            key: pathname,
          })}
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default connect()(AppContainer);
