import React, { Component } from "react";
import Map from "./Map";

class NewPath extends Component {
  render() {
    return (
      <div className="new-path-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Map />
            </div>
            <div className="col-md-6 col-sm-12">
              <form>
                <div className="form-group">
                  <label htmlFor="pathName">Path Name:</label>
                  <input
                    type="text"
                    id="pathName"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Woander"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shortDescription">Short Description:</label>
                  <textarea className="form-control" id="shortDescription" />
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
