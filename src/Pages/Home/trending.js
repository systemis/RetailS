import React, { Component } from 'react';
import ProductCard          from '../../Components/ProductCard/product-card.js';
import $                    from 'jquery';

class TrendingGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingProductsData: []
        }

        this.getProduct();
    }

    getProduct(){
        const sefl = this;
        $.ajax({
            url: "/get-related-products", type: 'GET', 
            success: data => {
                if(data){
                    console.log(data);
                    this.setState({trendingProductsData: data});
                }       
            },
            error: err => console.log(err)
        })
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
                       if(index < 4){
                           return <ProductCard key={index} Data={value} />
                       }
                    })}
                </div>
            </div>
        );
    }
}

export default TrendingGroup;