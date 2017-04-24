import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 16.01394264, lng: 108.19869429},
    zoom: 15
  };
 
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={16.01394264}
          lng={108.19869429}
          text={'Trường Thịnh Inc'}
        />
      </GoogleMapReact>
    );
  }
}

class AboutUsPage extends Component {
    render() {
        return (
            <div className="about-us-page">
                <div className="map"
                     style={{height: "500px"}}
                >
                    <SimpleMap />
                </div>
            </div>
        );
    }
}

export default AboutUsPage;