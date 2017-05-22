import React, { Component } from 'react';
import SimpleMap            from './maps.js';
import $                    from 'jquery'

require('./Style/about-us-page-style.css');

class AboutUsPage extends Component {
    render() {
        return (
            <div className="about-us-page">
                <div className="map"
                     style={{height: "500px"}}
                >
                    <SimpleMap />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="show-get-in-touch col-md-6 col-sm-6">
                            <h2>Get in touch</h2>
                            <h3>WRITE US A LETTER</h3>
                            <form 
                                action="/send-feedback" 
                                method="POST"
                                id="form-send-feedback">
                                <input type="text" name="name"  placeholder="Name*"/>
                                <br/>
                                <input type="text" name="email" placeholder="E-mail*"/>
                                <br/>
                                <textarea name="message" id="get-message" cols="100" rows="10" placeholder="Messgase*">
                                </textarea>
                                <br/>
                                <input type="submit" value="Send message"/>
                            </form>
                        </div>
                        <div className="show-our-address col-md-6 col-sm-6">
                            <h2>OUR ADDRESS</h2>
                            <h3>WHERE ARE WE LOCATED</h3>
                            <p>
                                407 Cách Mạng Tháng 8,
                                <br/>
                                0905210336,
                                <br/>
                                Đà Nẵng 
                                <br/>
                            </p>
                            <p>
                                systemofpeter@gmail.com 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        $(document).ready(() => {
            $("#form-send-feedback").submit(function(){
                var data = $(this).serializeArray();


                console.log(data);
                if(data[0].value && data[2].value && data[2].value){
                    var _data = {
                        name: data[0].value,
                        email: data[1].value,
                        message: data[2].value
                    }

                    $.ajax({
                        url: $(this).attr("action"), type: $(this).attr("method"), data: _data, 
                        success: res => {
                            switch(res) {
                                case 'success': 
                                    alert("Gởi phản hồi thành công.");
                                    location.reload();
                                    break;
                                default:
                                    alert("Gởi phản hồi thất bại, vui lòng thử lại sau !");
                                    break;
                            }
                        },
                        error: err => console.log("Error: " + err)
                    });
                }else{
                    alert("Thông tin bị thiếu, xin mới nhập lại ");
                }
                return false;
            })
        })        
    }
}

export default AboutUsPage;