import React from "react";
import locationImage from "../images/location.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={locationImage} alt="location" className="location" />
    </div>
  );
}
