import  React, { Component } from 'react';

import NavigationHeader from './navigation-header.js';
import FirstHeader      from './first-header.js';

class Header extends Component {
    render() {
        return (
            <div className="header-app">
                <FirstHeader /> 
                <NavigationHeader />
            </div>
        );
    }
}

export default Header;