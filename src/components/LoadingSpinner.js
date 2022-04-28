import React from "react";

function LoadingSpinner() {
  return (
    <div>
    <div className="spinner-container">
      <div className="loading-spinner">
      <img src={'./img/weightPlate.png'} className="loading-spinner" alt="" />
      </div>
      <div style={{textAlign:"center", color:"chartreuse"}}>Loading..</div>
    </div>
    </div>
  );
}
export default LoadingSpinner
