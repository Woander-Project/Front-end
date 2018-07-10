import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  renderMarkers(map, maps) {
    let marker = [];
    this.props.coordinates.map(
      (point, i) =>
        (marker[i] = new maps.Marker({
          position: point,
          map,
          title: "Hello World!"
        }))
    );
  }

  getNewPoint(e) {
    console.log(e.lat);
    console.log(e.lng);
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          onClick={this.props.getCoords ? e => this.getNewPoint(e) : null}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    );
  }
}

Map.defaultProps = {
  getCoords: false,
  center: {
    lat: 37.98381,
    lng: 23.727539
  },
  coordinates: [
    { lat: 37.98381, lng: 23.727539 },
    { lat: 37.97381, lng: 23.717539 }
  ],
  zoom: 14
};

Map.propTypes = {
  getCoords: PropTypes.bool.isRequired
};

export default Map;
