import React from 'react';
import './alert.scss';

export default props => {
  return <div className="info alert alert-danger">{props.info}</div>;
};
