import { useState } from "react";

const EmailValidator = () => {
  /**
 * Email validation hook.
 *
 * @return {Object} An object containing the following properties:
 *   - value: The entered value
 *   - isEmpty: A boolean indicating if the value is empty
 *   - valueChangeHandler: A function to handle the change event of the value
 *   - inputBlurHandler: A function to handle the blur event of the input
 *   - emailValid: A boolean indicating if the email is valid
 *   - countryValid: A boolean indicating if the country is valid
 */

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsEmpty = isTouched && enteredValue.trim() === "";

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const emailValidation = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!enteredValue || emailRegex.test(enteredValue) === false);
  };

  const emailValid = emailValidation();

  const countryValidation = () => {
    const countryRegex = /.co$/;
    return !enteredValue || countryRegex.test(enteredValue) === false;
  };

  const countryValid = countryValidation();

  return {
    value: enteredValue,
    isEmpty: valueIsEmpty,
    valueChangeHandler,
    inputBlurHandler,
    emailValid,
    countryValid,
  };
};

export default EmailValidator;