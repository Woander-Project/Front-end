import React, { Component } from "react";
import PropTypes from "prop-types";
import MapComponent from "./MapComponent";

class MapContainer extends Component {
  render() {
    return (
      <div className="map">
        <MapComponent
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.props.coordinates}
          getCoordsOnClick={
            this.props.canGetCoords ? this.props.getCoordinates : null
          }
        />
      </div>
    );
  }
}

MapContainer.defaultProps = {
  canGetCoords: false,
  center: {
    lat: 37.98381,
    lng: 23.727539
  },
  coordinates: [
    { point: { lat: 37.98381, lng: 23.727539 }, id: 1445 },
    { point: { lat: 37.97381, lng: 23.717539 }, id: 4578 }
  ],
  zoom: 14
};

MapContainer.propTypes = {
  canGetCoords: PropTypes.bool.isRequired
};

export default MapContainer;
