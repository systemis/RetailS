import React, { Component } from 'react';

var EXIMAGE = require('../../public/ex-1.jpg');
class ProductRow extends Component {
    render() {
        return (
            <tr className="view-cart-product-row">
                <td className="show-product">
                    <div className="row">
                        <div className="show-image col-md-2 col-sm-2 col-xs-6">
                            <img src={EXIMAGE} alt="Image"/>
                        </div>
                        <div className="show-info col-md-10 col-sm-10 col-xs-6">
                            <h3 className="show-name">
                                Pocket Watch
                            </h3>
                            <p className="show-price">
                                £16.00
                            </p>
                        </div>
                    </div>
                </td>
                <td className="show-quantity">
                    <button 
                        className="btn btn-numberic" 
                        id="numberic-plus"
                        onClick={() => this.props.changeQuantity(this.props.index, "+")}>
                        +
                    </button>
                    <input type="number" id="product-row-quantity" value="4"/>
                    <button 
                        className="btn btn-numberic" 
                        id="numberic-minus"
                        onClick={() => this.props.changeQuantity(this.props.index, "-")}>
                        -
                    </button>
                </td>
                <td className="show-sub-total">
                    £64.00
                </td>
            </tr>
        );
    }
}

export default ProductRow;