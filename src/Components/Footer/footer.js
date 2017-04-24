import React, { Component } from 'react';
import PopularFolderGroup   from './popular-folder.js'
import MainFooter           from './main-footer.js';

require('./Style/footer-style.css'); 

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <PopularFolderGroup />
                <MainFooter />
            </footer>
        );
    }
}

export default Footer;