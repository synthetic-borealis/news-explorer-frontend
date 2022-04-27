import Button from "../Button";
import "./LoginButton.css";

function LoginButton({ onClick }) {
  return (
    <Button onClick={onClick} className="LoginButton">
      <p className="LoginButton__label">Sign In</p>
    </Button>
  );
}

export default LoginButton;
