import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scroll from 'react-scroll';
const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Banner extends Component {
  handleOnclickScroll(section) {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
  }
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
              <button className="joinus-button" onClick={this.handleOnclickScroll.bind(this, 'joinus')}>
                加入我们
              </button>
            </div>
          </div>
          <button
            className="fas fa-chevron-circle-down scroll-down-button"
            onClick={this.handleOnclickScroll.bind(this, 'aboutus')}
          />
        </div>
      </div>
    );
  }
}
