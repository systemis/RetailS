import React, { Component } from 'react';
import userMG               from '../../js/user.js'

require('./Style/firstheaderstyle.css');

var isAdmin = false;
class FirstHeader extends Component {
    constructor(props){
        super(props);
        this.state = {isAdmin: false};
    }
    
    handlingRenderCP(component){
        if(this.state.isAdmin){
            return component;
        }

        return ;
    }

    componentWillMount() { 
        userMG.checkAdmin(_isAdmin => this.setState({isAdmin: _isAdmin})); 
    }

    render() {
        const loginButton = () => {
            if(this.state.isAdmin === false){
                return <a href="/login" className="show-my-account">Login</a>
            }
        }
        return (
            <div className="first-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 left">
                            {this.handlingRenderCP( 
                                <a href="/my-account" className="show-account-link">My Account details</a>)
                            }
                            {this.handlingRenderCP(<span className="dot-khoangcach">|</span>)}
                            <span className="show-date-now">
                                {new Date().toLocaleDateString()}
                            </span>
                        </div>
                        <div className="col-md-6 col-sm-6 right">
                            {this.handlingRenderCP(<a href="/my-account" className="show-my-account">My account</a>)}
                            {this.handlingRenderCP(<span className="show-store-link">Store</span>)}
                            {this.handlingRenderCP(<span className="show-store-link" onClick={() => userMG.logOut()}>Logout</span>)}
                            {loginButton()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstHeader;