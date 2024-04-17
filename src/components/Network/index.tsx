import { Outlet } from "react-router-dom";
import { Nav } from "xl";

const Network = () => {
  const dataSource = [
    {
      to: "/network/user",
      label: "用户",
    },
    {
      to: "/network/article",
      label: "文章",
    },
  ];
  return (
    <>
      <h2>Network</h2>
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default Network;
