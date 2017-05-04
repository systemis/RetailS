import React, { Component }    from 'react';
import InformationScreen       from './Components/screen-information.js';
import ChangePassWordScreen    from './Components/screen-change-password.js';
import CartScreen              from './Components/screen-cart.js';
import ViewCartGroup           from '../../Pages/ViewCart/view-cart.js';

const screens = [<InformationScreen />, <ChangePassWordScreen />, <ViewCartGroup />];
class Content extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div
                id={this.props.id}
                className="col-md-10 col-sm-10"
            >
                <h5 className="title-screen"> {this.props.titleGroup} </h5>
                <div className="main">
                    {screens[this.props.indexScreen]}
                </div>
            </div>
        );
    }
}

export default Content;