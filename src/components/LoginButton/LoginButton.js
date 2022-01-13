import Button from "../Button/Button";
import "./LoginButton.css";

function LoginButton({ onClick }) {
  const buttonClassName = "LoginButton";
  const labelClassName = "LoginButton__label";
  return (
    <Button onClick={onClick} className={buttonClassName}>
      <p className={labelClassName}>Sign In</p>
    </Button>
  );
}

export default LoginButton;
