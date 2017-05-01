import React, { Component } from 'react';
import $ from 'jquery';

class SignUpComponent extends Component {
    handleSubmit(){
        $(document).ready(() => {
            $("#form-sign-up").submit(function(){
                var name     = $(this).serializeArray()[0].value;
                var email    = $(this).serializeArray()[1].value;
                var password = $(this).serializeArray()[2].value;
                
                if(name && email && password){
                    if(email.indexOf("@") >= 0 && email.indexOf("@") !== email.length - 1) {
                        $.ajax({
                            url: $("#form-sign-up").attr("action"),
                            type: "POST",
                            data: {name: name, email: email, password: password},
                            success: (data) => {
                                if(data === "Success") {
                                    alert("Đăng ký thành công !");
                                    location.reload();
                                }else{
                                    alert(data);
                                }
                            },
                            error: (err) => {
                                console.log(err);
                            }
                        })
                    }
                }
                 
                return false;
            });
        })
    }

    render() {
        return (
            <div className="sign-up-component col-md-6 col-sm-6">
                <div className="child">
                    <h2 className="title">Register</h2>
                    <div className="ngancach"></div>
                    <form 
                        action="/sign-up" 
                        method="POST" 
                        //encType="multipart/form-data"
                        id="form-sign-up">
                        <input type="text" name="name" placeholder="Input your name here"/>
                        <br/>
                        <input type="text" name="email" placeholder="Input email here"/>
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

export default SignUpComponent;