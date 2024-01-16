import { profileSidebarLinks } from "../utils/constants";
import { Link } from "./Link";

export function ProfileSidebar() {
  const renderedLinks = profileSidebarLinks.slice(0, 2).map((link) => {
    return (
      <Link to={link.path}>
        <div className="link-content">
          <div className="link-icon">{link.icon}</div>
          <div className="link-label">{link.label}</div>
        </div>
      </Link>
    );
  });

  return <div className="profile-sidebar-container">{renderedLinks}</div>;
}
