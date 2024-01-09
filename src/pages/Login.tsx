import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import { formLabel, physChemImg } from "../utils/constants";

export function Login() {
  const loginFormLabel = [formLabel[5], formLabel[8]];

  return (
    <div className="page-container login">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="login-content">
        <h2 className="login-title">log in</h2>
        <p className="login-subtitle">
          Don't have an account? <a href="#">Create Account</a>
        </p>
        <Form data={loginFormLabel} />
        <Button primary>log in</Button>
      </div>

      <div className="login-hero">
        <img className="one" src={physChemImg[0].imgUrl} />
        <img className="two" src={physChemImg[1].imgUrl} />
        <div className="three">
          <img className="up" src={physChemImg[3].imgUrl} />
          <img className="down" src={physChemImg[5].imgUrl} />
        </div>
        <img className="four" src={physChemImg[2].imgUrl} />
      </div>
    </div>
  );
}
