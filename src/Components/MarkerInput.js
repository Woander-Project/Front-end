import React from "react";

const MarkerInput = props => (
  <form>
    <div className="form-group">
      <div>
        <label htmlFor="pointTitle">Point Title: </label>
        <input
          className="form-control col-5"
          type="text"
          autoComplete="off"
          name="pointTitle"
          placeholder="Monastiraki"
        />
      </div>
    </div>
  </form>
);

export default MarkerInput;
