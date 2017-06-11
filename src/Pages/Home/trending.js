import React, { Component } from 'react';
import ProductCard          from '../../Components/ProductCard/product-card.js';
import productMG            from '../../js/product.js';
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
        productMG.getNewProduct(data => {
            sefl.setState({trendingProductsData: data});
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