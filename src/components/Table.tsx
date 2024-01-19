import { useState } from "react";
import { propsFormContentType, tableDataType } from "../utils/constants";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Form } from "./Form";
import { GoX } from "react-icons/go";

export function Table({
  tableHeader,
}: {
  tableHeader: propsFormContentType[] | undefined;
}) {
  const path = window.location.pathname;

  const formulaName = (pathname: string) => {
    switch (pathname) {
      case "/water-absorption":
        return "WA";
      case "/particle-size-distribution":
        return "PSD";
      case "/apparent-porosity":
        return "PA";
      case "/moisture-content":
        return "MC";
      case "/density":
        return "density";
      case "/compressive-strength":
        return "CS";
      default:
        return null;
    }
  };

  const data: tableDataType[] = [
    {
      sampleName: "sample 1",
      wetWt: 2.0,
      driedWt: 2.4,
    },
    {
      sampleName: "sample 2",
      wetWt: 2.2,
      driedWt: 2.3,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const modalContentTitle = path.replace(/-/g, " ").slice(1);

  const modal = (
    <Modal onClose={handleModalClose} path={path}>
      <div className="modal-content-container">
        <GoX className="modal-close-btn" onClick={handleModalClose} />
        <h1 className="modal-content-title">{modalContentTitle}</h1>
        <h4 className="modal-content-subtitle">edit data</h4>
        <Form data={tableHeader} />
        <Button primary onClick={handleModalClose}>
          update
        </Button>
      </div>
    </Modal>
  );

  return (
    <div className="table-container">
      <table className="table-content">
        <tr className="table-header-content">
          {tableHeader?.map((itemHeader) => (
            <th className="table-header-item">{itemHeader.shortLabel}</th>
          ))}
          <th className="table-header-item">{formulaName(path)}</th>
          <th className="table-header-item">status</th>
        </tr>

        {data.map((dataItem) => (
          <>
            <tr className="table-body-content">
              <td className="table-body-item">{dataItem.sampleName}</td>
              <td className="table-body-item">{dataItem.wetWt}</td>
              <td className="table-body-item">{dataItem.driedWt}</td>
              {path === "/apparent-porosity" ? (
                <th className="table-body-item">{dataItem.suspendedWt}</th>
              ) : null}
              <td className="table-body-item">props formula</td>
              <td className="table-body-item props-button">
                <Button onClick={handleModalOpen} btnNoBG>
                  edit
                </Button>
                <Button btnNoBG>delete</Button>
              </td>
            </tr>
          </>
        ))}
      </table>

      {showModal && modal}
    </div>
  );
}
