import React, { Component } from 'react';
import Content              from './content.js';
import $                    from 'jquery';

require('./Style/user-dashboard-page-style.css');

const nameMenuItems = ["Thông tin", "Đổi mật khẩu ", " Giỏ hàng "];

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            navigation_hidden: "", 
            index_screen: 0
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
        const sefl = this;
        
        $(document).ready(() => {
            var menuItems = $("#nv-mn-dashboard-page li");
            menuItems.map((index, item) => {
                $(item).click(() => {
                    var idString = $(item).attr("id");
                    sefl.setState({index_screen: parseInt(idString.substr(idString.indexOf("&") + 1))});
                    
                    console.log(sefl.state.index_screen);
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
                                return <li id={"mn_item_dashboard&" + index}>{title}</li>
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
        {this.clickActionMenuItem()}
    }
}

export default Navigation;