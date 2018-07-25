import React from "react";
import img from "../assets/img-1.jpg";

const MarkerInput = props => (
  <form className="container marker-form-container">
    <hr />
    <div className="row">
      <div className="col-md-4 inline-fields">
        <div className="form-group">
          <label htmlFor="pointTitle">Point Title:</label>
          <input
            className="form-control"
            id="pointTitle"
            type="text"
            autoComplete="off"
            name="pointTitle"
            placeholder="e.g Monastiraki"
          />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            className="form-control"
            id="latitude"
            type="text"
            autoComplete="off"
            name="latitude"
            placeholder={props.point.lat}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="longtitude">Longtitude:</label>
          <input
            className="form-control"
            id="longtitude"
            type="text"
            autoComplete="off"
            name="longtitude"
            placeholder={props.point.lng}
            readOnly
          />
        </div>
        <button className="btn btn-danger" onClick={props.discardPoint}>
          Discard Point
        </button>
      </div>
      <div className="col-md-4 form-group point-desc-container">
        <label htmlFor="pointDescription">Point Description:</label>
        <textarea
          className="form-control point-desc"
          type="text"
          name="pointDescription"
          id="pointDescription"
          autoComplete="off"
        />
      </div>
      <div className="col-md-4 form-group">
        <label htmlFor="imgUpload">Image:</label>
        <img className="iploaded-img" src={img} id="imgUpload" alt="Upload" />
        <button className="btn btn-primary w-100">Upload Photo</button>
      </div>
    </div>
  </form>
);

export default MarkerInput;
