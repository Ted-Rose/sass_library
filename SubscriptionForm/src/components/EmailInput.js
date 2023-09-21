import React from "react";
import AddEmailToDatabase from "./AddEmailToDatabase";
import EmailValidator from "./../Hooks/EmailValidator";

const EmailInput = (termsAgreed) => {
  const [message, setMessage] = React.useState("");
  const [hideErrorMessage, setHideErrorMessage] = React.useState(true);
  const {
    value,
    isEmpty,
    valueChangeHandler,
    inputBlurHandler,
    emailValid,
    countryValid,
  } = EmailValidator();

  const onSubmit = () => {
    if (isEmpty) {
      setMessage("Email adress is required!");
    } else if (!countryValid) {
      setMessage("We are not accepting subscriptions from Colombia emails!");
    } else if (!emailValid) {
      setMessage("Email Address not valid!");
    } else if (!termsAgreed) {
      setMessage("You must first agree the Terms and Conditions!");
    } else {
      setMessage("");
      setHideErrorMessage(true);
      AddEmailToDatabase(value);
      return;
    }
    setHideErrorMessage(false);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const messageClass = !isEmpty & emailValid & countryValid ? "" : "error";
  const showMessage = hideErrorMessage ? "hide" : "show";

  return (
    <div className="input-container">
      <div className="input-box">
        <form
          className="overlap-group"
          onSubmit={preventDefault}
          action="#"
          id="subscriptionForm"
        >
          <div className="email-input-container">
            <input
              id="emailInput"
              type="text"
              className={`${"placeholder"} ${messageClass}`}
              value={value}
              onChange={valueChangeHandler}
              onBlur={inputBlurHandler}
              name="email_input"
              placeholder="Type your email address here…"
            />
            <div className="ic-arrow">
              <button className="subscribe-submit-button" onClick={onSubmit}></button>
            </div>
          </div>
        </form>
      </div>
      <div className={`${"message"} error ${showMessage}`}>
        {message}
      </div>
    </div>
  );
};

export default EmailInput;
