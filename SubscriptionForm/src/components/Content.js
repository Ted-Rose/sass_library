import React from "react";
import EmailInput from "./EmailInput";
import Icons from "./Icons";
import Terms from "./Terms";

const Content = () => {
  const [termsAgreed, setTermsAgreed] = React.useState(false);
  const [formVisibility, setFormVisibility] = React.useState("show");

  const changeAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  const changeFormVisibility = () => {
    setFormVisibility("hide");
  };

  return (
    <div className="content">
      <div className={`${formVisibility} text`}>
        <p className="subheading">
          Subscribe to our newsletter and get 10% discount on pineapple glasses.
        </p>
        <div className="heading">Subscribe to newsletter</div>
      </div>
      <EmailInput
        termsAgreed={termsAgreed}
        setFormVisibility={changeFormVisibility}
        inputVisibility={formVisibility} />
      <Terms
        checkboxChecked={termsAgreed}
        changeAgreed={changeAgreed}
        termsVisibility={formVisibility} />
      <Icons />
    </div>
  );
};

export default Content;
