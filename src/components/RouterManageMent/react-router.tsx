import React, { useContext, useMemo, createContext } from "react";

const LocationContext = createContext({});
const NavigateContext = createContext({});

type RouterProps = {
  children: React.ReactNode;
  location: Location;
  navigateType: string;
  navigator: Record<string, any>;
  [key: string]: any;
};

const Router: React.FC<RouterProps> = ({ children, navigator, location }) => {
  const navigatorVal = useMemo(() => ({ navigator }), [navigator]);
  const locationVal = useMemo(() => ({ location }), [location]);

  return (
    <LocationContext.Provider value={locationVal}>
      <NavigateContext.Provider value={navigatorVal}>
        {children}
      </NavigateContext.Provider>
    </LocationContext.Provider>
  );
};

const useLocation = () => useContext<any>(LocationContext).location;

const useNavigate = () => useContext<any>(NavigateContext).navigator;

export { Router, useLocation, useNavigate };
