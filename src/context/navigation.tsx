import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface NavigationContextType {
  currentPath: string;
  setCurrentPath: (currentPath: string) => void;
  navigate: (to: string) => void;
}

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

export function NavigationProvider({ children }: PropsWithChildren<{}>) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // handles the user clicking "forward" and "backward" (doing this do not refresh the page)
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  //   navigate function -> calls "pushState" to update the path inside the address bar and the currentPath, as well as the content on the current page.
  const navigate = (to: string) => {
    // to === currentPath

    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    // the "value property" inside the "NavigationContext.Provider" will share all the functionalities inside this navigation provider to all the components in the app, by passing those functionalities using the value property
    <NavigationContext.Provider
      value={{ currentPath, setCurrentPath, navigate }}
    >
      {/* <div>
        <button onClick={() => navigate("/a1")}>GO TO A1</button>
        <button onClick={() => navigate("/a2")}>GO TO A2</button>
      </div> */}
      {/* {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}
