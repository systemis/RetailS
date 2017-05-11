import React, { Component } from 'react';
import ProductCard from '../../Components/ProductCard/product-card.js';

var ExampleProdcuct1 = require('../../public/ex-1.jpg');
var ExampleProdcuct2 = require('../../public/ex-2.jpg');
var ExampleProdcuct3 = require('../../public/ex-3.jpg');
var ExampleProdcuct4 = require('../../public/ex-4.jpg');

class TrendingGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingProductsData: [
                {
                    imagefilename: ExampleProdcuct1,
                    name:  "Paul Smith",
                    category: "Handsome",
                    price: "14.00"
                },
                {
                    imagefilename: ExampleProdcuct2,
                    name:  "Paul Smith",
                    category: "Handsome",
                    price: "14.00"
                },
                {
                    imagefilename: ExampleProdcuct3,
                    name:  "Paul Smith",
                    category: "Handsome",
                    price: "14.00"
                },
                {
                    imagefilename: ExampleProdcuct4,
                    name:  "Paul Smith",
                    category: "Handsome",
                    price: "14.00"
                },
            ]
        }
    }

    render() {
        return (
            <div className="home-page-trending container">
                <div className="header-group-type-o">
                    <h1 className="title"> Trending </h1>
                    <h3 className="des"> MOST TRENDY CLOTHES</h3>
                    <div className="ngan"></div>
                </div>
                <div className="show-trending-product row">
                    {this.state.trendingProductsData.map((value, index) => {
                       return <ProductCard key={index} Data={value} />
                    })}
                </div>
            </div>
        );
    }
}

export default TrendingGroup;