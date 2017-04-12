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
                    Image: ExampleProdcuct1,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"
                },
                {
                    Image: ExampleProdcuct2,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"
                },
                {
                    Image: ExampleProdcuct3,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"
                },
                {
                    Image: ExampleProdcuct4,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"
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