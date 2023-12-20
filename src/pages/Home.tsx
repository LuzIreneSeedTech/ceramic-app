import { Hero } from "../components/Hero";
import { NavBarHome } from "../components/NavBarHome";

export function Home() {
  return (
    <div className="home-container">
      <NavBarHome />
      <Hero />
    </div>
  );
}
