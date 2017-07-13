import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

import {connect}             from 'react-redux';
import cartMG                from './js/cartmanager.js'
import Header                from './Components/Header/header.js';
import HomePage              from './Pages/Home/home.js';
import ShopPage              from './Pages/Shop/shop.js';
import AboutUsPage           from './Pages/AboutUs/about-us.js';
import ProductPage           from './Pages/Product/product.js';
import LoginPage             from './Pages/Login/login.js';
import UserDashBoardPage     from './Pages/UserDashBoard/user-dashboard.js';
import Footer                from './Components/Footer/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
              <Header />
              <Route exact path='/'          component={HomePage}    />
              <Route path='/about-us'        component={AboutUsPage} />
              <Route path='/my-account'      component={UserDashBoardPage} />
              <Route path='/shop'            component={ShopPage} />
              <Route path='/login'           component={LoginPage} />
              <Route path='/product-by-name/:name' component={ProductPage} />
              <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }

  componentDidMount() {
    this.props.dispatch({type: `CHANGE_CART_DATA`, value: cartMG.getProductList()});
  }
}

export default connect(state => {
  cartData: state.cartData
})(App);
