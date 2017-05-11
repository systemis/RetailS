import React, { Component } from 'react';
import userInfoM            from '../js/userinfomation-manager';
import $                    from 'jquery';

class InformationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInformation: {
                name: "thinh",
                andress: "dl",
                phonenumber: 1239                
            }
        }

        userInfoM.getUserInfo((data) => {
            if(data !== "err") this.setState({userInformation: data})
        });
    }

    setUpDefaultValue = () => {
        const sefl = this;
        $(document).ready(() => {
            const input_change_user_info_s_text   = $("#form-update-user-infomation > input[type=text]");
            const input_change_user_info_s_number = $("#form-update-user-infomation > input[type=number]");
            const input_change_user_info_s        = [];
            
            input_change_user_info_s_text  .map((index, value) => input_change_user_info_s.push(value));
            input_change_user_info_s_number.map((index, value) => input_change_user_info_s.push(value));

            input_change_user_info_s.map(( single_input, index) => {
                var name = $(single_input).attr("name");
                $(single_input).val(sefl.state.userInformation[name]);
            })
        })
    }

    handlingWhenChangeValue = () => {
        $("#btn-update-user-information").removeClass("hidden");
        $("#btn-cancel-user-information").removeClass("hidden");
    }

    render() {
        return (
            <div id="user-dashboard-information-screen">
                <form 
                    id="form-update-user-infomation"
                    action="/update-user-information" 
                    method="POST">
                    <input 
                        type="text" 
                        name="name"  
                        placeholder="Input your name here ."
                        onChange={() => this.handlingWhenChangeValue()}
                        />
                    <br/>
                    <br/>
                    <input
                        type="text" 
                        name="andress" 
                        placeholder="Input your phone andress here ."
                        onChange={() => this.handlingWhenChangeValue()}
                        />     
                    <br/>      
                    <br/>      
                    <input 
                        type="number" 
                        name="phonenumber" 
                        placeholder="Input your phone number here ."
                        onChange={() => this.handlingWhenChangeValue()}
                        />                   
                    <br/>                    
                    <br/>                    
                    <br/>           
                    
                    <input 
                        type="button" 
                        id="btn-cancel-user-information"
                        className="btn btn-primary hidden" 
                        value="Cancel" 
                        onClick={() => location.reload()}
                        />

                    <input 
                        type="submit" 
                        id="btn-update-user-information"
                        className="btn btn-success hidden" 
                        value="Update" 
                        />
                </form>
            </div>
        );
    }

    componentDidMount () {
        this.setUpDefaultValue();        
    }
}

export default InformationScreen;