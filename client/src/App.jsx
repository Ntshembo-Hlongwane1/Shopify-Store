import React, { useEffect } from 'react';
import { Home } from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './Components/Home/NavigationBar';
import { Hoodies } from './Components/Products/Hoodies.jsx';
import { Jeans } from './Components/Products/Jeans';
import { Sneakers } from './Components/Products/Sneakers';
import { ProductDetails } from './Components/Products/ProductDetails';
import Client from 'shopify-buy';

// client.checkout.create().then((checkout) => {
//   // Do something with the checkout
//   console.log(checkout);
// });
export const App = () => {
  const client = Client.buildClient({
    domain: process.env.REACT_APP_ShopifyDomain,
    storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
  });
  const cart = localStorage.getItem('checkout') || false;

  useEffect(() => {
    if (cart === false) {
      client.checkout
        .create()
        .then((checkout) => {
          localStorage.setItem('checkout', checkout.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cart, client.checkout]);

  return (
    <Router>
      <Switch>
        <Route path="/products/hoodies" exact={true}>
          <NavigationBar />
          <Hoodies />
        </Route>
        <Route path="/product-detail/:id" exact={true}>
          <NavigationBar />
          <ProductDetails />
        </Route>
        <Route path="/products/jeans" exact={true}>
          <NavigationBar />
          <Jeans />
        </Route>
        <Route path="/products/sneakers" exact={true}>
          <NavigationBar />
          <Sneakers />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
