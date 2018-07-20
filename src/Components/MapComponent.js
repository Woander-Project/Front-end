import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 37.98381, lng: 23.727539 }}
    onClick={props.getCoordsOnClick}
  >
    {props.markers.map(marker => (
      <Marker key={marker.id} position={marker.point} />
    ))}
  </GoogleMap>
));

export default MapComponent;
