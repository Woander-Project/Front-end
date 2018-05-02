import React, {Component} from "react";
import {withGoogleMap, GoogleMap} from "react-google-maps";
import CommentPath from "./CommentPath";

class Map extends Component {
	render() {
		const GoogleMaps = withGoogleMap(props => (
			<GoogleMap
				defaultCenter={{lat: 40.756795, lng: -73.954298}}
				defaultZoom={13}
			>
			</GoogleMap>
		));
		return (
			<div className="container map-container">
				<GoogleMaps
					containerElement={<div className="map"/>}
					mapElement={<div style={{height: `100%`}}/>}
				/>
				<CommentPath/>
			</div>
		);
	}
}

export default Map;
