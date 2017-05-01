import React, { Component } from 'react';
import CollapseShop from './collapse-shop.js'

var Logo1 = require('./Accest/logo1.png');

require('./Style/navigationheaderstyle.css');

class NavigationHeader extends Component {
    render() {
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
                            <a href="/view-cart" className="navbar-toggle">
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
                                    <a href="/view-cart">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationHeader;