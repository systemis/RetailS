import React, { Component } from 'react';
import $                    from 'jquery';

const additional_information_name = ["category", "weight", "height", "material", "tags"];
var get_object_size = (obj) => {
    var index = 0;
    for(var i in obj) {
        index ++;
    }
    return index;
}

const ReviewRow = props => {
    return (
        <div className="review-row row">
            <div className="col-md-2 col-sm-2">
                <img src={props.data.avatar} alt="Avatar about user"/>
                <h3  className="show-name">{props.data.email}</h3>
                <p   className="show-data">{props.data.date}</p>
            </div>
            <div className="col-md-10 col-sm-10">
                <p className="show-rep-message">
                    {props.data.message}
                </p>
            </div>
        </div>
    )
}

class ProductDetailsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { product_details_info: {} }

        this.handlingClickTab();
    }

    getAdditionalInformation(){
        const sefl = this;
        const info = this.props.Infos;

        var index  = 0;
        var info_d = this.state.product_details_info;

        for(var i in info){
            if(additional_information_name.indexOf(i) >= 0 && info[i]){
                info_d[i] = info[i];
                if(index == get_object_size[info]){
                    sefl.setState(info_d);
                }
            }

            index ++;
        }
    };

    handlingClickTab(){
        $(document).ready(function(){
            var tabsList = $(".collapse-tab");
            var collapse_group_list = $(".collapse-item");
            tabsList.map((index, tab) => {
                $(tab).click(function() {
                    collapse_group_list.map((index2, group) => {
                        $(tabsList[index2]).removeClass("active");
                        $(group).removeClass("show");
                    })
                    $(collapse_group_list[index]).addClass("show");
                    $(tab).addClass("active");
                })
            })
        });
    }

    additionalInfoList(){
        const sefl = this;
        var itemsList = [];
        var index = 0;
        for(var info_item in this.state.product_details_info){
            var item = {
                name: info_item,
                info: sefl.state.product_details_info[info_item]
            }
            
            itemsList.push(item);
            index ++;
            if(index === get_object_size(sefl.state.product_details_info)){
                return itemsList;
            }
        }
    }

    valueRowList(additional_info){
        var _rows = []
        for(var i in additional_info){
            var row = (
                <tr key={i} className="">
                    <th>{additional_info[i].name}</th>
                    <td><p>{additional_info[i].info}</p></td>
                </tr>
            );

            _rows.push(row);
        }

        return _rows;
    }

    newReview(message){
        var review = {};
        
        review.message  = message;
        review.date     = new Date().toLocaleDateString();
        //review.username = 
    }

    render() {
        this.getAdditionalInformation();
        var additionalInfoList = this.additionalInfoList();
        var addReviewGroup     = () => {
            if(this.props.isLogin !== false){
                return (
                    <div className="post-new-review-group">
                        <h3>ADD A REVIEW</h3>
                        <form id="form-add-review-product">
                            <textarea 
                                name="commentvalue" 
                                id="comment-text" 
                                rows="10" 
                                placeholder="Your review .">
                            </textarea>
                            <input type="submit" />
                        </form>
                    </div>
                );
            }else{
                return <h1 style={{textAlign: 'center', color: 'red'}}> Dang nhap de binh luan </h1>
            }
        }
        var reviewListDom = () => {
            var reviewsRows = []
            var reviews     = this.props.Infos.reviews;
            console.log(this.props.Infos);
            if(reviews instanceof Array){
                console.log(reviews);
                for(var i = reviews.length - 1; i >= 0; i--){
                    console.log(reviews[i]);
                    reviewsRows.push(<ReviewRow data={reviews[i]} key={i} />);
                }
            }

            return reviewsRows;
        }

        return (
            <div className="product-view-page-product-details-info-group">
                <ul className="nav nav-tabs tabs-group-details-info">
                    <li className="active collapse-tab"><a>Description</a></li>
                    <li className="collapse-tab"><a>Editional Infornation</a></li>
                    <li className="collapse-tab"><a>Reviews</a></li>
                </ul>
                <div className="collapses">
                    <div className="collapse-item row show">
                        <div className="collaspe-item-show-des" id="show-product-description-deltailsscreen">
                            <p>
                                {this.props.Infos.description}
                            </p>    
                        </div>
                    </div>
                    <div className="collapse-item row">
                        <table className="table-show-product-edditional-info">
                            <tbody>
                                {
                                    this.valueRowList(additionalInfoList).map((value, index) => {
                                        return value;
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="collapse-item row">
                        <div className="show-reviews-group">
                            {reviewListDom().map(row => {return row})}
                        </div>
                        {addReviewGroup()}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const sefl = this;
        $(document).ready(function(){
            $("#show-product-description-deltailsscreen").empty();
            $("#show-product-description-deltailsscreen").append($.parseHTML(sefl.props.Infos.description));
            $("#form-add-review-product").submit(function(){
                const message = $(this).serializeArray()[0].value;
                console.log(message);
                sefl.props.updateReview(message);
                
                return false;
            })
        })  
    }
}

export default ProductDetailsInfo;
