import React, { Component } from 'react';

class HeaderSlideThirdItem extends Component {
    render() {
        return (
            <div className={"header-slide-item third-item " + this.props.className}>
                <div className="main-group container">
                    Third item
                    Main Group 
                </div>
            </div>
        );
    }
}

export default HeaderSlideThirdItem;