import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="container-full">
          <div className="header-contant-container">
            <div className="header-titile">欢迎来到多伦多大学华人校友会</div>
            <div className="header-contant">
              <p>为在多伦多大学学习生活过的校友们</p>
              <p>提供彼此交流、联络以及互相帮助的平台</p>
            </div>
            <div className="header-button">
              <a href="#" className="button">
                加入我们
              </a>
            </div>
          </div>
          <div className="header-scroller">
            <Link activeClass="active" to="herewego" spy={true} smooth={true} offset={0} duration={500}>
              <FontAwesomeIcon icon="arrow-down" size="2x" color="white" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
