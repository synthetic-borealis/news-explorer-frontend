import "./CredentialsForm.css";

import Button from "../Button";

function CredentialsForm({
  name,
  title,
  linkCaption,
  onSubmit,
  onClickLink,
  children,
  isValid,
  className,
  errorMessage,
  isErrorVisible,
}) {
  const formClassName = `CredentialsForm${className ? ` ${className}` : ""}`;
  const titleClassName = "CredentialsForm__title";
  const errorLabelClass = `CredentialsForm__error${
    isErrorVisible ? " CredentialsForm__error_visible" : ""
  }`;
  const submitButtonClass = "CredentialsForm__submit-button";
  const footerClass = "CredentialsForm__footer";
  const footerLinkClass = "CredentialsForm__footer-link";

  return (
    <form className={formClassName} name={name} action="#" onSubmit={onSubmit}>
      <h2 className={titleClassName}>{title}</h2>
      {children}
      <span className={errorLabelClass}>{errorMessage}</span>
      <Button
        type="submit"
        className={submitButtonClass}
        {...(!isValid ? { disabled: true } : {})}
      >
        {title}
      </Button>
      <p className={footerClass}>
        Or{" "}
        <button
          className={footerLinkClass}
          {...{ "aria-label": linkCaption }}
          onClick={onClickLink}
        >
          {linkCaption}
        </button>
      </p>
    </form>
  );
}

export default CredentialsForm;
