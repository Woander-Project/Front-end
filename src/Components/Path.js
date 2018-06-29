import React, { Component } from "react";
import BubbleImageContainer from "./BubbleImageContainer";
import Map from "./Map";
import WoanderDescription from "./WoanderDescription";
import WoanderTitle from "./WoanderTitle";
import CommentPath from "./CommentPath";

class Path extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleComments: false
    };

    this.toggleBoxes = this.toggleBoxes.bind(this);
  }

  toggleBoxes() {
    this.setState({
      toggleComments: !this.state.toggleComments
    });
  }

  render() {
    let leftSection;
    if (this.state.toggleComments) {
      leftSection = <CommentPath />;
    } else {
      leftSection = <Map />;
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
              <button className="btn" onClick={this.toggleBoxes}>
                Go To: {this.state.toggleComments ? "Map" : "Comments"}
              </button>
              {leftSection}
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
