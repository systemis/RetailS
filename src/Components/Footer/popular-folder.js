import React, { Component } from 'react';
import FolderItem           from './Components/popular-folder-item.js';
import productMG            from '../../js/product.js';

var ExampleProdcuct2 = require('../../public/best-seller-image/ex-2.jpg');
var ExampleProdcuct3 = require('../../public/best-seller-image/ex-3.jpg');
var ExampleProdcuct4 = require('../../public/best-seller-image/ex-4.jpg');

class PopularFolderGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderData: [
                // {
                //     Title: "FEATURED",
                //     Products: [
                //         {image: ExampleProdcuct2, name: "BILLIONAIRE BOYS", price: "$ 30"},
                //         {image: ExampleProdcuct4, name: "BILLIONAIRE BOYS", price: "$ 30"},
                //         {image: ExampleProdcuct3, name: "BILLIONAIRE BOYS", price: "$ 30"},
                //     ]
                // },
                // {
                //     Title: "NEW PRODUCTS",
                //     Products: [
                //         {image: ExampleProdcuct2, name: "BILLIONAIRE BOYS", price: "$ 30"},
                //         {image: ExampleProdcuct4, name: "BILLIONAIRE BOYS", price: "$ 30"},
                //         {image: ExampleProdcuct3, name: "BILLIONAIRE BOYS", price: "$ 30"},
                //     ]
                // },
                {
                    Title: "ON-SALE",
                    Products: [
                        {image: ExampleProdcuct2, name: "BILLIONAIRE BOYS", price: "$ 30"},
                        {image: ExampleProdcuct4, name: "BILLIONAIRE BOYS", price: "$ 30"},
                        {image: ExampleProdcuct3, name: "BILLIONAIRE BOYS", price: "$ 30"},
                    ]
                },
                {
                    Title: "BESTSELLER",
                    Products: [
                        {image: ExampleProdcuct2, name: "BILLIONAIRE BOYS", price: "$ 30"},
                        {image: ExampleProdcuct4, name: "BILLIONAIRE BOYS", price: "$ 30"},
                        {image: ExampleProdcuct3, name: "BILLIONAIRE BOYS", price: "$ 30"},
                    ]
                }
            ]
        }
    }

    enTry(title, data) {
        var nD      = this.state.folderData;
        var folder  = {
            Title: title,
            Products: data
        };;
        
        nD.push(folder);
        this.setState({folder: nD});
    }

    getNewProduct(){
        productMG.getNewProduct(data => {
            this.enTry("New products", data);
        })
    }

    getBestSellProduct(){
        const self = this;
        productMG.getBessellProducts(data => {
            this.enTry("BESTSELLER", data);
        })
    }

    componentWillMount() {
        this.getNewProduct();        
        this.getBestSellProduct();
    }

    render() {
        return (
            <div className="home-page-popular-folder-group container">
                <div className="show-folder-item">
                    <div className="row"> 
                        {this.state.folderData.map((value, index) => {
                            if(index === 0){
                                return <FolderItem key={index} Data={value} />
                            }else{
                                return <FolderItem key={index} Data={value} />
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularFolderGroup;