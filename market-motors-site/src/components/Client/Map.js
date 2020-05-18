import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const GoogleMapFrame = withGoogleMap(props => (
  <GoogleMap
    defaultCenter = { { lat: 41.637546, lng: -85.55221 } }
    defaultZoom = { 13 }
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