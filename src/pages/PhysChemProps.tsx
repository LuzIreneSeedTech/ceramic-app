import { Card } from "../components/Card";
import { physChemImg, properties } from "../utils/constants";

export function PhysChemProps({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="phys-chem-props-container">
      {/* To Do: make conditional for the title for this page to make it dynamic */}
      <div className="page-title-container">
        <h1 className="page-title-content">{pageTitle}</h1>
      </div>
      <Card imgUrl={physChemImg} />
    </div>
  );
}
