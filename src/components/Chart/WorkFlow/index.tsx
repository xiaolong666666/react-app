import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Card } from "xl";

const { Sider, Content } = Layout;

const Page = () => {
  const menus = [
    {
      key: "workflow",
      label: <NavLink to="/chart/workflow/overview">workflow</NavLink>,
    },
    {
      key: "list",
      label: <NavLink to="/chart/workflow/list">list</NavLink>,
    },
  ];
  return (
    <Card title="工作流">
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu mode="inline" items={menus} />
        </Sider>
        <Content style={{ padding: "0 24px 24px" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 360,
            }}
          >
            <div>
              <Outlet />
            </div>
          </div>
        </Content>
      </Layout>
    </Card>
  );
};

export default Page;
