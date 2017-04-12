import React, { Component } from 'react';

class ProductCardPopularGroupItem extends Component {
    render() {
        return (
            <div className="product-card-popular-group-item">
                <div className="row">
                    <div className="show-image col-md-3 col-sm-3 col-xs-3">
                        <img src={this.props.Data.Image} alt="Image about product"/>
                    </div>
                    <div className="show-name-price col-md-9 col-sm-9 col-xs-9">
                        <p className="show-name">{this.props.Data.Name}</p>
                        <p className="show-price">{this.props.Data.Price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCardPopularGroupItem ;