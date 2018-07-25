import React, { Component } from "react";
import BubbleImageContainer from "./BubbleImageContainer";
import MapContainer from "./MapContainer";
import WoanderDescription from "./WoanderDescription";
import WoanderTitle from "./WoanderTitle";
import CommentPath from "./CommentPath";

class Path extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleComments: false
    };

    this.showMap = this.showMap.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  showMap() {
    if (this.state.toggleComments) {
      this.setState({
        toggleComments: false
      });
    }
  }

  showComments() {
    if (!this.state.toggleComments) {
      this.setState({
        toggleComments: true
      });
    }
  }

  render() {
    let leftSection;
    if (this.state.toggleComments) {
      leftSection = <CommentPath />;
    } else {
      leftSection = <MapContainer />;
    }
    return (
      <div className="Path">
        <BubbleImageContainer />
        <div className="woander-desc container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <WoanderTitle />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="container">{leftSection}</div>
              <div className="container toggle-buttons">
                <button
                  className={`btn ${
                    !this.state.toggleComments ? "btn-toggle" : null
                  }`}
                  onClick={this.showMap}
                >
                  Map
                </button>
                <button
                  className={`btn ${
                    this.state.toggleComments ? "btn-toggle" : null
                  }`}
                  onClick={this.showComments}
                >
                  Comments
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <WoanderDescription />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Path;
