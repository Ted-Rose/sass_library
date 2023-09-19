import React from "react";
import Checkbox from "./Checkbox";
import "./../index.css";

const Terms = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="col-12-xs pt-2 pb-2">
      <Checkbox value={checked} onChange={handleChange} />
      <p className="ml-4 text-gray-1">
        I agree to{" "}
        <span className="btn-black underline ">terms of service</span>
      </p>
    </div>
  );
};

export default Terms;
