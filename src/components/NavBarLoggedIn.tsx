import { Button } from "./Button";
import { Logo } from "./Logo";

export function NavBarLoggedIn() {
  return (
    <div className="nav-container">
      <Logo />
      <Button primary>li cortez</Button>
    </div>
  );
}
