import React, { Component } from 'react';
import userMG               from '../../js/user.js'

require('./Style/firstheaderstyle.css');

var isLogin = false;
class FirstHeader extends Component {
    constructor(props){
        super(props);
        this.state = {isLogin: false};
    }
    // XPathEvaluator
    renderCP(component){
        if(this.state.isLogin !== false){
            return component;
        }

        return ;
    }

    componentWillMount() { 
        userMG.checkLogin(_isLogin => this.setState({isLogin: _isLogin})); 
    }

    render() {
        const loginButton = () => {
            if(this.state.isLogin === false){
                return <a href="/login" className="show-my-account">Login</a>
            }
        }
        return (
            <div className="first-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 left">
                            {this.renderCP(<a href="/my-account" className="show-account-link">My Account details</a>)}
                            {this.renderCP(<span className="dot-khoangcach">|</span>)}
                            <span className="show-date-now">
                                {new Date().toLocaleDateString()}
                            </span>
                        </div>
                        <div className="col-md-6 col-sm-6 right">
                            {this.renderCP(<a href="/my-account" className="show-my-account">My account</a>)}
                            {this.renderCP(<span className="show-store-link">Store</span>)}
                            {this.renderCP(<span className="show-store-link" onClick={() => userMG.logOut()}>Logout</span>)}
                            {loginButton()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstHeader;