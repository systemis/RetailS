import React, { Component } from 'react';
import SimpleMap from'./maps.js';

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
                            <form action="/">
                                <input type="text" name="name"  placeholder="Name*"/>
                                <br/>
                                <input type="text" name="email" placeholder="E-mail*"/>
                                <br/>
                                <textarea name="messgae" id="get-message" cols="100" rows="10" placeholder="Messgase*">
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
}

export default AboutUsPage;