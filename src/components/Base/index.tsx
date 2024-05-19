import { Outlet } from "react-router-dom";
import { Nav } from "xl";

const Base = () => {
  const dataSource = [
    {
      to: "/base/compare",
      label: "比较",
    },
    {
      to: "/base/hooks",
      label: "Hooks",
    },
    {
      to: "/base/log-report",
      label: "日志上报",
    },
    {
      to: "/base/render-control",
      label: "渲染控制",
    },
    {
      to: `/base/page/${Math.floor(Math.random() * 10)}?x=xxx&y=yyy`,
      label: "go Page",
    },
  ];
  return (
    <>
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default Base;
