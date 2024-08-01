import React from "react";
import loading from "../assets/loading.gif";

function Loading() {
  return (
    <div className="loading-container">
      <img src={loading} />
    </div>
  );
}

export default Loading;
