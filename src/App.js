import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'
import './App.css';

import Header       from './Components/Header/header.js';
import HomePage     from './Pages/Home/home.js';
import ShopPage     from './Pages/Shop/shop.js';
import AboutUsPage  from './Pages/AboutUs/about-us.js';
import ProductPage  from './Pages/Product/product.js';
import ViewCartPage from './Pages/ViewCart/view-cart.js';
import LoginPage    from './Pages/Login/login.js';
import Footer       from './Components/Footer/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
              <Header />
              <Route exact path='/'      component={HomePage}    />
              <Route path='/shop'        component={ShopPage}    />
              <Route path='/about-us'    component={AboutUsPage} />
              <Route path='/product/:id' component={ProductPage} />
              <Route path='/view-cart'   component={ViewCartPage} />
              <Route path='/login'       component={LoginPage} />
              <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
