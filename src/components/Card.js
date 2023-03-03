import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="main">
      <div className="img-container">
        <img src={data.picture.large} alt="avatar" />
      </div>
      <div className="details">
        <h1>
          {data.name.title} {data.name.first} {data.name.last}
        </h1>
        <h2>
          {data.location.city}, {data.location.country}
        </h2>
        <h3>{data.email}</h3>
      </div>
    </div>
  );
};

export default Card;
