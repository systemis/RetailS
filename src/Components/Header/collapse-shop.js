import React, { Component } from 'react';
require('./Style/collpaseshopstyle.css');

var CollaspeItem = props => (
    <div className="collapse-item col-md-3 col-sm-3">
        <div className="child">
            <div className="show-forder-title">

            </div>
            <div className="show-value">

            </div>
        </div>
    </div>
)

class CollapseShop  extends Component {
    render() {
        return (
            <div className="collpase-shop-tab">
                <div className="show-collapse-shop-item">
                    <div className="item">
                    Hello HelloHelloHelloHelloHelloHelloHello
                    </div>
                    <div className="item">
                        Xin chao 
                    </div>
                </div>
                <div className="show-image col-md-4 col-sm-4">
                    
                </div>
            </div>
        );
    }
}

export default CollapseShop 