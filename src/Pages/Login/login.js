import React, { Component } from 'react';
import SignUpComponent from './sign-up.js';
import SignInComponent from './sign-in.js';

require('./Style/login-page-style.css');
class LoginPage extends Component {
    render() {
        return (
            <div className="login-page container">
                <div className="row">
                    <SignInComponent />
                    <SignUpComponent />
                </div>
            </div>
        );
    }
}

export default LoginPage;