import { Nav } from "xl";
import Directory from "../Directory";

const Home = () => {
  const dataSource = [
    {
      to: "/",
      label: "首页",
    },
    {
      to: "/base",
      label: "基础",
    },
    {
      to: "/state-management",
      label: "数据管理",
    },
    {
      to: "/router-management",
      label: "路由管理",
    },
    {
      to: "/virtual-list",
      label: "虚拟长列表",
    },
    {
      to: "/network",
      label: "网络🛜",
    },
  ];
  return (
    <>
      <h2>Home</h2>
      <Nav dataSource={dataSource} />
      <Directory />
    </>
  );
};

export default Home;
