import { physChemImgType } from "../utils/constants";

export function Card({ imgUrl }: { imgUrl: physChemImgType[] }) {
  return (
    <div className="card-container">
      {imgUrl.map((item, index) => (
        <div
          className={`card-content ${
            index === 1 ? "imgTop" : index === 4 ? "imgDown" : "img"
          }`}
        >
          <img src={item.imgUrl} className="card-img" />
          <div className="card-txt">{item.physPropChoice}</div>
        </div>
      ))}
    </div>
  );
}
