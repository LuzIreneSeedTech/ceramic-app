import { ReactNode } from "react";
import { NavigationContextType } from "../context/navigation";
import { useNavigation } from "../hooks/use-navigation";

export function Route({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const navigationContext = useNavigation();

  if (!navigationContext) {
    return null;
  }

  const { currentPath }: NavigationContextType = navigationContext;

  if (path === currentPath) {
    return <>{children}</>;
  }

  return null;
}
