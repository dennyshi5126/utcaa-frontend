import React, { Component } from 'react';
import './AlumniList.scss';
import AlumniItem from './AlumniItem';

class AlumniList extends Component {
  constructor() {
    super();
    this.state = {
      alumniDataList: [
        {
          id: 1,
          alumniName: 'Julie Chan：走在科技前端',
          alumniImg: 'https://utcaa.com/wp-content/uploads/2019/06/20190609083405.png',
          alumniInfo:
            'Julie Chan，现任IBM安大略省Business Development Executive。Julie是多大Computer Science专业校友，后赴美国留学并获得波士顿大学信息管理系统专业硕士学位。在Julie超过25年的工作生涯中，她带领过团队，完成过收购，热衷于义工，她一直是一位走在科技前端的人。',
          alumniLink:
            'https://mp.weixin.qq.com/s?__biz=MzIxMzA3NTA4Mw==&mid=2659075154&idx=1&sn=81506af1e2b1fb01416cab64032bb6fc&chksm=8c36b1b6bb4138a05e75c0acf94878feb9d58826c94393ac5ef2f81043e7ec1dc715c49d5158&scene=0&xtrack=1&key=bbbf5d9eaed00888010ed2b7365e14356a221ff0e601b0e051e9bf9ae1f72b4ee95d7ceeff75349d252caebccde971051ed07ab743f06ab6b5ed921f20449c310ff115244ae7e31399e67a8d70a815f8&ascene=1&uin=MjI3Mjg3NDUwMQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=t9vr7l7A8MGpzxk6cXnaruelsGe0xhKD70uFBM1XlN2zDOKyjKfw%2BcnxGs70Nt9K',
        },
        {
          id: 2,
          alumniName: '皇家安大略博物馆副馆长沈辰博士： 我没有一棵参天大树，却拥有一整片茂密的森林',
          alumniImg: 'https://utcaa.com/wp-content/uploads/2019/06/20190609083419.png',
          alumniInfo:
            '沈辰博士，现任皇家安大略博物馆（Royal Ontario Museum）副馆长兼任艺术和文化部主任、东亚考古研究员，多伦多大学人类学系与东亚学系教授，负责皇家安大略博物馆的6万余件东亚（中国、日本、韩国）文物及其展厅陈设，并与中国文物单位在该博物馆举办过《三星堆文化》、《中国秦兵马俑》和《紫垣撷珍》展览，为中加文化交流做出重大贡献。',
          alumniLink:
            'https://mp.weixin.qq.com/s?__biz=MzIxMzA3NTA4Mw==&mid=2659074564&idx=1&sn=8b26af22a81ac4f3fa0f77c6c61543a6&chksm=8c36b7e0bb413ef6b2d478d65f6fc6d15b218005246dc951d99fca9bd18bdb14c29e6dde9510&scene=0&key=2900f716d9d8c393a9e334f20103a7356dee1093944f34244d2051216b26d9cb2864e90dad5f52f81388f2d0e9844f9e9dbbbf555d9b7cb8ccff18414fa04c6a952d0825608172433f1cdc971c2e9b4b&ascene=1&uin=MjI3Mjg3NDUwMQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=t9vr7l7A8MGpzxk6cXnaruelsGe0xhKD70uFBM1XlN2zDOKyjKfw%2BcnxGs70Nt9K',
        },
      ],
    };
  }

  render() {
    return (
      <div className="alumniSection">
        <div id="alumniTitle">
          <div className="rowSection">
            <div className="textInner">
              <h1 className="alumniSubTitle">杰出校友采访</h1>
              {this.state.alumniDataList.map(item => (
                <AlumniItem key={item.id} content={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AlumniList;
