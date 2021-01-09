import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import '../styles/Cart.scss';
export const Cart = () => {
  const client = Client.buildClient({
    domain: process.env.REACT_APP_ShopifyDomain,
    storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
  });
  const [cart, setCart] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [checkoutPage, setCheckoutPage] = useState('');
  const checkoutID = localStorage.getItem('checkout');
  useEffect(() => {
    client.checkout
      .fetch(checkoutID)
      .then((checkout) => {
        setCart(checkout.lineItems);
        setSubtotal(parseInt(checkout.subtotalPrice));
        setCheckoutPage(checkout.webUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [checkoutID, client.checkout]);

  const RedirectToCheckOut = () => {
    window.open(checkoutPage, '_blank');
  };
  //item.variant.image.src
  if (cart === null || cart === []) {
    return 'Empty Cart';
  } else {
    return (
      <div className="Cart">
        <div className="cart__detailsContainer">
          {cart.map((item) => {
            return (
              <div className="cart__details" key={item.id}>
                <div className="cart__detailLeft">
                  <div className="cart__itemsImage">
                    <img src={item.variant.image.src} alt="" />
                  </div>
                  <div className="cart__itemsPrice">
                    <h4>{`R${item.variant.price}`}</h4>
                  </div>
                </div>
                <button className="btn-remove-cart-item">DELETE ITEM</button>
              </div>
            );
          })}
        </div>
        <div className="cart__detailsRight">
          <h2>Cart Summary</h2>
          <h4>{`Subtotal: R${subtotal}`}</h4>
          <button className="btn-checkout" onClick={RedirectToCheckOut}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
};
