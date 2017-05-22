import React, { Component } from 'react';
import ProductRow           from './product-row.js';
import CartMG               from '../../js/cartmanager';
import $                    from 'jquery';

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

                // Change amount and total price 
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

    // Cứ cách ba số là một dấu chấm .
    getSubTotalReal(){
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

    // check out function .
    checkOut(){
        const self = this;
        $.ajax({
            url: '/check-out', type: 'POST', 
            data: {data: JSON.stringify(self.state.productlist)},
            success: result => {
                console.log(result);
                if(result === "Info correct"){
                    alert("Thông tin của bạn còn thiếu. Xin kiểm tra lại ở phần thông tin!");
                }
            }, 
            error: err => console.log("Error: " + err)});
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
                                <td>£{this.getSubTotalReal()}</td>
                            </tr>

                            <tr>
                                <th>vat</th>
                                <td>0</td>
                            </tr>

                            <tr>
                                <th>sub total</th>
                                <td>£{this.getSubTotalReal()}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="show-btnupdatecart-btncheckout">
                        <button
                            className="btnn update-cart"
                            onClick={() => location.reload()}>
                            Update Cart
                        </button>
                        <button 
                            className="btnn check-out"
                            onClick={() => this.checkOut()}>
                            Check out 
                        </button>
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