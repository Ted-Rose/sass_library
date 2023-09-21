import React from "react";
import TextSubscribe from "./TextSubscribe";
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
      <TextSubscribe textVisibility={formVisibility} />
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
