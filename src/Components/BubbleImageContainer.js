import React from "react";
import PropTypes from "prop-types";
import imgOne from "../assets/img-1.jpg";
import imgTwo from "../assets/img-2.jpg";
import imgThree from "../assets/img-3.jpg";
import imgFour from "../assets/img-4.jpg";
import imgFive from "../assets/img-5.jpg";

const BubbleImageContainer = ({images}) => {
	return (
		<div className="bubble-container">
			{images.map((image, index) => {
				return (
					<div key={index} className="img-container">
						<img src={image} alt="hello" className={`img-${index}`}/>
					</div>
				);
			})}
		</div>
	);
};

BubbleImageContainer.defaultProps = {
	images: [
		imgOne,
		imgTwo,
		imgThree,
		imgFour,
		imgFive
	]
};

BubbleImageContainer.propTypes = {
	images: PropTypes.array.isRequired
};

export default BubbleImageContainer;
