import CredentialsForm from "../CredentialsForm/CredentialsForm";

function SignInForm({onSignIn, ...props}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    alert("Singing in");
    if (typeof onSignIn === "function") {
      onSignIn();
    }
  }

  return (
    <CredentialsForm name="signin-form" title="Sign in" onSubmit={handleSubmit}></CredentialsForm>
  );
}

export default SignInForm;
