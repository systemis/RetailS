import React, { Component } from 'react';
import ProductSimpleInfo    from './product-simple-info.js';
import ProductDetailsInfo   from './product-details-info.js';
import $                    from 'jquery';

var ExampleProdcuct1 = require('../../public/ex-1.jpg');

require('./Style/product-page-style.css');

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: {
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
        const productName = this.props.match.params.name;
        $.ajax({
            url: "/get-product-by-name/" + productName,
            type: "POST",
            success: data => {
                console.log(data);
                
                sefl.setState({productInfo: data});
                console.log(sefl.state.productInfo);
            },
            error: err => {
                console.log(err)
            }
        })
    }

    render() {
        console.log(this.state.productInfo);
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