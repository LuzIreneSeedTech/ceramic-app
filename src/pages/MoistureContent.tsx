import { Form } from "../components/Form";
import { Formula } from "../components/Formula";
import { LineGraph } from "../components/LineGraph";
import { Table } from "../components/Table";
import { propsContentType } from "../utils/constants";

export function MoistureContent({ props }: { props?: propsContentType }) {
  const data = props?.formContent;

  console.log("data", props);

  return (
    <div className="moisture-content-container">
      <div className="page-container">
        <div className="props-page-content">
          <div className="props-form">
            <h1 className="props-title">{props?.propName}</h1>
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
          <Table tableHeader={data} />
        </div>

        <div className="props-line-graph">
          <LineGraph />
        </div>
      </div>
    </div>
  );
}
