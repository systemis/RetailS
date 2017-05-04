import React, { Component } from 'react';
import $                    from 'jquery';

class ChangePassWordScreen extends Component {
    constructor(props) {
        super(props);
    }

    handlingWhenChangeValue = () => {
        $("#btn-change-user-password").removeClass("hidden");
        $("#btn-cancel-user-password").removeClass("hidden");
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
}

export default ChangePassWordScreen;