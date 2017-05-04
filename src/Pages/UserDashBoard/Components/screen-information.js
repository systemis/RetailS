import React, { Component } from 'react';
import $ from 'jquery';

class InformationScreen extends Component {
    constructor(props) {
        super(props);
    }

    handlingWhenChangeValue = () => {
        $("#btn-update-user-information").removeClass("hidden");
        $("#btn-cancel-user-information").removeClass("hidden");
    }

    render() {
        return (
            <div id="user-dashboard-information-screen">
                <form action="/update-user-information" method="POST" id="form-update-user-infomation">
                    <input 
                        type="text" 
                        name="name"  
                        placeholder="Input your name here ."
                        onChange={() => this.handlingWhenChangeValue() }/>                
                    <br/>
                    <br/>
                    <input
                        type="text" 
                        name="andress" 
                        placeholder="Input your phone andress here ."
                        onChange={() => this.handlingWhenChangeValue() }/>     
                    <br/>      
                    <br/>      
                    <input 
                        type="number" 
                        name="phonenumber" 
                        placeholder="Input your phone number here ."
                        onChange={() => this.handlingWhenChangeValue() }/>                   
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
        
    }
}

export default InformationScreen;