import { Button } from "./Button";
import { Logo } from "./Logo";

export function NavBarHome() {
  return (
    <div className="nav-container">
      <Logo />
      <Button primary>menu</Button>
    </div>
  );
}

// To Do: combine all navbar.
