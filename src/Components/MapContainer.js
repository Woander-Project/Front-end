import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: this.props.coordinates
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.coordinates !== this.props.coordinates) {
      this.setState({
        coordinates: nextProps.coordinates
      });
    debugger
    }
    return true;

  }

  renderMarkers(map, maps) {
    debugger
    let marker = [];
    this.state.coordinates.map(
      (point, i) =>
        (marker[i] = new maps.Marker({
          position: point,
          map,
          title: "Hello World!"
        }))
    );
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          onClick={this.props.canGetCoords ? this.props.getCoordinates : null}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    );
  }
}

Map.defaultProps = {
  canGetCoords: false,
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
  canGetCoords: PropTypes.bool.isRequired
};

export default Map;
