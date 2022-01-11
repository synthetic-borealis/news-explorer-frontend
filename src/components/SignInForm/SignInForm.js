import "./SignInForm.css";

import React from "react";
import CredentialsForm from "../CredentialsForm/CredentialsForm";
import FormInput from "../FormInput/FormInput";
import { useStateObject } from "../../hooks/state-object";

function SignInForm({ onSignIn, ...props }) {
  const formClassName = "SignInForm";
  const inputClassName = "SignInForm__input";
  const emailInputId = "signin-email-input";
  const passwordInputId = "signin-password-input";
  const [isFormValid, setIsFormValid] = React.useState(false);
  const emailState = { value: useStateObject(""), isValid: useStateObject(false) };
  const passwordState = { value: useStateObject(""), isValid: useStateObject(false) };

  function handleSubmit(evt) {
    evt.preventDefault();
    alert("Singing in");
    if (typeof onSignIn === "function") {
      onSignIn();
    }
  }

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
      onSubmit={handleSubmit}
      isValid={isFormValid}
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
