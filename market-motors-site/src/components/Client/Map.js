import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const GoogleMapFrame = withGoogleMap(props => (
  <GoogleMap
    defaultCenter = { { lat: 41.637724, lng: -85.922806 } }
    defaultZoom = { 18 }
  >
  </GoogleMap>
));



function Map() {
  return (
    <div>
    <GoogleMapFrame
      containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
      mapElement={ <div style={{ height: `100%` }} /> }
    />
  </div>
  );
}

export default Map;