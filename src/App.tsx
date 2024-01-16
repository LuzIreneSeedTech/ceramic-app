import "./styles/style.css";
import { Home } from "./pages/Home";
import { PhysChemProps } from "./pages/PhysChemProps";
import { MoistureContent } from "./pages/MoistureContent";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Link } from "./components/Link";
import { Route } from "./components/Route";
import { Profile } from "./components/Profile";
import { AccountSetting } from "./components/AccountSetting";
import { ProfileSidebar } from "./components/ProfileSidebar";

export function App() {
  return (
    // <>
    //   {/* <Home /> */}
    //   {/* <PhysChemProps /> */}
    // <MoistureContent />
    //   {/* <Register /> */}
    //   {/* <Login /> */}
    // <AccountSettings />
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
