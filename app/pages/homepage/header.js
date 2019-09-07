import React, { Component } from 'react';
import './header.scss';
import { handleOnclickScroll } from '../util.js';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-body">
          <div className="icon-container">
            <img src="https://utcaa.com/wp-content/uploads/2017/11/utcaa_logo.png" className="logo" />
          </div>
          <div className="menu-container">
            <div className="items">
              <a href="#" className="item text-item">
                <div className="text-item">主页</div>
              </a>
              <a className="item text-item">
                <div className="text-item" onClick={handleOnclickScroll.bind(this, 'about-us')}>
                  关于UTCAA
                </div>
              </a>
              <a href="#" className="dd text-item">
                <div className="text-item">
                  活动介绍
                  <i className="arrow down" />
                </div>
                <div className="dropdown">
                  <a href="#">
                    <div className="text-item dropdown-item">最新活动</div>
                  </a>
                  <a href="#">
                    <div className="text-item dropdown-item">往期活动</div>
                  </a>
                </div>
              </a>
              <a className="item text-item">
                <div className="text-item" onClick={handleOnclickScroll.bind(this, 'join-us')}>
                  加入UTCAA
                </div>
              </a>
              <a className="item text-item">
                <div className="text-item" onClick={handleOnclickScroll.bind(this, 'contact')}>
                  联系我们
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
