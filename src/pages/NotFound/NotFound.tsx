import React from "react";
import errorImage from "../../assets/404-error.svg";
import "./style.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={errorImage} alt="404" />
    </div>
  );
};

export default NotFound;
