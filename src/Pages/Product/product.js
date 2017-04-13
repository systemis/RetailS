import React, { Component } from 'react';
import SimpleProductInfo from './simple-product-info.js';

var ExampleProdcuct1 = require('../../public/ex-1.jpg');

require('./Style/product-page-style.css');

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: {
                id: 1029,
                name: "CHEAP MONDAY",
                category: "Men",
                des: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. bag",
                price: "20$",
                review: "httpl...",
                weight: 12,
                dimensions: 27,
                material: "Cao su",
                status: "Sale",
                tags: ["Bag", "Bags"],
                productimages: ExampleProdcuct1
            }
        }
    }
    render() {
        return (
            <div className="product-view-page container">
                <h1>Product</h1>    
                <SimpleProductInfo Data={this.state.productInfo}/>            
            </div>
        );
    }
}

export default ProductPage;