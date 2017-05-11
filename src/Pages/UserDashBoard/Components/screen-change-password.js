import React, { Component } from 'react';
import userInfoM            from '../js/userinfomation-manager';
import $                    from 'jquery';

class ChangePassWordScreen extends Component {
    constructor(props) {
        super(props);
    }

    handlingWhenChangeValue(){
        $("#btn-change-user-password").removeClass("hidden");
        $("#btn-cancel-user-password").removeClass("hidden");
    }

    handlingChangePassword(){
        $(document).ready(() => {
            $("#form-change-user-password").submit(function(e) {
                var oldPass = $(this).serializeArray()[0].value;
                var newPass = $(this).serializeArray()[1].value;

                if(oldPass && newPass){
                    userInfoM.changePassWord(oldPass, newPass);
                }

                return false;
            }) 
        })
    }

    render() {
        return (
            <div id="user-dashboard-change-password-screen">
                <form
                    action="/change-password"
                    method="POST"
                    id="form-change-user-password">
                    <div className="old-password">
                        <span className="title-group">Old password</span>
                        <br/>
                        <input 
                            type="password" 
                            name="old-password" 
                            onChange={() => this.handlingWhenChangeValue()}
                        />  
                    </div>
                    <br/>
                    <div className="new-password">
                        <span className="title-group">New password</span>
                        <br/>
                        <input
                            type="password" 
                            name="new-password" 
                            onChange={() => this.handlingWhenChangeValue()}
                        />  
                    </div>
                    <br/>
                     
                    <input 
                        type="button" 
                        id="btn-cancel-user-password"
                        className="btn btn-primary hidden" 
                        value="Cancel" 
                        onClick={() => location.reload()}
                        />

                    <input 
                        type="submit" 
                        id="btn-change-user-password"
                        className="btn btn-success hidden" 
                        value="Change password" 
                        />
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.handlingChangePassword();
    }
}

export default ChangePassWordScreen;