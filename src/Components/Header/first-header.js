import React, { Component } from 'react';
require('./Style/firstheaderstyle.css');

class FirstHeader extends Component {
    render() {
        return (
            <div className="first-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 left">
                            <a href="/my-account" className="show-account-link">
                                My Account details
                            </a>
                            <span className="dot-khoangcach">|</span>
                            <span className="show-date-now">
                                {new Date().toLocaleDateString()}
                            </span>
                        </div>
                        <div className="col-md-6 col-sm-6 right">
                            <a href="my-account" className="show-my-account">
                                My account 
                            </a>
                            <span className="show-store-link">Store</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstHeader;