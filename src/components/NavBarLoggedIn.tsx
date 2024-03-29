import { useEffect, useRef, useState } from "react";
import { properties, physChemPropsType } from "../utils/constants";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Logo } from "./Logo";
import { ProfileDropdownItem } from "./ProfileDropdownItem";
import { Link } from "./Link";

export function NavBarLoggedIn() {
  const [selection, setSelection] = useState<physChemPropsType | null>(null);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSelect = (option: physChemPropsType | null) => {
    setSelection(option);
  };

  const handleClickProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  let dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="nav-container">
      <Logo />
      <div className="dropdown-container">
        {properties.map((item) => (
          <Link to={`/${item.propName.replace(/\s+/g, "-")}`}>
            {item.propName}
          </Link>
        ))}
      </div>

      <div className="profile-dropdown-container" ref={dropdownRef}>
        <Button onClick={handleClickProfile} primary>
          li cortez
        </Button>
        <ProfileDropdownItem isProfileOpen={isProfileOpen} />
      </div>
    </div>
  );
}

// To Do: combine all navbar.
