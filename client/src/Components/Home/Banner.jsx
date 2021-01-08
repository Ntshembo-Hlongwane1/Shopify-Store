import React from 'react';
import BannerImg from '../../Assets/cover.jpeg';
import '../../styles/Banner.scss';

export const Banner = () => {
  return (
    <div className="Banner">
      <img src={BannerImg} alt="Home Banner" className="HomeBanner" />
    </div>
  );
};
