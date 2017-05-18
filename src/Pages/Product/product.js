import React, { Component } from 'react';
import ProductSimpleInfo    from './product-simple-info.js';
import ProductDetailsInfo   from './product-details-info.js';
import $                    from 'jquery';

const ExampleProdcuct1 = require('../../public/ex-1.jpg');
require('./Style/product-page-style.css');

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.productName      = props.match.params.name;
        this.state = {productInfo: {
                // id: 1029,
                // name: "CHEAP MONDAY",
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

        this.getProductInfos();
    }
    
    getProductInfos() {
        const sefl        = this;
        $.ajax({
            url: "/get-product-by-name/" + this.productName,
            type: "get",
            success: data => {
                sefl.setState({productInfo: data});
                
                // Tăng lượt xem của sản phẩm .
                if(data) setTimeout(() => this.plusProductSell(), 500);
            },
            error: err => {
                console.log(err)
            }
        })
    }

    plusProductSell(){
        console.log("Tang san pham ");
        $.ajax({
            url: "/plus-product-sell/" + this.productName, type:"POST", 
            success: data => console.log(data), 
            error: err => console.log(err)
        });
    }

    render() {
        if(this.state.productInfo){
            return (
                <div className="product-view-page container">
                    <h1>Product</h1>    
                    <ProductSimpleInfo  Data ={this.state.productInfo}/>   
                    <ProductDetailsInfo Infos={this.state.productInfo}/>   
                </div>
            );
        }else{
            return (
                <h1>Khong co du lieu</h1>
            )
        }
    }
}

export default ProductPage;