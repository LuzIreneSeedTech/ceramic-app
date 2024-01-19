import { useState } from "react";
import { physChemPropsType } from "../utils/constants";
import { GoChevronDown } from "react-icons/go";

export function Dropdown({
  defaultChoice,
  choicesPhysChemProp,
  value,
  onChange,
}: {
  defaultChoice: string;
  choicesPhysChemProp: physChemPropsType[];
  value: physChemPropsType | null;
  onChange: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [isPhysPropVisible, setIsPhysPropVisible] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (physChemPropItem: physChemPropsType) => {
    setIsOpen(false);
    onChange(physChemPropItem);
  };

  return (
    <div className="dropdown-content">
      <div className="dropdown-content-container" onClick={handleClick}>
        <div className={`dropdown ${value ? "selected" : "not-selected"}`}>
          {value?.physPropName || defaultChoice}
        </div>
        <GoChevronDown className="dropdown-arrow" />
      </div>

      {isOpen && (
        <div className="dropdown-choices">
          <div className="dropdown-item">{defaultChoice}</div>
          {choicesPhysChemProp.map((physChemPropItem) => (
            <div
              className="dropdown-item"
              onClick={() => handleOptionClick(physChemPropItem)}
            >
              {physChemPropItem.physPropName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// dropdown start
// 197
