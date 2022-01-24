import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Akelab from '../views/AKELAB/Akelab';
import Fibonacci from '../views/Fibonacci/Fibonacci';
import Home from '../views/Home';
import Movies from '../views/Movies/Movies';

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Fibonacci">
          <Fibonacci />
        </Route>
        <Route path="/AKELAB">
          <Akelab />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Rutas;