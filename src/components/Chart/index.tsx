import { Outlet } from "react-router-dom";
import { Nav } from "xl";

const Chart = () => {
  const dataSource = [
    {
      to: "/char/workflow",
      label: "工作流",
    },
  ];

  return (
    <>
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default Chart;
