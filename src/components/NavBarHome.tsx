import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function NavBarHome() {
  return (
    <div className="nav-container">
      <Logo />
      <Link to={"/login"}>
        <Button primary>login</Button>
      </Link>
    </div>
  );
}

// To Do: combine all navbar.
