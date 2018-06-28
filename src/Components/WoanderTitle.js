import React from "react";
import PropTypes from "prop-types";

const WoanderTitle = ({ title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
    </div>
  );
};

WoanderTitle.defaultProps = {
  title: "Gimme Bacon"
};

WoanderTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default WoanderTitle;
