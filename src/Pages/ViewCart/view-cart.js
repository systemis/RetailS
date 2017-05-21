import React, { Component } from 'react';
import ProductRow           from './product-row.js';
import CartMG               from '../../js/cartmanager';

require('./Style/view-cart-page-style.css');

class ViewCartGroup extends Component {
    constructor(props) {
        super(props);
        console.log(CartMG.getProductList());

        this.state = {
            productlist: CartMG.getProductList()
        }

        this.updateProductQuantity = this.updateProductQuantity.bind(this);
    }

    updateProductQuantity(key, value){
        var productlist = this.state.productlist;
        productlist.map((product, index) => {
            if(index === key){
                if(value < 1){
                    if(product.amount <= 1){
                        return ;
                    }
                }

                product.amount += value;
                product.total   = product.price * product.amount;

                this.setState({productlist: productlist});
                return CartMG.setData(product);
            }
        })
    }

    getSubTotal(){
        var subTotal    = 0;
        var productlist = this.state.productlist;
        productlist.map((value, index) => {
            subTotal += value.total;
        })

        return subTotal;
    }

    changeToHuman(){
        var subTotal = this.getSubTotal().toString().split('');
        var index    = 0;
        for(var i = subTotal.length - 1; i >= 0; i--){
            index ++;
            if(index == 3 && i !== 0){
                subTotal[i] = "." + subTotal[i];
                index = 0;
            }
        }

        return subTotal.join("");
    }

    render() {
        return (
            <div className="view-cart-page ">
                <table className="show-products-info-in-cart">
                    <thead>
                        <th className="product"> Product   </th>
                        <th className="quantity"> Quantity </th>
                        <th className="sub-total"> Total   </th>
                    </thead>
                    {this.state.productlist.map((value, index) => {
                        return(
                            <ProductRow 
                                key={index}
                                index={index}
                                data={value}
                                changeQuantity={this.updateProductQuantity}
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
                                <td>£{this.changeToHuman()}</td>
                            </tr>

                            <tr>
                                <th>vat</th>
                                <td>0</td>
                            </tr>

                            <tr>
                                <th>sub total</th>
                                <td>£{this.changeToHuman()}</td>
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
        this.render();

        return true;
    }
}

export default ViewCartGroup;