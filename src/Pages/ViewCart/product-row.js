import React, { Component } from 'react';

var EXIMAGE = require('../../public/ex-1.jpg');
class ProductRow extends Component {
    render() {
        return (
            <tr className="view-cart-product-row">
                <td className="show-product">
                    <div className="row">
                        <div className="show-image col-md-2 col-sm-2 col-xs-6">
                            <img 
                                src={this.props.data.image} 
                                alt="Image"
                                style={{marginTop: "20px"}}/>
                        </div>
                        <div className="show-info col-md-10 col-sm-10 col-xs-6">
                            <h3 className="show-name">
                                <a 
                                    href={"/product-by-name/" + this.props.data.name}
                                    style={{color: "black", textDecoration: "none"}}>
                                    {this.props.data.name}
                                </a>
                            </h3>
                            <p className="show-price">
                                {this.props.data.price}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="show-quantity">
                    <button 
                        className="btn btn-numberic" 
                        id="numberic-plus"
                        onClick={() => this.props.changeQuantity(this.props.index, 1)}>
                        +
                    </button>
                    <input 
                        type="number"
                        id="product-row-quantity" 
                        value={this.props.data.amount}/>
                    <button 
                        className="btn btn-numberic" 
                        id="numberic-minus"
                        onClick={() => this.props.changeQuantity(this.props.index, -1)}>
                        -
                    </button>
                </td>
                <td className="show-sub-total">
                    {this.props.data.total}
                </td>
            </tr>
        );
    }
}

export default ProductRow;