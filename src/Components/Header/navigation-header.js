import React, { Component } from 'react';
import {connect}            from 'react-redux';
import CollapseShop         from './collapse-shop.js'

var Logo1 = require('./Accest/logo1.png');

require('./Style/navigationheaderstyle.css');

class NavigationHeader extends Component {
    itemList_cart(cartData){
        const domsRender = [];
        if(!cartData) return [];
        if(cartData.length < 0) return [];

        for(var i = 0; i < cartData.length; i++){
            const item = (
                <li className="cart-item">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 show-photo">
                            <img src={cartData[i].image} alt="Image product" />
                        </div>
                        <div className="col-md-6 col-sm-6 show-name show-quantily">
                            <p className="show-name">{cartData[i].name}</p>
                            <p className="show-quantily"> {cartData[i].amount} </p>
                        </div>
                        <div className="col-md-3 col-sm-3 show-price">
                            <p> {cartData[i].price} </p>
                        </div>
                    </div>
                </li>
            )

            domsRender.push(item);
        }

        return domsRender;
    }

    render() {
        const cartData  = this.props.cartData;
        const cartItems = this.itemList_cart(cartData);
        console.log(cartItems);
        const showQuantilyCart = () => {
            if(!cartData) return;
            if(cartData.length <= 0) return;
            
            return (
                <span className="show-quantily-of-cart">
                    {cartData.length.toString()}
                </span>
            )}

        return (
            <div className="navigation-header">
                <nav className="navbar navbar-default navbar-menu-app container">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span> 
                            </button>
                            <a href="/my-account/cart" className="navbar-toggle">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </a>
                            <a className="navbar-brand" href="/">
                                <img src={Logo1} alt="Logo icon "/>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/">Home</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle"         href="/shop">
                                        Shop 
                                    </a>
                                </li>
                                <li><a href="/about-us">About Us</a></li> 
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <div 
                                        className="dropdown" 
                                        id="dh-cart-group">
                                        <span 
                                            className="dropdown-toggle" 
                                            data-toggle="dropdown">
                                            <span 
                                                className="fa fa-shopping-cart" 
                                                aria-hidden="true">
                                                    {showQuantilyCart()}
                                            </span>
                                        </span>
                                        <ul className="dropdown-menu" role="menu">
                                            {cartItems.map(item => item)}
                                            <li className="dh-group">
                                                <a 
                                                    href="/my-account/cart"                 
                                                    className="btn-view-cart">
                                                    View Cart 
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

/**
 * <a href="/my-account/cart">
                                    </a>
 */

export default connect(state => {
    return{
        cartData: state.cartData
    }
})(NavigationHeader);