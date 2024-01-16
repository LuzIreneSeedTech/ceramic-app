import { physChemImg } from "../utils/constants";
import { dummyData } from "../utils/dummyData";
import { Button } from "./Button";
import { GoPencil } from "react-icons/go";

export function Profile() {
  return (
    <div className="personal-info-container">
      <div className="profile-setting-header">
        <div className="profile-setting-image">
          <img src={physChemImg[2].imgUrl} />
        </div>
        <div className="profile-setting content">
          <h4>{`${dummyData.firstName} ${dummyData.middleInitial}. ${dummyData.lastName}`}</h4>
          <p>
            {`${dummyData.course} -`} <span>{`${dummyData.Year}th Year`}</span>
          </p>
          <p>{dummyData.emailAddress}</p>
        </div>
      </div>

      <div className="personal-info">
        <div className="header">
          <div className="header-title">Personal Information</div>
          <div className="edit-btn">
            <GoPencil />
            Edit
          </div>
        </div>

        {Object.entries(dummyData)
          .slice(0, 6)
          .map((item) => (
            <div className="content">
              <div className="content-item-label">{item[0]}</div>
              <div className="content-item-value">{item[1]}</div>
            </div>
          ))}
      </div>

      <div className="address-info">
        <div className="header">
          <div className="header-title">Address</div>
          <div className="edit-btn">
            <GoPencil />
            Edit
          </div>
        </div>

        {Object.entries(dummyData)
          .slice(6, 10)
          .map((item) => (
            <div className="content">
              <div className="content-item-label">{item[0]}</div>
              <div className="content-item-value">{item[1]}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
