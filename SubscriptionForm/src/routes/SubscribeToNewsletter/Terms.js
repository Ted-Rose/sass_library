import React from "react";

import "./Terms.scss";

import Checkbox from "./Checkbox";
import "./index.css";

const Terms = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="subscription-terms bb-5">
      <Checkbox value={checked} onChange={handleChange} />
      <p>
        I agree to <span>terms of service</span>
      </p>
    </div>
  );
};



export default Terms;
