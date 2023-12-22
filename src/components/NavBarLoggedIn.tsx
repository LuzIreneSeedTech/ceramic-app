import { useState } from "react";
import {
  properties,
  physChemProps,
  physChemPropsType,
  propertiesType,
} from "../utils/constants";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Logo } from "./Logo";

export function NavBarLoggedIn() {
  const [selection, setSelection] = useState<physChemPropsType | null>(null);

  const handleSelect = (option: physChemPropsType | null) => {
    setSelection(option);
  };

  return (
    <div className="nav-container">
      <Logo />
      <div className="dropdown-container">
        {properties.map((item) => (
          <Dropdown
            defaultChoice={item.propName}
            choicesPhysChemProp={physChemProps}
            value={selection}
            onChange={handleSelect}
          />
        ))}
      </div>
      <Button primary>li cortez</Button>
    </div>
  );
}
