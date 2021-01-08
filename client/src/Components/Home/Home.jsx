import React from 'react';
import { Banner } from './Banner';
import { NavigationBar } from './NavigationBar';

export const Home = () => {
  return (
    <div className="Home">
      <NavigationBar />
      <Banner />
    </div>
  );
};
