import React, { Component } from 'react';

var exampleProduct = require('../Accest/pamooxhi.png');

class HeaderSlideFirstItem extends Component {
    render() {
        return (
            <div className={"header-slide-item first-item " + this.props.className}>
                <div className="main-group container">
                    <div className="row">
                        <div className="col-md-7 col-sm-7 col-xs-7 left-child">
                            <div className="child">
                                <h1>We represent</h1>
                                <h1>LONDON STREET STYLE</h1>
                                <div className="show-btn-go-to-shop">
                                    <button className="btn btn-default">Shop now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-5 right-child">
                            <img src={exampleProduct} alt="Example product"/>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default HeaderSlideFirstItem;