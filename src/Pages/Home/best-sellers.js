import React, { Component } from 'react';
import ProductCard from '../../Components/ProductCard/product-card.js';
import productMG            from '../../js/product.js';
import $           from 'jquery';

class BestSellerGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingProductsData: []
        }

        this.getProduct();
    }

    getProduct(){
        const sefl = this;
        productMG.getBessellProducts(data => {
            sefl.setState({trendingProductsData: data});
        })
    }

    render() {
        return (
            <div className="home-page-best-seller-group container">
                <div className="header-group-type-o">
                    <h1 className="title"> Bestseller </h1>
                    <h3 className="des"> MOST SOLD ITEMS IN THE MARKET</h3>
                    <div className="ngan"></div>
                </div>
                <div className="show-best-sellers-product row">
                    {this.state.trendingProductsData.map((value, index) => {
                       return <ProductCard key={index} Data={value} />
                    })}
                </div>
            </div>
        );
    }
}

export default BestSellerGroup;