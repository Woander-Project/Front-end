import React, { Component } from "react";
import { connect } from "react-redux";
import { addPoint, removePoint } from "../ActionCreators/mapActionCreators";
import MapContainer from "./MapContainer";
import MarkerInput from "./MarkerInput";

class NewPath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathName: "",
      shortDescription: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getPointCoordinates(e) {
    this.props.addPoint({
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    });
  }

  render() {
    let showMarkerInputs = this.props.points.map(marker => (
      <MarkerInput key={marker.id} point={marker.point} />
    ));
    return (
      <div className="new-path-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <MapContainer
                canGetCoords
                coordinates={this.props.points}
                getCoordinates={this.getPointCoordinates.bind(this)}
              />
            </div>
            <div className="col-md-6 col-sm-12 desc-form">
              <form>
                <div className="form-group">
                  <label htmlFor="pathName">Path Name:</label>
                  <input
                    type="text"
                    name="pathName"
                    id="pathName"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Woander"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shortDescription">Short Description:</label>
                  <textarea
                    name="shortDescription"
                    className="form-control"
                    id="shortDescription"
                    onChange={this.handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row marker-input-container">
            <div className="col-md-12">{showMarkerInputs}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    points: reduxState.points
  };
}

export default connect(
  mapStateToProps,
  { addPoint, removePoint }
)(NewPath);
