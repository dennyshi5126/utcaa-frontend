import React from 'react';
import './pageBanner.scss';

const PageBannerComponent = ({ pageBannerTitle }) => {
  return (
    <div className="pageBanner">
      <h1>{pageBannerTitle}</h1>
    </div>
  );
};

export default PageBannerComponent;
