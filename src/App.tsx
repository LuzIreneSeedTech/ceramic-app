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
import { ProfileSettings } from "./pages/ProfileSettings";
import { NavBarLoggedIn } from "./components/NavBarLoggedIn";
import { physPropsContent } from "./utils/constants";

export function App() {
  return (
    <div style={{ width: "1519.2px" }}>
      <div>
        <NavBarLoggedIn />
        <div>
          <Route path="/physical-props">
            <PhysChemProps pageTitle="physical properties" />
          </Route>

          <Route path="/chemical-props">
            <PhysChemProps pageTitle="chemical properties" />
          </Route>
        </div>

        <div>
          <Route path="/water-absorption">
            <MoistureContent props={physPropsContent[0]} />
          </Route>
          <Route path="/apparent-porosity">
            <MoistureContent props={physPropsContent[1]} />
          </Route>
          <Route path="/moisture-content">
            <MoistureContent props={physPropsContent[2]} />
          </Route>
        </div>
      </div>
    </div>
  );
}
