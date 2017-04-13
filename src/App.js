import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Header      from './Components/Header/header.js';
import HomePage    from './Pages/Home/home.js';
import ProductPage from './Pages/Product/product.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
        </div>
      </Router>
    );
  }
}

export default App;
