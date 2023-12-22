import { Card } from "../components/Card";
import { NavBarLoggedIn } from "../components/NavBarLoggedIn";
import { physChemImg } from "../utils/constants";

export function PhysChemProps() {
  return (
    <div className="phys-chem-props-container">
      <NavBarLoggedIn />
      {/* To Do: make conditional for the title for this page to make it dynamic */}
      <div className="page-title-container">
        <h1 className="page-title-content">physical properties</h1>
      </div>
      <Card imgUrl={physChemImg} />
    </div>
  );
}
