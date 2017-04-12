import React, { Component } from 'react';

require('./Style/product-card-style.css');

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card-item col-sm-3 col-md-3">
                <div className="child">
                    <div className="show-image-label">
                        <img src={this.props.Data.Image} alt="Image"/>
                        <span className="sale"> Sale </span>
                    </div>
                    <div className="show-body">
                        <div className="show-title-btnadd row">
                            <div className="show-title col-sm-10 col-md-10 col-xs-10">
                                { this.props.Data.Name }
                            </div>
                            <div className="show-btnadd col-sm-2 col-md-2 col-xs-2">
                                <i className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="show-category">
                            {this.props.Data.Category}
                        </div>
                        <div className="show-price">
                            {this.props.Data.Price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;