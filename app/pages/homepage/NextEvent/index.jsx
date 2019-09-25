import React, { Component } from 'react';
import './NextEvent.scss';

export default function nextEventComponent({ nextEvent }) {
  return (
    <div id="next-event" className="nextEventSection">
      <h3>最 新 活 动</h3>
      <div className="nextEventTitle">{nextEvent.title}</div>
      <div className="nextEventSubtitle">《{nextEvent.subtitle}》</div>
      <div className="nextEventInfo">
        {nextEvent.datetime}, {nextEvent.location}
      </div>
      <a href={nextEvent.eventLink} target="_blank" className="nextEventBtn">
        活动回顾
        <span className="nextEventBtnIcon">
          <b>&nbsp;></b>
        </span>
      </a>
    </div>
  );
}
