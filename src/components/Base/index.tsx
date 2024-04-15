import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "xl";

const Base = () => {
  const navigate = useNavigate();
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
  ];

  const goPage = () => {
    navigate(`/base/page/${Math.floor(Math.random() * 10)}?x=xxx&y=yyy`);
  };
  return (
    <>
      <h2>Base</h2>
      <Nav dataSource={dataSource} />
      <button onClick={goPage}>go Page </button>
      <Outlet />
    </>
  );
};

export default Base;
