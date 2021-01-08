import React from 'react';
import { Home } from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './Components/Home/NavigationBar';
import { Hoodies } from './Components/Products/Hoodies.jsx';
import { Jeans } from './Components/Products/Jeans';
import { Sneakers } from './Components/Products/Sneakers';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/hoodies" exact={true}>
          <NavigationBar />
          <Hoodies />
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
