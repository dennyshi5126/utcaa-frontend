import React, { Component } from 'react';
import './AlumniItem.scss';

class AlumniItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="alumniContainer">
        <div className="row">
          <div className="col-md-5 alumniItemImgWrapper">
            <div className="imgSection">
              <a href={this.props.content.alumniLink} target="">
                <span>
                  <img src={this.props.content.alumniImg} className="card-img" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-5 itemContent">
            <div className="alumniName">
              <strong>{this.props.content.alumniName}</strong>
            </div>
            <div className="alumniDescription">{this.props.content.alumniInfo}</div>

            <div>
              <a href={this.props.content.alumniLink}>
                <button className="alumniReadMoreButton">
                  <span>阅读更多</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumniItem;
