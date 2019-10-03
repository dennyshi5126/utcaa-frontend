import React, { Component } from 'react';

export default class EventItem extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '250.44px', height: '177.81px' }}>
          <img src={this.props.imgSrc} width="100%" height="100%" />
        </div>
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    );
  }
}
