import React, { Component } from 'react';

class SimpleProductInfo extends Component {
    render() {
        return (
            <div className="product-view-page-simple-product-info-group">
                <div className="row">
                    <div className="show-product-images col-md-2 col-sm-2">
                        
                    </div>
                    <div className="show-selected-product-image col-md-5 col-sm-5">
                        <div className="child">
                            <img src={this.props.Data.productimages} alt="Image about product"/>
                            <span className="status sale">
                                Sale 
                            </span>
                        </div>
                    </div>
                    <div className="show-simple-product-info col-md-5 col-sm-5">
                        <div className="show-product-name">
                            <h1>{this.props.Data.name}</h1>
                        </div>
                        <div className="show-product-category">
                            <a href={"/product/category/"+ this.props.Data.category}>
                                <p>{this.props.Data.category}</p>
                            </a>
                        </div>
                        <div className="show-product-ranting">
                            
                        </div>
                        <div className="show-product-des">
                            <p>{this.props.Data.des}</p>
                        </div>
                        <div className="show-product-price">
                            <p>{this.props.Data.price}</p>
                        </div>
                        <div className="show-amount-addtocard">
                            <button className="btn btn-addtocard">
                                add to card 
                            </button>
                        </div>
                        <div className="show-product-info-value">
                            <p>
                                PRODUCT ID: 
                                <strong className="show-b-simple-product-id">
                                    {this.props.Data.id}
                                </strong>
                            </p>
                            <p>
                                CATEGORY:
                                <strong className="show-b-simple-product-category">
                                    {this.props.Data.category}
                                </strong>
                            </p>
                            <p>
                                TAGS: 
                                <strong className="show-b-simple-product-tags">
                                    {this.props.Data.tags}
                                </strong>
                            </p>
                        </div>
                        <div className="show-share-group">
                            <p>Share this item </p>
                            <ul>
                                <li className="face"> <a href="Facebook"> Facebook </a> </li>
                                <li className="twitter"> <a href="Twitter"> Twitter </a> </li>
                                <li className="google"> <a href="Google+"> Google+ </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleProductInfo;