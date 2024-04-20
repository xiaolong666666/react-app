import { Outlet } from "react-router-dom";
import { Nav } from "xl";

const Record = () => {
  const dataSource = [
    {
      to: "/record/virtual-list",
      label: "虚拟长列表",
    },
    {
      to: "/record/directory",
      label: "文件目录",
    },
    {
      to: "/record/scroll-follow",
      label: "滚动跟随",
    },
  ];
  return (
    <>
      <h2>Record</h2>
      <Nav dataSource={dataSource} />
      <Outlet />
    </>
  );
};

export default Record;
