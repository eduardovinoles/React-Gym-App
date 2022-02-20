import React from "react";
import "./loadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      <img src={'./img/weightPlate.png'} style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
}
export default LoadingSpinner