import React, { Component }        from 'react';
import ProductCardPopularGroupItem from './product-card-popular-group-item'

require('../Style/popular-folder-item.css');

class PopularFolderItem extends Component {
    render() {
        return (
            <div className="home-page-popular-folder-group-item col-md-3 col-sm-3">
                <div className="child">
                    <div className="header-group">
                        <p className="show-title">{this.props.Data.Title}</p>
                    </div>
                    <div className="show-products">
                        {this.props.Data.Products.map((value, index) => {
                            return <ProductCardPopularGroupItem key={index} Data={value}/>
                        })}
                    </div>
                </div>                
            </div>
        );
    }
}

export default PopularFolderItem;