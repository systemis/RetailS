import React, { Component } from 'react';
import ProductRow from './product-row.js';

require('./Style/view-cart-page-style.css');

class ViewCartGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: [1, 2, 3, 4]
        }
    }

    render() {
        const updateProductQuantity = (key, choice) => {
            console.log(this.state.quantity[key]);
            
            var allQuantity = this.state.quantity;
            var quantity    = allQuantity[key];

            switch(choice) {
                case "+":
                    quantity += 1;
                    break;
                case "-":
                    if(quantity >= 0) {
                        quantity -= 1;
                    }
                    break;
                default: 
                    return console.log("Error: Choice to update product quantity is not correct");
                    break;
            }

            allQuantity[key] = quantity;
            this.setState({quantity: allQuantity});
        }

        return (
            <div className="view-cart-page ">
                <table className="show-products-info-in-cart">
                    <thead>
                        <th className="product"> Product   </th>
                        <th className="quantity"> Quantity </th>
                        <th className="sub-total"> Total   </th>
                    </thead>
                    {this.state.quantity.map((value, index) => {
                        return(
                            <ProductRow 
                                quantity={this.state.quantity} 
                                changeQuantity={updateProductQuantity}
                                index={index}
                            />)
                    })}
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

    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextState);
    }
}

export default ViewCartGroup;