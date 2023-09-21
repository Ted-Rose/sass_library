import React from "react";
import EmailInput from "./EmailInput";
import Icons from "./Icons";
import Terms from "./Terms";

const Content = () => {
  const [termsAgreed, setTermsAgreed] = React.useState(false);

  const changeAgreed = () => {
    setTermsAgreed(!termsAgreed);
  }

  return (
    <div className="content">
      <div className="text">
        <p className="subheading">
          Subscribe to our newsletter and get 10% discount on pineapple glasses.
        </p>
        <div className="heading">Subscribe to newsletter</div>
      </div>
      <EmailInput termsAgreed={termsAgreed}/>
      <Terms checkboxChecked={termsAgreed} changeAgreed={changeAgreed} />
      <Icons />
    </div>
  )
};

export default Content;
