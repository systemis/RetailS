import React, { Component } from 'react';
require('./Style/firstheaderstyle.css');

class FirstHeader extends Component {
    render() {
        return (
            <div className="first-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 left">
                            <span className="show-account-link">
                                My Account details
                            </span>
                            <span className="dot-khoangcach">|</span>
                            <span className="show-date-now">
                                {new Date().toLocaleDateString()}
                            </span>
                        </div>
                        <div className="col-md-6 col-sm-6 right">
                            <span className="show-my-account">My account </span>
                            <span className="show-store-link">Store</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstHeader;