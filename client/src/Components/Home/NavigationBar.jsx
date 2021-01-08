import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import { Avatar } from '@material-ui/core';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../styles/NavigationBar.scss';
import { MenuBar } from './MenuBar';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar__top">
        <div className="top__left">
          <LanguageIcon />
          <h4 className="top__leftLink">English / South Africa</h4>
        </div>
        <div className="top__right">
          <HelpIcon className="top__rightIcon" />
          <h4 className="top__rightLink">Customer Care</h4>
        </div>
      </div>
      <div className="Navigation__bottom">
        <div className="bottom__left">
          <div className="left__companyName">
            <Link to="/" className="Router__link">
              <h2 className="companyName">Hlongwane Botique</h2>
            </Link>
          </div>
          <div className="left__inventoryCategories">
            <Link to="/products/hoodies" className="Router__link">
              <h4 className="invertory__categories">Hoodies</h4>
            </Link>
            <Link to="/products/jeans" className="Router__link">
              <h4 className="invertory__categories">Jeans</h4>
            </Link>
            <Link to="/products/sneakers" className="Router__link">
              <h4 className="invertory__categories">Sneakers</h4>
            </Link>
          </div>
        </div>
        <div className="bottom__right">
          <div className="search">
            <SearchIcon />
            <h4 className="right__bottomSearchText">Search</h4>
          </div>
          <h4 className="right__bottomLink line-splitter">|</h4>
          <FavoriteIcon className="right__bottomLink" />
          <ShoppingCartIcon className="right__bottomLink" />
          <Popup
            trigger={
              <Avatar src="" className="right__bottomLink user-avatar" />
            }
            position="bottom right"
          >
            <MenuBar />
          </Popup>
        </div>
      </div>
    </nav>
  );
};
