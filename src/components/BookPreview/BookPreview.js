import React from "react";
import "./BookPreview.scss";

const BookPreview = ({ imgUrl, title }) => (
  <div className="card">
    <div className="BookPreview-thumb">
      <img src={imgUrl} className="card-img-top" alt={title} />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default BookPreview;
