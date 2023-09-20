import React from "react";
import AddEmailToDatabase from "./AddEmailToDatabase";
import FormValidator from "./../Hooks/FormValidator";

const EmailInput = () => {
  const [message, setMessage] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [inputHasError, setInputHasError] = React.useState(false);
  const [hideErrorMessage, setHideErrorMessage] = React.useState(true);
  const {
    value,
    isEmpty,
    notNumber,
    valueChangeHandler,
    inputBlurHandler,
    emailValid,
    countryValid,
    reset,
    requiredError,
    dataError,
    inputClasses,
  } = FormValidator();

  console.log(countryValid);


  const emailValidation = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!emailInput || emailRegex.test(emailInput) === false);
  };

  const countryValidation = () => {
    const countryRegex = /.co$/;
    return !emailInput || countryRegex.test(emailInput) === false;
  };

  const onSubmit = () => {
    if (isEmpty) {
      setInputHasError(true);
      setMessage("Email adress is required!");
    } else if (!countryValid) {
      setInputHasError(true);
      setMessage("We are not accepting subscriptions from Colombia emails!");
    } else if (!emailValid) {
      setInputHasError(true);
      setMessage("Email Address not valid!");
    } else {
      setInputHasError(false);
      setMessage("Thanks for subscribing!");
      AddEmailToDatabase(value);
    }
    setHideErrorMessage(false);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const messageClass = inputHasError ? "error" : "approved";
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
      <div className={`${"message"} ${messageClass} ${showMessage}`}>
        {message}
      </div>
    </div>
  );
};

export default EmailInput;
