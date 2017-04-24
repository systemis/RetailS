import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ProductCard from '../../Components/ProductCard/product-card.js';
import $ from 'jquery';

var ExampleProdcuct1 = require('../../public/best-seller-image/ex-1.jpg');
var ExampleProdcuct2 = require('../../public/best-seller-image/ex-2.jpg');
var ExampleProdcuct3 = require('../../public/best-seller-image/ex-3.jpg');
var ExampleProdcuct4 = require('../../public/best-seller-image/ex-4.jpg');

require('./Style/shop-page-style.css');

class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = { 
            SortKind: 1,
            pageIndex: 0,
            trendingProductsData: [
                {
                    Image: ExampleProdcuct1,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"},
                {
                    Image: ExampleProdcuct2,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"},
                {
                    Image: ExampleProdcuct3,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"},
                {
                    Image: ExampleProdcuct4,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00" },
                {
                    Image: ExampleProdcuct2,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"},
                {
                    Image: ExampleProdcuct3,
                    Name:  "Paul Smith",
                    Category: "Handsome",
                    Price: "14.00"},
            ]
        }

        this.chanePageIndex();
    }

    handleChange = event => this.setState({SortKind: $("#shop-choose-kind-sort").val()})

    chanePageIndex = () => {
        const sefl = this;
         $(document).ready(() => {
            var nbList = $("#phan-trang-group > span.page");
            nbList.map((index, el) => {
                $(el).click(function(){
                    sefl.setState({pageIndex: parseInt($(this).attr('id'))})
                })
            })
         })
    };

    nextAndpreviousPage = (choice) => {
        if(choice == 1){
            if(this.state.pageIndex < parseInt(this.state.trendingProductsData.length / 16)){
                this.setState({pageIndex: this.state.pageIndex + choice });
            }
        }else{
            if(this.state.pageIndex > 0) {
                this.setState({pageIndex: this.state.pageIndex + choice });
            }
        }
    }

    renderPhanTrangGroup = () => {
        const sefl = this;
        var pagesAmount = sefl.state.trendingProductsData.length / 16;
        if(pagesAmount > 1) {
            var nutBam = [];
            for(var i = 0; i <= parseInt(pagesAmount); i++){
                let classSpan = "";
                if(i == sefl.state.pageIndex) { classSpan = "active"; }
                nutBam.push((<span id={i} className={"page "+classSpan}> {i + 1} </span>));
                
                if(i == parseInt(pagesAmount)){
                    let previousBtn = "";
                    if(sefl.state.pageIndex > 0) {
                        previousBtn = <span onClick={() => {this.nextAndpreviousPage(-1)}}> Previous </span>
                    }

                    let nextBtn = "";
                    if(sefl.state.pageIndex < pagesAmount - 1) { 
                        nextBtn = <span onClick={() => {this.nextAndpreviousPage(1)}}> Next </span>
                    }
                    
                    var layout = (
                        <div id="phan-trang-group">
                            {previousBtn}
                            {nutBam.map((value, index) => {
                                return value;
                            })}
                            {nextBtn}
                        </div>
                    )
                    return layout;
                }
            }
        }
    }

    render() {
        return (
            <div className="shop-page container">
                <h1> Shop </h1>    
                <div className="select-sort-kind-group row">
                    <select id="shop-choose-kind-sort" onChange={() => this.handleChange()}>
                        <option value="1"> Sắp xếp mặc định   </option>
                        <option value="2"> Bán chạy nhất.     </option>
                        <option value="3"> Giá: thấp tới cao. </option>
                        <option value="4"> Giáo: cao tới thấp.</option>
                    </select>
                </div>
                <div className="show-best-sellers-product row">
                    {this.state.trendingProductsData.map((value, index) => {
                       if(index >= 16 * this.state.pageIndex) {
                           if(index < (16 * this.state.pageIndex + 16)){
                                return <ProductCard key={index} Data={value} />
                           }
                       }
                    })}
                </div>
                {this.renderPhanTrangGroup()}
            </div>
        );
    }
}

export default ShopPage;
