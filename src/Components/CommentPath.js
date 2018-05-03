import React from "react";
import PropTypes from "prop-types";

const CommentPath = ({comments}) => {

	return (
		<div className="comments-container">
			{comments.map((val, index) => {
				return (
					<div key={index} className="container">
						<h2>{val.rating}</h2>
						<p>{val.comment}</p>
					</div>
				);
			})}
		</div>
	);
};

CommentPath.defaultProps = {
	comments: [
		{
			rating: 10,
			comment: "Spicy jalapeno bacon ipsum dolor amet bresaola ground round strip steak pork buffalo capicola meatball pastrami leberkas ham hock tail corned beef pork belly."
		},
		{
			rating: 5,
			comment: "Spicy jalapeno bacon ipsum dolor amet bresaola ground round strip steak pork buffalo capicola meatball pastrami leberkas ham hock tail corned beef pork belly."
		},
		{
			rating: 8,
			comment: "Spicy jalapeno bacon ipsum dolor amet bresaola ground round strip steak pork buffalo capicola meatball pastrami leberkas ham hock tail corned beef pork belly."
		},
		{
			rating: 22,
			comment: "Spicy jalapeno bacon ipsum dolor amet bresaola ground round strip steak pork buffalo capicola meatball pastrami leberkas ham hock tail corned beef pork belly."
		},
	]
};

CommentPath.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default CommentPath;
