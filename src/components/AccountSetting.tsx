import { formLabel, physChemImg } from "../utils/constants";
import { Button } from "./Button";
import { Form } from "./Form";

export function AccountSetting() {
  const leftFormLabel = [formLabel[3], { label: "username" }, formLabel[5]];
  const rightFormLabel = [
    formLabel[4],
    formLabel[8],
    { label: "phone number" },
  ];

  return (
    <div className="account-setting-container">
      <div className="account-setting-content">
        <div className="updating-image">
          <div className="left">
            <img className="img" src={physChemImg[2].imgUrl} />
          </div>
          <div className="right">
            <div className="content">
              <h4>picture</h4>
              <p>Profile picture maximum size is 1800px x 1800px.</p>
            </div>
            <Button secondary>
              <label className="update-button">
                <input type="file" />
                <span>update</span>
              </label>
            </Button>
          </div>
        </div>

        <div className="updating-form">
          <Form data={leftFormLabel} />
          <Form data={rightFormLabel} />
        </div>

        <div className="update-button">
          <Button secondary>save</Button>
          <Button btnNoBG>cancel</Button>
        </div>
      </div>
    </div>
  );
}
