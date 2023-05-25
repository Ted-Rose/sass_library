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
    <div className="container flex-auto justify-center align-center pt-5">
      <Checkbox value={checked} onChange={handleChange} />
      <p className="text-gray2">
        I agree to{" "}
        <span className="text-black underline">terms of service</span>
      </p>
    </div>
  );
};

export default Terms;
