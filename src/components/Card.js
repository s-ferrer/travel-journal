import React from "react";
import locationImage from "../images/location.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.imageUrl}`} alt="landscape" className="card-img" />
      <div className="card-stats">
        <img src={locationImage} alt="location" className="locationIcon" />
        <span className="location">{props.location}</span>
        <a className="googleMap" href="{props.googleMapsUrl}">
          View on Google Maps{" "}
        </a>
        <p className="card-title">{props.title}</p>
        <p className="card-date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
