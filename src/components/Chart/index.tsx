import { Outlet } from "react-router-dom";
import { Nav } from "xl";

const Base = () => {
  const dataSource = [
    {
      to: "/char/workflow",
      label: "工作流",
    },
  ];

  return (
    <>
      <h2>Chart</h2>
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default Base;
