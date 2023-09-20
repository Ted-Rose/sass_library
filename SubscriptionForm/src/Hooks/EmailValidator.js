import { useState } from "react";

const EmailValidator = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsEmpty = isTouched && enteredValue.trim() == "";
  const emailValid = emailValidation();
  const countryValid = countryValidation(enteredValue);
  const inputClasses =
    !valueIsEmpty && !emailIsValid && countryIsValid
      ? "form-control"
      : "form-control invalid";

const [debug, setDebug] = useState("Debug empy");

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };


  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };


  const emailValidation = (enteredValue) => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!enteredValue || emailRegex.test(enteredValue) === false);
  };

  const countryValidation = (enteredValue) => {
    const countryRegex = /.co$/;
    setDebug("in here");
    return !enteredValue || countryRegex.test(enteredValue) === false;
  };

  const requiredError = (
    <p className="error-text">Please, submit required data</p>
  );
  const dataError = (
    <p className="error-text">Please, provide the data of indicated type</p>
  );

  return {
    value: enteredValue,
    isEmpty: valueIsEmpty,
    valueChangeHandler,
    inputBlurHandler,
    emailValid,
    countryValid: countryValid,
    reset,
    requiredError,
    dataError,
    inputClasses,
  };
};

export default EmailValidator;
