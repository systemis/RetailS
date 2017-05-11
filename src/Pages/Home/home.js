import React, { Component } from 'react';
import HeaderSlide          from './header-slide.js';
import TrendingGroup        from './trending.js';
import CategoryGroup        from './category-group.js'
import BestSellerGroup      from './best-sellers.js'
import $                    from 'jquery';

require('./Style/home-page-style.css');

class HomePage extends Component {
    render() {
        return (
            <div className="home-page-layout">
                <HeaderSlide />
                <TrendingGroup />
                <CategoryGroup />
                <BestSellerGroup />
            </div>
        );
    }

    componentDidMount() {
        $.getJSON("http://localhost:3000/all-product", data => {
            console.log(data);
            console.log(JSON.parse(data));
        })
    }
}

export default HomePage;