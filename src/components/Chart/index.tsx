import { Outlet } from "react-router-dom";
import { Nav } from "xl";

const Chart = () => {
  const dataSource = [
    {
      to: "/chart/workflow",
      label: "工作流",
    },
    {
      to: "/chart/echarts",
      label: "xl-react-echarts",
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
