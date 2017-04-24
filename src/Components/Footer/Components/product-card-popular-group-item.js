import React, { Component } from 'react';

class ProductCardPopularGroupItem extends Component {
    render() {
        return (
            <div className="product-card-popular-group-item">
                <div className="row">
                    <div className="show-image col-md-3 col-sm-3 col-xs-2">
                        <img src={this.props.Data.Image} alt="Image about product"/>
                    </div>
                    <div className="show-name-price col-md-9 col-sm-9 col-xs-10">
                        <a href={"/product/" + this.props.Data.Name}                  className="show-name">
                            {this.props.Data.Name}
                        </a>
                        <p className="show-price">{this.props.Data.Price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCardPopularGroupItem ;