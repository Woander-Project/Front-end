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
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div className="new-path-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Map getCoords={true} />
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
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shortDescription">Short Description:</label>
                  <textarea
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
