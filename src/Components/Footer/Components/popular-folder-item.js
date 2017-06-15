import React, { Component }        from 'react';
require('../Style/popular-folder-item.css');

const ProductCard = props => {
    return(
        <div className="product-card-popular-group-item">
            <div className="row">
                <div className="show-image col-md-3 col-sm-3 col-xs-2">
                    <img src={props.Data.image} alt="Image about product"/>
                </div>
                <div className="show-name-price col-md-9 col-sm-9 col-xs-10">
                    <a href={"/product-by-name/" + props.Data.name} className="show-name">
                        {props.Data.name}
                    </a>
                    <p className="show-price">{props.Data.price}</p>
                </div>
            </div>
        </div>
    )
}

class PopularFolderItem extends Component {
    render() {
        return (
            <div className={"home-page-popular-folder-group-item col-md-3 col-sm-4 "}>
                <div className="child">
                    <div className="header-group">
                        <p className="show-title" style={{textTransform: 'uppercase'}}>{this.props.Data.Title}</p>
                    </div>
                    <div className="show-products">
                        {this.props.Data.Products.map((value, index) => {
                            return <ProductCard key={index} Data={value}/>
                        })}
                    </div>
                </div>                
            </div>
        );
    }
}

export default PopularFolderItem;