// import React from 'react';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';


// const GoogleMapFrame = withGoogleMap(props => (
//   <GoogleMap
//     defaultCenter = { { lat: 41.637724, lng: -85.922806 } }
//     defaultZoom = { 18 }
//   >
//   </GoogleMap>
// ));



// function Map() {
//   return (
//     <div>
//     <GoogleMapFrame
//       containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
//       mapElement={ <div style={{ height: `100%` }} /> }
//     />
//   </div>
//   );
// }

// export default Map;

// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '500px',
//   height: '500px'
// };

// const apiKey = process.env.REACT_APP_API_KEY;
// console.log("API KEY: ", apiKey)

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={18}
//         style={mapStyles}
//         initialCenter={{
//          lat: 41.637724,
//          lng: -85.922806
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBUDQO4oEAEQYVWtzoprTMZ3IBoSHo-nyE'
//   // apiKey: `${process.env.REACT_APP_API_KEY}`
// })(MapContainer);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.63,
      lng: -85.92
    },
    zoom: 18
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:`${process.env.REACT_APP_API_KEY}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.637724}
            lng={-85.922806}
            text="Market Motors"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;