import React, { Component } from 'react';

class HeaderSlideSecondItem extends Component {
    render() {
        return (
            <div className={"header-slide-item second-item " + this.props.className}>
                <div className="main-group container">
                    second item
                    Main Group 
                </div>
            </div>
        );
    }
}

export default HeaderSlideSecondItem;