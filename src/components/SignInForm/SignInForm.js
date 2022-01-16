import "./SignInForm.css";

import React from "react";
import CredentialsForm from "../CredentialsForm/CredentialsForm";
import FormInput from "../FormInput/FormInput";
import { useStateObject } from "../../hooks/state-object";
import { errorMessages } from "../../utils/constants";

function SignInForm({ onSignIn, onClickLink }) {
  const formClassName = "SignInForm";
  const inputClassName = "SignInForm__input";
  const emailInputId = "signin-email-input";
  const passwordInputId = "signin-password-input";
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

  function handleSubmit(evt) {
    evt.preventDefault();
    if (typeof onSignIn === "function") {
      onSignIn({
        email: emailState.value.value,
        password: passwordState.value.value,
      })
      .catch((err) => {
        if (err.status && err.status === 401) {
          setErrorMessage(errorMessages.badCredentials);
        } else {
          setErrorMessage(errorMessages.otherError);
        }
        setIsErrorVisible(true);
      });
    }
  }

  React.useEffect(() => {
    setIsErrorVisible(false);
  }, [emailState.value.value, passwordState.value.value]);

  React.useEffect(() => {
    const isEmailValid = emailState.isValid.value;
    const isPasswordValid = passwordState.isValid.value;
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [emailState.isValid.value, passwordState.isValid.value]);

  return (
    <CredentialsForm
      className={formClassName}
      name="signin-form"
      title="Sign in"
      linkCaption="Sign up"
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
        className={inputClassName}
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
        className={inputClassName}
        caption="Password"
        placeHolder="Enter password"
        state={passwordState}
        required={true}
        minLength="8"
        autoComplete="off"
      />
    </CredentialsForm>
  );
}

export default SignInForm;
