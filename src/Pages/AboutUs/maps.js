import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const companyLocation   = {lat: 16.01394264, lng: 108.19869429};
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
    static defaultProps = {
        center: companyLocation,
        zoom: 15
    }
 
    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={companyLocation.lat}
                    lng={companyLocation.lng}
                    text={'Systemis Inc'}
                />
            </GoogleMapReact>
            );
    }
}
