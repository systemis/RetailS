import React, { Component } from 'react';

var FooterMenuItem = props => (
    <div className="footer-menu-item col-md-4 col-sm-4">
        <span className="title">
            {props.Title}
        </span>
        <div className="show-menu-items">
            {props.Menu.map((value, index) => {
                return (
                    <p key={index} className="item">
                        <a href={"/" + value}> {value}</a>
                    </p>
                )
            })}
        </div>
    </div>
)

class MainFooter extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="show-menu row">
                        <FooterMenuItem 
                            Title="Company"
                            Menu={[ "About", "Support" ]}
                        />
                        <FooterMenuItem 
                            Title="Product"
                            Menu={[ "dd", "dd" ]}
                        />
                        <FooterMenuItem 
                            Title="Contact"
                            Menu={[ "dd", "dd" ]}
                        />
                    </div>
                    <div className="dot row"/>
                    <div className="last-footer row">
                        <div className="show-info-developer col-md-6 col-sm-6">
                            <span className="show-developer">
                                Copyright © 2017 - Systemis
                            </span>
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}

export default MainFooter;