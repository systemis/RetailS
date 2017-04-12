import React, { Component } from 'react';
import FolderItem from './Components/popular-folder-item.js';

var ExampleProdcuct2 = require('../../public/best-seller-image/ex-2.jpg');
var ExampleProdcuct3 = require('../../public/best-seller-image/ex-3.jpg');
var ExampleProdcuct4 = require('../../public/best-seller-image/ex-4.jpg');

class PopularFolderGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderData: [
                {
                    Title: "FEATURED",
                    Products: [
                        {Image: ExampleProdcuct2, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct4, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct3, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                    ]
                },
                {
                    Title: "NEW PRODUCTS",
                    Products: [
                        {Image: ExampleProdcuct2, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct4, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct3, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                    ]
                },
                {
                    Title: "ON-SALE",
                    Products: [
                        {Image: ExampleProdcuct2, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct4, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct3, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                    ]
                },
                {
                    Title: "TOP RATED",
                    Products: [
                        {Image: ExampleProdcuct2, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct4, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                        {Image: ExampleProdcuct3, Name: "BILLIONAIRE BOYS", Price: "$ 30"},
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className="home-page-popular-folder-group container">
                <div className="show-folder-item">
                    {this.state.folderData.map((value, index) => {
                        return <FolderItem key={index} Data={value} />
                    })}
                </div>
            </div>
        );
    }
}

export default PopularFolderGroup;