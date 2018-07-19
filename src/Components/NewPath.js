import React, { Component } from "react";
import Map from "./Map";

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

  render() {
    return (
      <div className="new-path-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Map canGetCoords />
            </div>
            <div className="col-md-6 col-sm-12">
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
        </div>
      </div>
    );
  }
}

export default NewPath;
