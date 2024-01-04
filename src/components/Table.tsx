import { tableHeader } from "../utils/constants";
import { Button } from "./Button";

export function Table() {
  const data = [
    {
      sampleName: "sample 1",
      wetWeight: 2.0,
      driedWeight: 2.4,
    },
    {
      sampleName: "sample 2",
      wetWeight: 2.2,
      driedWeight: 2.3,
    },
  ];

  return (
    <table className="table-container">
      <tr className="table-header-content">
        {tableHeader.map((itemHeader) => (
          <th className="table-header-item">{itemHeader.th}</th>
        ))}
      </tr>

      {data.map((dataItem) => (
        <>
          <tr className="table-body-content">
            <td className="table-body-item">{dataItem.sampleName}</td>
            <td className="table-body-item">{dataItem.wetWeight}</td>
            <td className="table-body-item">{dataItem.driedWeight}</td>
            <td className="table-body-item">props formula</td>
            <td className="table-body-item props-button">
              <Button btnNoBG>edit</Button>
              <Button btnNoBG>delete</Button>
            </td>
          </tr>
        </>
      ))}
    </table>
  );
}
