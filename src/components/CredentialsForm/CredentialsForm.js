import "./CredentialsForm.css";

import Button from "../Button/Button";

function CredentialsForm({name, title, onSubmit, children, ...props}) {
  const formClassName = "CredentialsForm";
  const titleClassName = "CredentialsForm__title";
  const submitButtonClass = "CredentialsForm__submit-button";

  return (
    <form className={formClassName} name={name} action="#" onSubmit={onSubmit}>
      <h2 className={titleClassName}>{title}</h2>
      {children}
      <Button type="submit" extraClasses={submitButtonClass}>{title}</Button>
    </form>
  );
}

export default CredentialsForm;
