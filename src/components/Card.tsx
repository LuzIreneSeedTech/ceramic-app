import { physChemImgType } from "../utils/constants";
import { Link } from "./Link";

export function Card({ imgUrl }: { imgUrl: physChemImgType[] }) {
  return (
    <div className="card-container">
      {imgUrl.map((item) => (
        <div className="card-content">
          <Link to={`/${item.physPropChoice.replace(/\s+/g, "-")}`}>
            <img src={item.imgUrl} className="card-img" />
            <div className="card-txt">{item.physPropChoice}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
