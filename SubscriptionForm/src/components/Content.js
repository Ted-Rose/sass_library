import React from "react";
import TextSubscribe from "./TextSubscribe";
import TextThankYou from "./TextThankYou";
import EmailInput from "./EmailInput";
import Icons from "./Icons";
import Terms from "./Terms";

const Content = () => {
  const [termsAgreed, setTermsAgreed] = React.useState(false);
  const [formVisibility, setFormVisibility] = React.useState("show");
  const [thankYouVisibility, setThankYouVisibility] = React.useState("hide");

  const changeAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  const changeFormVisibility = () => {
    setFormVisibility("hide");
    setThankYouVisibility("show");
  };

  return (
    <div className="content">
      <TextSubscribe textVisibility={formVisibility} />
      <TextThankYou textVisibility={thankYouVisibility} />
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
