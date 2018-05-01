import React from "react";
import PropTypes from "prop-types";

const WoanderDescription = ({description}) => {
    return (
        <div className="container h-100">
            {description.map((val, index) => {
                return (
                    <div key={index}>
                        <h2>{val.timelineTitle}</h2>
                        <p className="description">{val.timelineDescription}</p>
                    </div>
                );
            })}
        </div>
    );
};
WoanderDescription.defaultProps = {
    description: [
        {
            timelineTitle: "Title 1",
            timelineDescription: "Spicy jalapeno bacon ipsum dolor amet jerky sausage drumstick, shank alcatra swine tail biltong rump ball tip. Corned beef shankle boudin, tail doner picanha capicola short ribs pork chop sirloin prosciutto landjaeger bresaola tenderloin pork belly. Rump frankfurter t-bone bresaola jowl tri-tip. Pig spare ribs sausage, beef boudin hamburger t-bone pork loin picanha. Salami boudin ham cupim pancetta."
        },
        {
            timelineTitle: "Title 2",
            timelineDescription: "Spicy jalapeno bacon ipsum dolor amet jerky sausage drumstick, shank alcatra swine tail biltong rump ball tip. Corned beef shankle boudin, tail doner picanha capicola short ribs pork chop sirloin prosciutto landjaeger bresaola tenderloin pork belly. Rump frankfurter t-bone bresaola jowl tri-tip. Pig spare ribs sausage, beef boudin hamburger t-bone pork loin picanha. Salami boudin ham cupim pancetta."
        }
    ]
};

WoanderDescription.propTypes = {
    description: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default WoanderDescription;
