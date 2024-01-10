import { Button } from "./Button";
import { Logo } from "./Logo";

export function NavBarHome() {
  return (
    <div className="nav-container">
      <Logo />
      <Button primary>login</Button>
    </div>
  );
}

// To Do: combine all navbar.
