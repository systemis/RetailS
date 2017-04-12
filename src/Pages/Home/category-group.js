import React, { Component } from 'react';

var ExampleImage1 = require('../../public/Category-Image/ex-1.jpg');
var ExampleImage2 = require('../../public/Category-Image/ex-2.jpg');
var ExampleImage3 = require('../../public/Category-Image/ex-3.jpg');

var CategoryItem = props => (
    <div className="home-page-category-group-category-item col-md-4 col-sm-4">
        <div className="child">
            <div className="show-image">
                <img src={props.Data.Image} alt="Image about category" />
                <div className="background"></div>
            </div>
            <div className="show-name">
                <a href="#"> <span>{props.Data.Name}</span> </a>
            </div>
        </div>
    </div>
)

class CategoryGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            CategoryData: [
                {Image: ExampleImage1, Name: "Man"},
                {Image: ExampleImage2, Name: "Shoes"},
                {Image: ExampleImage3, Name: "Women"},
            ]
        }
    }

    render() {
        return (
            <div className="home-page-category-group container">
                <div className="show-categorys row">
                    {this.state.CategoryData.map((value, index) => {
                        return <CategoryItem key={index} Data={value} />
                    })}
                </div>
            </div>
        );
    }
}

export default CategoryGroup;