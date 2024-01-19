import { AccountSetting } from "../components/AccountSetting";
import { Profile } from "../components/Profile";
import { ProfileSidebar } from "../components/ProfileSidebar";
import { Route } from "../components/Route";

export function ProfileSettings() {
  return (
    <div className="profile-setting-container">
      <ProfileSidebar />
      <div className="profile-content">
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/account-settings">
          <AccountSetting />
        </Route>
      </div>
    </div>
  );
}

// watch again:
// 224 - navigation context
