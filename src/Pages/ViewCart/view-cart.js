import React, { Component } from 'react';
import ProductRow from './product-row.js';

require('./Style/view-cart-page-style.css');

class ViewCartPage extends Component {
    render() {
        return (
            <div className="view-cart-page container ">
                <h1>Cart</h1>
                <table className="show-products-info-in-cart">
                    <thead>
                        <th className="product"> Product   </th>
                        <th className="quantity"> Quantity </th>
                        <th className="sub-total"> Total   </th>
                    </thead>
                    <ProductRow />
                    <ProductRow />
                    <ProductRow />
                    <ProductRow />
                </table>
                <div className="show-recommed-total">
                    <div className="show-recommed-product-group">
                        <h2 className="title">Recommed </h2>
                    </div>
                    <div>
                        <table className="show-cart-total">
                            <h2 className="title">Cart total </h2>
                            <tr>
                                <th>sub total</th>
                                <td>£64.00</td>
                            </tr>

                            <tr>
                                <th>vat</th>
                                <td>£13.80</td>
                            </tr>

                            <tr>
                                <th>sub total</th>
                                <td>£82.80</td>
                            </tr>
                        </table>
                    </div>
                    <div className="show-btnupdatecart-btncheckout">
                        <a href="#" className="btnn update-cart">
                            Update Cart
                        </a>
                        <a href="#" className="btnn check-out">
                            Check out 
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCartPage;