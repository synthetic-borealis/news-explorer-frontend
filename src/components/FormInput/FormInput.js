import "./FormInput.css";

import React from "react";
import validator from "validator";
import { isThrowawayEmail } from "../../utils/validation-helpers";

function FormInput({
  type,
  minLength,
  maxLength,
  placeHolder,
  name,
  id,
  className,
  caption,
  state,
  required,
  autoComplete,
}) {
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const containerClassName = `FormInput${className ? ` ${className}` : ""}`;
  const captionClassName = "FormInput__caption";
  const inputClassName = "FormInput__input";
  const errorLabelClassName = `FormInput__error${
    isErrorVisible ? " FormInput__error_visible" : ""
  }`;

  function handleInvalid(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    state.value.setValue(evt.target.value);

    if (type === "email" && validator.isEmail(evt.target.value) && isThrowawayEmail(evt.target.value)) {
      evt.target.setCustomValidity("Please use a non-throwaway e-mail.");
    } else if (type === "email" && !validator.isEmail(evt.target.value)) {
      // Some e-mail addresses are considered valid by browsers' builtin validation
      // but not by validator
      evt.target.setCustomValidity("Please enter an email address.");
    } else {
      evt.target.setCustomValidity("");
    }

    if (!evt.target.validity.valid) {
      setErrorMessage(evt.target.validationMessage);
      setIsErrorVisible(true);
      state.isValid.setValue(false);
    } else {
      setErrorMessage("");
      setIsErrorVisible(false);
      state.isValid.setValue(true);
    }
  }

  return (
    <label className={containerClassName}>
      <p className={captionClassName}>{caption ? caption : "Input"}</p>
      <input
        className={inputClassName}
        type={type}
        id={id}
        name={name}
        placeholder={placeHolder}
        required={required}
        onInvalid={handleInvalid}
        value={state.value.value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        {...({"aria-label": name})}
      />
      <span className={errorLabelClassName}>{errorMessage}</span>
    </label>
  );
}

export default FormInput;
