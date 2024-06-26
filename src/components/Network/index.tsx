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
    {
      to: "/network/poll",
      label: "轮询",
    },
    {
      to: "/network/sse",
      label: "服务器推送",
    },
    {
      to: "/network/chat",
      label: "聊天室",
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
