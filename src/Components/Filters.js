import React from "react";

const Filters = props =>
  props.filters.map((filter, i) => {
    return (
      <div key={i} className="filter">
        {filter}
      </div>
    );
  });

export default Filters;
