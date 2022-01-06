import Button from "../Button/Button";
import "./LoginButton.css";

function LoginButton(props) {
  return (<Button onClick={props.onClick} extraClasses="LoginButton"><p className="LoginButton__label">Sign In</p></Button>);
}

export default LoginButton;
