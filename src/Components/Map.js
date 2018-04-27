import React, {Component} from "react";
import {withGoogleMap, GoogleMap} from "react-google-maps";
import PropTypes from "prop-types";

class Map extends Component {
	render() {
		const GoogleMaps = withGoogleMap(props => (
			<GoogleMap
				defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
				defaultZoom = { 13 }
			>
			</GoogleMap>
		));
		return(
			<div className="container h-100">
				<GoogleMaps
					containerElement={ <div className="map" /> }
					mapElement={ <div style={{ height: `100%` }} /> }
				/>
			</div>
		);
	}
}

Map.defaultPropProps = {
	latitude: 40.756795,
	longitude: -73.954298
};

Map.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number
};

export default Map;
