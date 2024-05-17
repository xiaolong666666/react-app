import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Base from "@/components/Base";
import Compare from "@/components/Base/Compare";
// import Hooks from "@/components/Base/Hooks";
import LogReport from "@/components/Base/LogReport";
import RenderControl from "@/components/Base/RenderControl";
import Page from "@/components/Base/Page";
import StateManageMent from "@/components/StateManageMent";
import ReduxManageMent from "@/components/StateManageMent/ReduxManageMent";
import MobxManageMent from "@/components/StateManageMent/MobxManageMent";
import RouterManageMent from "@/components/RouterManageMent";
import Network from "@/components/Network";
import NetworkUser from "@/components/Network/User";
import NetworkArticle from "@/components/Network/Article";
import NetworkPoll from "@/components/Network/Poll";
import NetworkSSE from "@/components/Network/SSE";
import NetworkChat from "@/components/Network/Chat";
import Record from "@/components/Record";
import RecordVirtualList from "@/components/Record/VirtualList";
import RecordDirectory from "@/components/Record/Directory";
import RecordScrollFollow from "@/components/Record/ScrollFollow";
import Chart from "@/components/Chart";
import ChartWorkFlow from "@/components/Chart/WorkFlow";
import ChartWorkFlowOverview from "@/components/Chart/WorkFlow/Overview";
import ChartWorkFlowList from "@/components/Chart/WorkFlow/List";

// 异步加载路由
const Hooks = lazy(() => import("@/components/Base/Hooks"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/base",
    element: <Base />,
    children: [
      {
        path: "compare",
        element: <Compare />,
      },
      {
        path: "hooks",
        element: <Hooks />,
      },
      {
        path: "log-report",
        // @ts-ignore
        element: <LogReport />,
      },
      {
        path: "render-control",
        element: <RenderControl />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "/state-management",
    element: <StateManageMent />,
    children: [
      {
        path: "redux",
        element: <ReduxManageMent />,
      },
      {
        path: "mobx",
        element: <MobxManageMent />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />}>
          <Route index element={<Compare />} />
          <Route path="compare" element={<Compare />} />
          {/* <Route path="hooks" element={<Hooks />} /> */}
          {/* 异步加载路由 */}
          <Route
            path="hooks"
            element={
              <Suspense fallback="Loading...">
                <Hooks />
              </Suspense>
            }
          />
          {/* @ts-ignore */}
          <Route path="log-report" element={<LogReport />} />
          <Route path="render-control" element={<RenderControl />} />
          <Route path="page/:id" element={<Page />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/state-management" element={<StateManageMent />}>
          <Route index element={<ReduxManageMent />} />
          <Route path="redux" element={<ReduxManageMent />} />
          <Route path="mobx" element={<MobxManageMent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        {/* 根路由下实验🧪 */}
        <Route path="/router-management" element={<RouterManageMent />} />
        <Route path="/network" element={<Network />}>
          <Route index element={<NetworkUser />} />
          <Route path="user" element={<NetworkUser />} />
          <Route path="article" element={<NetworkArticle />} />
          <Route path="poll" element={<NetworkPoll />} />
          <Route path="sse" element={<NetworkSSE />} />
          <Route path="chat" element={<NetworkChat />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/record" element={<Record />}>
          <Route index element={<RecordVirtualList />} />
          <Route path="virtual-list" element={<RecordVirtualList />} />
          <Route path="directory" element={<RecordDirectory />} />
          <Route path="scroll-follow" element={<RecordScrollFollow />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/chart" element={<Chart />}>
          <Route index element={<ChartWorkFlow />} />
          <Route path="workflow" element={<ChartWorkFlow />}>
            <Route index element={<ChartWorkFlow />} />
            <Route path="overview" element={<ChartWorkFlowOverview />} />
            <Route path="list" element={<ChartWorkFlowList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Routering = () => useRoutes(routes);

export const RouterWithUse = () => {
  return (
    <BrowserRouter basename="/">
      <Routering />
    </BrowserRouter>
  );
};

export default Router;
