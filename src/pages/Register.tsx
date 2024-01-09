import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import { formLabel, physChemImg } from "../utils/constants";

export function Register() {
  const registerInputLabel = formLabel.slice(3, 9);

  return (
    <div className="page-container register">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="register-content">
        <div className="register-form-container">
          <h2 className="register-title">create account</h2>
          <p className="register-subtitle">
            Already have an account? <a href="#">Login</a>
          </p>
          <Form data={registerInputLabel} />
          <Button>create account</Button>
        </div>

        <div className="register-hero">
          <div className="hero-upper">
            <img src={physChemImg[1].imgUrl} />
            <img src={physChemImg[0].imgUrl} />
          </div>

          <div className="hero-down">
            <div className="left">
              <img src={physChemImg[3].imgUrl} />
              <img src={physChemImg[5].imgUrl} />
            </div>

            <div className="right">
              <img src={physChemImg[2].imgUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
