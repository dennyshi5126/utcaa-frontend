import React, { Component } from 'react';
import './PreviousHistory.scss';
import { Link } from 'react-router';

class PreviousHistory extends Component {
  render() {
    return (
      <div>
        <center>
          <section className="text">精彩回顾</section>
          <div className="event-list">
            <div className="event event-margin">
              <img className="event-image " src="https://utcaa.com/wp-content/uploads/2019/06/20190609082209.png" />
              <strong className="event-text">《揭秘量子通讯》公益科普讲座</strong>
            </div>
            <div className="event event-margin">
              <img className="event-image " src="https://utcaa.com/wp-content/uploads/2019/03/640-1.png" />
              <p className="event-text">2019猪年新春喜乐会</p>
            </div>
            <div className="event">
              <img className="event-image" src="https://utcaa.com/wp-content/uploads/2019/03/640-_2_.png" />
              <strong className="event-text">
                《荣耀之路：秦朝崛起之考古新
                <br />
                视角》公益讲座
              </strong>
            </div>
          </div>
          <Link to="/events" className="more-event-button">
            更多活动
          </Link>
        </center>
      </div>
    );
  }
}

export default PreviousHistory;
