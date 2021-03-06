import "./SignUpForm.css";

import React from "react";
import CredentialsForm from "../CredentialsForm";
import FormInput from "../FormInput";
import { useStateObject } from "../../hooks/state-object";

import { errorMessages } from "../../utils/constants";

function SignUpForm({ onSignUp, onClickLink }) {
  const emailInputId = "signup-email-input";
  const passwordInputId = "signup-password-input";
  const usernameInputId = "signup-username-input";
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("Here be monsters");
  const emailState = {
    value: useStateObject(""),
    isValid: useStateObject(false),
  };
  const passwordState = {
    value: useStateObject(""),
    isValid: useStateObject(false),
  };
  const usernameState = {
    value: useStateObject(""),
    isValid: useStateObject(false),
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (typeof onSignUp === "function") {
      onSignUp({
        email: emailState.value.value,
        password: passwordState.value.value,
        name: usernameState.value.value,
      })
      .catch((err) => {
        if (err.status && err.status === 409) {
          setErrorMessage(errorMessages.emailNotAvailable);
        } else {
          setErrorMessage(errorMessages.otherError);
        }
        setIsErrorVisible(true);
      });
    }
  }

  React.useEffect(() => {
    setIsErrorVisible(false);
  }, [emailState.value.value, passwordState.value.value, usernameState.value.value]);

  React.useEffect(() => {
    const isEmailValid = emailState.isValid.value;
    const isPasswordValid = passwordState.isValid.value;
    const isUsernameValid = usernameState.isValid.value;
    setIsFormValid(isEmailValid && isPasswordValid && isUsernameValid);
  }, [
    emailState.isValid.value,
    passwordState.isValid.value,
    usernameState.isValid.value,
  ]);

  return (
    <CredentialsForm
      className="SignUpForm"
      name="signup-form"
      title="Sign up"
      linkCaption="Sign in"
      onSubmit={handleSubmit}
      onClickLink={onClickLink}
      isValid={isFormValid}
      errorMessage={errorMessage}
      isErrorVisible={isErrorVisible}
    >
      <FormInput
        type="email"
        name="email"
        id={emailInputId}
        className="SignUpForm__input"
        caption="Email"
        placeHolder="Enter email"
        state={emailState}
        required={true}
        autoComplete="off"
      />
      <FormInput
        type="password"
        name="password"
        id={passwordInputId}
        className="SignUpForm__input"
        caption="Password"
        placeHolder="Enter password"
        state={passwordState}
        required={true}
        minLength="8"
        autoComplete="off"
      />
      <FormInput
        type="text"
        name="username"
        id={usernameInputId}
        className="SignUpForm__input"
        caption="Username"
        placeHolder="Enter your username"
        state={usernameState}
        required={true}
        minLength="2"
        maxLength="30"
        autoComplete="off"
      />
    </CredentialsForm>
  );
}

export default SignUpForm;
