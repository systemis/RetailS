import React, { Component } from 'react';
import statusItem           from '../status-item.js';
require('./Style/product-card-style.css');

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card-item col-sm-3 col-md-3">
                <div className="child">
                    <div className="show-image-label">
                        <img src={this.props.Data.image} alt="Image"/>
                        {statusItem(this.props.Data.status)}
                    </div>
                    <div className="show-body">
                        <div className="show-title-btnadd row">
                            <div className="show-title col-sm-10 col-md-10 col-xs-10">
                                <a href={"/product-by-name/" + this.props.Data.name}> { this.props.Data.name } </a>
                            </div>
                            <div className="show-btnadd col-sm-2 col-md-2 col-xs-2">
                                <i className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="show-category">
                            <a href={"/shop/category/" + this.props.Data.category}> {this.props.Data.category} </a>
                        </div>
                        <div className="show-price">
                            {this.props.Data.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;