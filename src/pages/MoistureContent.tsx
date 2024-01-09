import { Form } from "../components/Form";
import { Formula } from "../components/Formula";
import { LineGraph } from "../components/LineGraph";
import { NavBarLoggedIn } from "../components/NavBarLoggedIn";
import { Table } from "../components/Table";
import { formLabel } from "../utils/constants";

export function MoistureContent() {
  const data = formLabel.slice(0, 3);

  return (
    <div className="moisture-content-container">
      <NavBarLoggedIn />
      <div className="page-container">
        <div className="props-page-content">
          <div className="props-form">
            <h1 className="props-title">moisture content</h1>
            <Form data={data} />
          </div>

          <div className="props-equation">
            <Formula />
            <p className="props-equation-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis pulvinar augue, vitae sollicitudin dolor. Aenean condimentum
              bibendum lectus, blandit vulputate libero interdum non.
            </p>
          </div>
        </div>

        <div className="props-table">
          <Table />
        </div>

        <div className="props-line-graph">
          <LineGraph />
        </div>
      </div>
    </div>
  );
}
