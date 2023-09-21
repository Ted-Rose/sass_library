import React from "react";
import Checkbox from "./Checkbox";

const Terms = ({ checkboxChecked, changeAgreed}) => {
  const changeChecked = () => {
    changeAgreed();
  };

  return (
    <div className="TOS">
      <Checkbox value={checkboxChecked} onChange={changeChecked} />
      <p className="subheading i-agree-to-terms-of">
        <span className="text-wrapper">I agree to </span>
        <span className="span">terms of service</span>
      </p>
    </div>
  );
};

export default Terms;
