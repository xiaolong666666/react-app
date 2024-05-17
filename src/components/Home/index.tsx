import { Nav } from "xl";

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
      to: "/network",
      label: "网络🛜",
    },
    {
      to: "/record",
      label: "记录",
    },
    {
      to: "/chart",
      label: "图表",
    },
  ];
  return (
    <>
      <h2>Home</h2>
      <Nav dataSource={dataSource} />
    </>
  );
};

export default Home;
