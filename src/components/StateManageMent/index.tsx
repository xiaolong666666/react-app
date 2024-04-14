import { Outlet } from "react-router-dom";
import { Nav } from "@/components/xl";

const StateManageMent = () => {
  const dataSource = [
    {
      to: "/state-management/redux",
      label: "Redux",
    },
    {
      to: "/state-management/mobx",
      label: "Mobx",
    },
  ];
  return (
    <>
      <h2>State ManageMent</h2>
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default StateManageMent;
