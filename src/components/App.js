import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Calculator">
        <Calculator />
      </Route>
      <Route path="/Quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);
export default App;
