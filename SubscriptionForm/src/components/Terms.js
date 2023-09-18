import React from "react";
import Checkbox from "./Checkbox";
import "./../index.css";

const Terms = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="TOS">
      <Checkbox value={checked} onChange={handleChange} />
      <p className="i-agree-to-terms-of">
        <span className="text-wrapper">I agree to </span>
        <span className="span">terms of service</span>
      </p>
    </div>
  );
};

export default Terms;
