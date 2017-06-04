import React, { Component } from 'react';
import Content              from './content.js';
import userMG               from '../../js/user.js'
import $                    from 'jquery';

require('./Style/user-dashboard-page-style.css');

const url           = "/my-account/";
const paramHrefs    = ["change-password", "cart", "new-product"];
const nameMenuItems = ["Thông tin", "Đổi mật khẩu ", " Giỏ hàng ", "Thêm sản phẩm mới"];

// function checkAdmin(fn){
//     $.ajax({
//         url: '/check-admin',
//         method: 'POST',
//         success: isAdmin => {
//             return fn(isAdmin);
//         },
//         error: err => console.log(err)
//     })
// }

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navigation_hidden: "", 
            index_screen: 0
        }

    }

    setUpIndexScreen() {
        var sefl = this;
        let href = location.href;
        if(href.indexOf("/change-password") >= 0) sefl.setState({index_screen: 1}); 
        if(href.indexOf("/cart") >= 0)            sefl.setState({index_screen: 2});
        if(href.indexOf("/new-product") >= 0) {
            userMG.checkAdmin(isAdmin => {
                if(isAdmin){
                    return sefl.setState({index_screen: 3})
                }
                alert("Chức năng chỉ được sử dụng bởi admin thôi !");
                return location.href = "/my-account";
            })
        }
    }

    hidden_show_navigation_menu = () => {
        if(this.state.navigation_hidden === "") {
            $("#content-user-dashboard-page").addClass(" max-w");
            return this.setState({navigation_hidden: "hidden"})
        }
        
        if(this.state.navigation_hidden !== "") {
            $("#content-user-dashboard-page").removeClass(" max-w");
            return this.setState({navigation_hidden: ""}) 
        }
    }

    clickActionMenuItem = () => {
        $(document).ready(() => {
            var menuItems = $("#nv-mn-dashboard-page li");
            menuItems.map((index, item) => {
                $(item).click(() => {
                    const idString = $(item).attr("id");
                    const indexV   = parseInt(idString.substr(idString.indexOf("&") + 1));
                    
                    if(indexV !== 3) {
                        if(indexV == 0) return location.href = url; 

                        return location.href = url + paramHrefs[indexV - 1];
                    }

                    userMG.checkAdmin(isAdmin => {
                        if(isAdmin) {
                            return location.href = url + paramHrefs[indexV - 1];
                        } 
                        
                        alert("Chức năng chỉ được sử dụng bởi admin thôi !");
                        return location.href = "/my-account";
                    })
                })
            })
        })
    }

    setup_caret_char = () => {
        if(this.state.navigation_hidden === "") {
            return "dropup";
        }
        
        return "";
    }
    
    render() {
        return (
            <div className="user-dashboard-page container">
                <div className="navigation-user-dashboard-page">
                    <button 
                        className="btn btn-default"
                        id="btn-show-hidden-menu"
                        onClick={() => this.hidden_show_navigation_menu()}>
                            Menu
                            <span className={this.setup_caret_char()} >
                                <span 
                                    className="caret" 
                                    style={{
                                        float: "right",
                                        marginTop: "7px"
                                    }}>
                                </span>
                            </span>
                    </button>
                    
                    <div className="row">
                        <ul id="nv-mn-dashboard-page" className={"col-md-2 col-sm-2 navigation-menu " + this.state.navigation_hidden}>
                            {nameMenuItems.map((title, index) => {
                                return <li key={index} id={"mn_item_dashboard&" + index}>{title}</li>
                            })}
                        </ul>

                        <Content
                                id={"content-user-dashboard-page"}
                                indexScreen={this.state.index_screen} 
                                titleGroup={nameMenuItems[this.state.index_screen]}
                        />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount () {
        this.clickActionMenuItem();
        this.setUpIndexScreen();        
    }
}

export default Navigation;