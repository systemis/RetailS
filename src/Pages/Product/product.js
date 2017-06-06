import React, { Component } from 'react';
import ProductSimpleInfo    from './product-simple-info.js';
import ProductDetailsInfo   from './product-details-info.js';
import $                    from 'jquery';
import userMG               from '../../js/user.js';
import CartMG               from"../../js/cartmanager.js";

const ExampleProdcuct1 = require('../../public/ex-1.jpg');
require('./Style/product-page-style.css');

function checkEmptyObject(obj){
    var index = -1;

    for(var item in obj) {
        index ++;
    }

    console.log(index);
    return index;
}

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.productName      = props.match.params.name;
        this.state = {productInfo: {
                // total: 0,
                // amount: 0,
                // id: 102329,
                // name: "CHEAP MONDAYgkbkjb  mdn",
                // description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. bag",
                // price: "20$",
                // review: "httpl...",
                // imagefilename: ExampleProdcuct1,
                
                // // Additional information 
                // category: "Men",
                // weight: 12,
                // height: 27,
                // material: "Cao su",
                // status: "Sale",
                // tags: ["Bag", "Bags"], 
            }
        }

        userMG.checkLogin(isLogin => {
            this.setState({isLogin: isLogin})
        })

        this.getProductInfos();

        this.addProduct_Cart = this.addProduct_Cart.bind(this);
        this.updateData      = this.updateData.bind(this);
    }

    getProductInfos() {
        const sefl        = this;
        $.ajax({
            url: "/get-product-by-name/" + this.productName,
            type: "get",
            success: data => {
                data.amount  = 1;
                data.total   = data.price;
                data.reviews = JSON.parse(data.reviews);
                sefl.setState({productInfo: data});

                // Tăng lượt xem của sản phẩm .
                setTimeout(() => this.plusProductSell(), 500);
            },
            error: err => {
                console.log(err)
            }
        })
    }

    // Plus view 
    plusProductSell(){
        console.log("Tang san pham ");
        $.ajax({
            url: "/plus-product-sell/" + this.productName, type:"POST", 
            success: data => console.log(data), 
            error: err => console.log(err)
        });
    }

    addProduct_Cart(){
        console.log(this.state.productInfo);
        
        CartMG.newProduct(this.state.productInfo);
    }

    updateData(data){
        this.setState({productInfo: data});
    }

    updateProductReview(message){
        var review = {
            message: message,
            date   : new Date().toLocaleDateString()
        };
    }

    render() {
        if(this.state.productInfo !== 'err' || checkEmptyObject(this.state.productInfo) > 0){
            return (
                <div className="product-view-page container">
                    <h1>Product</h1>    
                    <ProductSimpleInfo  
                        Data        ={this.state.productInfo}
                        update      ={this.updateData}
                        addListener ={this.addProduct_Cart}
                        />   
                    
                    <ProductDetailsInfo 
                        Infos   ={this.state.productInfo}
                        idLogin ={this.state.isLogin}
                        />   
                </div>
            );
        }else{
            return (
                <h1 style={{textAlign: "center", padding: "10px 20px", fontFamily: "Monospace"}}>
                    Không có dữ liệu .
                </h1>
            )
        }
    }
}

export default ProductPage;