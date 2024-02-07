import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="logo-container">
      <Link to={"/"} className="logo">
        BRITTLE
      </Link>
    </div>
  );
}
