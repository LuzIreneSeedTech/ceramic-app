import { physChemImg, profileDropdownContent } from "../utils/constants";
import { Link } from "./Link";

export function ProfileDropdownItem({
  isProfileOpen,
}: {
  isProfileOpen: Boolean;
}) {
  return (
    <div
      className={`profile-dropdown-item ${
        isProfileOpen ? "active-profile-drpdwn" : "inactive-profile-drpdwn"
      }`}
    >
      <div className="header-container">
        <img className="profile-img" src={physChemImg[2].imgUrl} />
        <div className="header content">
          <h4>luz irene cortez</h4>
          <p>BS CerE - 5th Year</p>
          <p>cortezluzirene@g.msuiit.edu.ph</p>
        </div>
      </div>

      <hr></hr>

      <div className="middle-container">
        {profileDropdownContent
          .slice(0, profileDropdownContent.length - 2)
          .map((item) => (
            <Link to={item.path}>
              <div className="middle content">
                <div className="middle-icon">{item.icon}</div>
                <h4>{item.label}</h4>
              </div>
            </Link>
          ))}

        <div className="middle content">
          <div className="middle-icon">
            {profileDropdownContent[profileDropdownContent.length - 2].icon}
          </div>
          <h4>
            {profileDropdownContent[profileDropdownContent.length - 2].label}
          </h4>
        </div>
      </div>

      <hr></hr>

      <div className="footer-container">
        <a href="#" className="footer content">
          <div className="footer-icon">
            {profileDropdownContent[profileDropdownContent.length - 1].icon}
          </div>
          <h4>
            {profileDropdownContent[profileDropdownContent.length - 1].label}
          </h4>
        </a>
      </div>
    </div>
  );
}
