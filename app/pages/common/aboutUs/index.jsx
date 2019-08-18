/* eslint-disable prettier/prettier */
import React from 'react';
// import AboutUsContent from './AboutUsContent';
import './AboutUsContent.scss';
class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUsContent">
        <img src="https://utcaa.com/wp-content/uploads/2017/09/home-pic.png" alt="home-pic" className="logo" />
        <div className="two-p">
          <p className="introduce-text">
            UTCAA是多伦多大学华人校友会 (University of Toronto Chinese Alumni
            Association)的简称。UTCAA成立于2012年，是多伦多大学唯一一个校园官方认可的华人校友会，也是校园众多华人
            组织里唯一一个以校友为纽带的组织。我们的宗旨是凝聚校友，服务母校，服务校友。我们致力于加强
            世界各地多大华人校友的联系。UTCAA是你与母校联络的桥梁，是你与昔日同窗相会的驿站，是你寄托青春回忆的家园，是你离开母校后的人生加油站，也是你扩展人脉，事业发展，获取资源的平台。在这里我们互帮互助，互相关爱，共同成长，共同营造一个温暖的大家庭。
            <br />
            <br />
            UTCAA的活动包括学术和校友系列讲座，主题研讨会，联谊聚会，社交娱乐活动，多大华人校友会年度圣诞晚宴等。在这里你可以参加最”in”的活动，认识知心朋友，得到事业前进道路上的引导。
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
