import { useState } from "react";
import { formLabel, tableHeader } from "../utils/constants";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Form } from "./Form";
import { GoX } from "react-icons/go";

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

  const formData = formLabel.slice(0, 3);

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal onClose={handleModalClose}>
      <div className="modal-content-container">
        <GoX className="modal-close-btn" onClick={handleModalClose} />
        <h1 className="modal-content-title">moisture content</h1>
        <h4 className="modal-content-subtitle">edit data</h4>
        <Form data={formData} />
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
