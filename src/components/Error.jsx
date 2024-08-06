import React from "react";
import emptyPlate from "../assets/no-food-found.png";
import { Link } from "react-router-dom";

function Error({ message, explanation }) {
  return (
    <div className="not-found-container">
      <img className="not-found-image" src={emptyPlate} alt="" />
      <h1 className="not-found-header">
        {message ? message : "Oops an error!"}
      </h1>
      <p>{explanation ? explanation : "Something went wrong"}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Error;
