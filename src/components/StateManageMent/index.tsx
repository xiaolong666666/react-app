import { Outlet } from "react-router-dom";
import { Nav } from "xl";

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
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default StateManageMent;
