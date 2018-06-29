import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  renderMarkers(map, maps) {
    let marker = [];
    this.props.coordinates.map(
      (center, i) =>
        (marker[i] = new maps.Marker({
          position: center,
          map,
          title: "Hello World!"
        }))
    );
  }

  render() {
    return (
      <div className="container">
        <div className="map">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            yesIWantToUseGoogleMapApiInternals
          />
        </div>
      </div>
    );
  }
}

Map.defaultProps = {
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

export default Map;
