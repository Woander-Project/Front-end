import React, {Component} from "react";
import BubbleImageContainer from "./BubbleImageContainer";
import Map from "./Map";
import WoanderDescription from "./WoanderDescription";
import WoanderTitle from "./WoanderTitle";
import CommentPath from "./CommentPath";

class Path extends Component {
	render() {
		return (
			<div className="Path">
				<BubbleImageContainer/>
				<div className="woander-desc container-fluid">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<WoanderTitle/>
						</div>
					</div>
					<div className="row h-75">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
							<Map/>
							<CommentPath/>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
							<WoanderDescription/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Path;
