import { createBrowserHistory /* createHashHistory */ } from "history";
import React, { useLayoutEffect, useRef, useState, FC, ReactNode } from "react";
import { Router, useLocation } from "./react-router";

type RoutesProps = {
  path: string;
  element: ReactNode;
  children?: RoutesProps[];
};

type ModeRouter = {
  children: ReactNode;
};

const BrowserRouter: FC<ModeRouter> = ({ children }) => {
  const historyRef = useRef<any>();

  if (!historyRef.current) {
    historyRef.current = createBrowserHistory(); // HashRouter的话使用 createHashHistory()
  }

  const history = historyRef.current;

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Router
      children={children}
      location={state.location}
      navigateType={state.action}
      navigator={history}
    />
  );
};

const useRoutes = (routes: RoutesProps[]) => {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  for (let i = 0; i < routes.length; i++) {
    const { path, element } = routes[i];
    const match = currentPath === path;
    if (match) {
      return element;
    }
  }
  return null;
};

const createRoutesFromChildren = (children: any) => {
  const routes: RoutesProps[] = [];
  React.Children.forEach(children, (node) => {
    const { path, element, children: child } = node.props;
    const route: RoutesProps = { path, element };
    if (child) {
      route.children = createRoutesFromChildren(child);
    }
    routes.push(route);
  });
  return routes;
};

const Route: any = () => {};

const Routes: any = ({ children }: any) =>
  useRoutes(createRoutesFromChildren(children));

export { BrowserRouter, Routes, Route };
