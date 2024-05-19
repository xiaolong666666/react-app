import { lazy, Suspense } from "react";
import {
  /* BrowserRouter, */
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";
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

export const routes = [
  {
    path: "/",
    label: "首页",
    element: <Home />,
  },
  {
    path: "/base",
    label: "基础",
    element: <Base />,
    children: [
      {
        path: "compare",
        label: "比较",
        element: <Compare />,
      },
      {
        path: "hooks",
        label: "Hooks",
        // 异步加载路由
        element: (
          <Suspense fallback="Loading...">
            <Hooks />
          </Suspense>
        ),
      },
      {
        path: "log-report",
        label: "日志上报",
        // @ts-ignore
        element: <LogReport />,
      },
      {
        path: "render-control",
        label: "渲染控制",
        element: <RenderControl />,
      },
      {
        path: "page/:id",
        label: "Page",
        element: <Page />,
        visible: false,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
        visible: false,
      },
    ],
  },
  {
    path: "/state-management",
    label: "数据管理",
    element: <StateManageMent />,
    children: [
      {
        path: "redux",
        label: "Redux",
        element: <ReduxManageMent />,
      },
      {
        path: "mobx",
        label: "Mobx",
        element: <MobxManageMent />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
        visible: false,
      },
    ],
  },
  {
    path: "/router-management",
    label: "路由管理",
    element: <RouterManageMent />,
    visible: false,
  },
  {
    path: "/network",
    label: "网络",
    element: <StateManageMent />,
    children: [
      {
        path: "user",
        label: "用户",
        element: <NetworkUser />,
      },
      {
        path: "article",
        label: "文章",
        element: <NetworkArticle />,
      },
      {
        path: "poll",
        label: "轮询",
        element: <NetworkPoll />,
      },
      {
        path: "sse",
        label: "服务器推送",
        element: <NetworkSSE />,
      },
      {
        path: "chat",
        label: "聊天室",
        element: <NetworkChat />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
        visible: false,
      },
    ],
  },
  {
    path: "/record",
    label: "记录",
    element: <Record />,
    children: [
      {
        path: "virtual-list",
        label: "虚拟长列表",
        element: <RecordVirtualList />,
      },
      {
        path: "directory",
        label: "文件目录",
        element: <RecordDirectory />,
      },
      {
        path: "scroll-follow",
        label: "滚动跟随",
        element: <RecordScrollFollow />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
        visible: false,
      },
    ],
  },
  {
    path: "/chart",
    label: "图表",
    element: <Chart />,
    children: [
      {
        path: "workflow",
        label: "工作流",
        element: <ChartWorkFlow />,
        children: [
          {
            path: "overview",
            label: "概览",
            element: <ChartWorkFlowOverview />,
            visible: false,
          },
          {
            path: "list",
            label: "列表",
            element: <ChartWorkFlowList />,
            visible: false,
          },
          {
            path: "*",
            element: <Navigate to="/" />,
            visible: false,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" />,
        visible: false,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
    visible: false,
  },
];

export const RouterNest = () => {
  return (
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
  );
};

const Router = () => useRoutes(routes);

export default Router;
