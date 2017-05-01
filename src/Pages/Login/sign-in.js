import React, { Component } from 'react';
import $ from 'jquery';

class SignInComponent extends Component {
    handleSubmit(){
        $(document).ready(() => {
            $("#form-sign-in").submit(function(){
                var email    = $(this).serializeArray()[0].value;
                var password = $(this).serializeArray()[1].value;
                
                if(email.indexOf("@") < 0 || email.indexOf("@") === email.length - 1) return false;

                if(email && password){
                    return true;
                }
                
                return false;
            })
        })
    }

    render() {
        return (
            <div className="sign-in-componet col-md-6 col-sm-6">
                <div className="child">
                    <h2 className="title">Login</h2>
                    <form action="/sign-in" method="POST" id="form-sign-in" >
                        <input type="text" name="username" placeholder="Input email here"/>
                        <br/>
                        <input type="password" name="password" placeholder="Input password here" />
                        <br/>
                        <input type="submit" value="Login"/>
                        {this.handleSubmit()}
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInComponent;