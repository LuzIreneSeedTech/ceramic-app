import { ReactNode } from "react";
import { NavigationContextType } from "../context/navigation";
import { useNavigation } from "../hooks/use-navigation";

export function Link({ to, children }: { to: string; children: ReactNode }) {
  const navigationContext = useNavigation();

  if (!navigationContext) {
    return null;
  }

  const { navigate }: NavigationContextType = navigationContext;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.ctrlKey) {
      return;
    }

    event.preventDefault(); // stops the standard navigation, that is, not triggering a total page refresh

    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
