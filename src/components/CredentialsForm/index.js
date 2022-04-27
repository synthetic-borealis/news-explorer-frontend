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
  const errorLabelClass = `CredentialsForm__error${
    isErrorVisible ? " CredentialsForm__error_visible" : ""
  }`;

  return (
    <form className={formClassName} name={name} action="#" onSubmit={onSubmit}>
      <h2 className="CredentialsForm__title">{title}</h2>
      {children}
      <span className={errorLabelClass}>{errorMessage}</span>
      <Button
        type="submit"
        className="CredentialsForm__submit-button"
        {...(!isValid ? { disabled: true } : {})}
      >
        {title}
      </Button>
      <p className="CredentialsForm__footer">
        Or{" "}
        <button
          className="CredentialsForm__footer-link"
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
