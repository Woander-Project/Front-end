import React from "react";
import Filters from "./Filters";

const FiltersPanel = props => (
  <div className="filters-panel container">
    <h4 className="title">Filters</h4>
    <hr className="filter-line" />
    <div className="filters">
      <Filters filters={props.filters} />
    </div>
  </div>
);

FiltersPanel.defaultProps = {
  filters: [
    "Sunlight",
    "Moon",
    "Travel",
    "Beach",
    "View",
    "Acropolis",
    "Napoli",
    "Athens",
    "Pregnant",
    "Gay",
    "Traffic",
    "Go To",
    "Milan",
    "Grand Canyon",
    "Napoli",
    "Athens",
    "Pregnant",
    "Gay",
    "Traffic",
    "Go To",
    "Milan",
    "Grand Canyon",
    "Napoli",
    "Athens",
    "Pregnant",
    "Gay",
    "Traffic",
    "Go To",
    "Milan",
    "Grand Canyon",
    "Napoli",
    "Athens",
    "Pregnant",
    "Gay",
    "Traffic",
    "Go To",
    "Milan",
    "Grand Canyon",
    "Napoli",
    "Athens",
    "Pregnant",
    "Gay",
    "Traffic",
    "Go To",
    "Milan",
    "Grand Canyon",
    "Napoli",
    "Athens",
    "Pregnant",
    "Gay",
    "Traffic",
    "Go To",
    "Milan",
    "Grand Canyon",
    "Sunlight"
  ]
};

export default FiltersPanel;
