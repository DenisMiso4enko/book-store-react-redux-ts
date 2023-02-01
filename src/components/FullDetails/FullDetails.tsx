import React from "react";
import { jsx } from "@emotion/react";
import JSX = jsx.JSX;
interface IFullDetails {
  name: string;
  value: string | JSX.Element;
}

const FullDetails = ({ name, value }: IFullDetails) => {
  return (
    <div>
      <div className="row">
        <span>{name}</span>
        <div className="rate">{value}</div>
      </div>
    </div>
  );
};

export default FullDetails;
