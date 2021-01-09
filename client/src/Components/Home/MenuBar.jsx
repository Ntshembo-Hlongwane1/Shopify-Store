import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../styles/MenuBar.scss';
import { Link } from 'react-router-dom';

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
      <div className="products Menu__customerSupport">
        <StoreIcon />
        <Popup
          position="bottom right"
          trigger={<h4 className="menu__link">Store</h4>}
        >
          <Link to="/products/hoodies" className="Router__link">
            <h4
              className="store__links"
              style={{ marginBottom: '1rem', cursor: 'pointer' }}
            >
              Hoodies
            </h4>
          </Link>
          <Link to="/products/jeans" className="Router__link">
            <h4
              className="store__links"
              style={{ marginBottom: '1rem', cursor: 'pointer' }}
            >
              Jeans
            </h4>
          </Link>
          <Link to="/products/sneakers" className="Router__link">
            <h4
              className="store__links"
              style={{ marginBottom: '1rem', cursor: 'pointer' }}
            >
              Sneakers
            </h4>
          </Link>
        </Popup>
      </div>
    </div>
  );
};
