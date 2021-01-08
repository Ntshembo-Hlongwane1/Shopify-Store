import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../../styles/MenuBar.scss';

export const MenuBar = () => {
  return (
    <div className="Menu">
      <div className="Menu__cart">
        <ShoppingCartIcon />
        <h4 className="menu__link">Shopping Cart</h4>
      </div>
      <div className="Menu__wishlist">
        <FavoriteIcon />
        <h4 className="menu__link">Wishlist</h4>
      </div>
      <div className="Menu__search">
        <SearchIcon />
        <h4 className="menu__link">Search</h4>
      </div>
      <div className="Menu__customerSupport">
        <HelpIcon />
        <h4 className="menu__link">Customer Support</h4>
      </div>
    </div>
  );
};
