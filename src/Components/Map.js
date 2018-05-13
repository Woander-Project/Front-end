import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import CommentPath from "./CommentPath";

class Map extends Component {
	renderMarkers(map, maps) {
		let marker = new maps.Marker({
			position: this.props.center,
			map,
			title: "Hello World!"
		});
	}

	render() {
		return (
			<div className="map-container">
				<div className="map">
					<GoogleMapReact
						bootstrapURLKeys={{key: "AIzaSyBwG6pDtsck7u3pBwRHnv0lga1NOmQRz9Y"}}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
						onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
						yesIWantToUseGoogleMapApiInternals
					>
					</GoogleMapReact>
				</div>
				<CommentPath/>
			</div>
		);
	}
}

Map.defaultProps = {
	center: {
		lat: 37.983810,
		lng: 23.727539
	},
	zoom: 11
};

export default Map;
