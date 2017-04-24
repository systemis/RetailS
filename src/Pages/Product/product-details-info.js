import React, { Component } from 'react';
import $ from 'jquery';

const additional_information_name = ["category", "weight", "dimensions", "material", "tags"];
var get_object_size = (obj) => {
    var index = 0;
    for(var i in obj) {
        index ++;
    }
    return index;
}

class ProductDetailsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_details_info: {}
        }
        
        // Phân tích và chọn ra những thuộc tính cho mục thông tin thêm từ dữ liệu .
        this.handlingClickTab();
        this.getAdditionalInformation();
    }

    getAdditionalInformation(){
        const sefl = this;
        for(var i in this.props.Data) {
            if(additional_information_name.indexOf(i) >= 0) {
                var value_will_add = sefl.props.Data[i];
                if(value_will_add !== null && value_will_add) {
                    var product_details_info = sefl.state.product_details_info;
                    product_details_info[i] = value_will_add;
                    sefl.setState({"product_details_info": product_details_info});
                }
            }
        }
    }

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

    renderAdditionalInformation(){
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

    render() {
        return (
            <div className="product-view-page-product-details-info-group">
                <ul className="nav nav-tabs tabs-group-details-info">
                    <li className="active collapse-tab"><a>Description</a></li>
                    <li className="collapse-tab"><a>Editional Infornation</a></li>
                    <li className="collapse-tab"><a>Reviews</a></li>
                </ul>
                <div className="collapses">
                    <div className="collapse-item row show">
                        <div className="collaspe-item-show-des">
                            <p>
                                {this.props.Data.des}
                            </p>    
                        </div>
                    </div>
                    <div className="collapse-item row">
                        <table className="table-show-product-edditional-info">
                            <tbody>
                                {this.renderAdditionalInformation().map((value, index) => {
                                    return(
                                        <tr className="">
                                            <th>{value.name}</th>
                                            <td><p>{value.info}</p></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="collapse-item row">
                        <div className="show-reviews-group">

                        </div>
                        <div className="post-new-review-group">
                            <h3>ADD A REVIEW</h3>
                            <form id="form-add-review-product" action={"/add-reviews-product/" + this.props.Data.id}>
                                <textarea name="commentvalue" id="comment-text" rows="10" placeholder="Your review ."></textarea>
                                <input    type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailsInfo;