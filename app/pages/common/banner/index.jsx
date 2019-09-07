import React, { Component } from 'react';
import './banner.scss';
import { handleOnclickScroll } from '../../util.js';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="container-full">
          <div className="header-content-container">
            <div className="header-title">欢迎来到多伦多大学华人校友会</div>
            <div className="header-content">
              <p>为在多伦多大学学习生活过的校友们</p>
              <p>提供彼此交流、联络以及互相帮助的平台</p>
            </div>
            <div className="header-button">
              <button className="joinus-button" onClick={handleOnclickScroll.bind(this, 'join-us')}>
                加入我们
              </button>
            </div>
          </div>
          <button
            className="fas fa-chevron-circle-down scroll-down-button"
            onClick={handleOnclickScroll.bind(this, 'about-us')}
          />
        </div>
      </div>
    );
  }
}
