import { useContext } from "react";
import { NavigationContext } from "../context/navigation";

export function useNavigation() {
  return useContext(NavigationContext);
}
