import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import {
  HomeOutlined,
  DesktopOutlined,
  ApartmentOutlined,
  WifiOutlined,
  LinkOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useBoolean } from "ahooks";
import { isEmpty } from "lodash";
import classNames from "classnames";
import { routes } from "@/router";
import styles from "./index.module.less";

const { Content, Sider } = Layout;

const iconList: any = {
  "/": HomeOutlined,
  "/base": DesktopOutlined,
  "/state-management": ApartmentOutlined,
  "/network": WifiOutlined,
  "/record": LinkOutlined,
  "/chart": LineChartOutlined,
};

const convertMenu = (routes: any = [], prefix = "") => {
  return routes
    ?.filter(({ visible = true }) => visible)
    .map((route: any) => {
      const { path, label, children } = route;
      const key = `${prefix ? `${prefix}/` : ""}${path}`;
      const isShowChildren = children?.some(({ visible = true }) => visible);

      return {
        key,
        icon: iconList[path] ? React.createElement(iconList[path]) : null,
        label: <NavLink to={key}>{label}</NavLink>,
        children: isShowChildren ? convertMenu(children, key) : null,
      };
    });
};

const getFirstLevelMenu = (routes: any): any[] => {
  let res: any[] = [];
  const backTrack = (routes: any) => {
    routes.forEach((route: any) => {
      if (route.children) {
        res.push(route.key);
        getFirstLevelMenu(route.children);
      }
    });
  };

  backTrack(routes);
  return res;
};

const menu: MenuProps["items"] = convertMenu(routes);
const firstLevelMenuList: any = getFirstLevelMenu(menu);

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const [isVisibleSider, { setTrue, setFalse }] = useBoolean(true);
  const { pathname } = useLocation();
  const defaultOpenKeys = firstLevelMenuList?.map((menu: any) =>
    pathname.includes(menu)
  );
  const breadcrumb = pathname.slice(1);

  useEffect(() => {
    if (pathname === "/chart/workflow") {
      setFalse();
    } else {
      setTrue();
    }
  }, [pathname, setFalse, setTrue]);

  const onBack = () => navigate("/");

  return (
    <Layout className={styles.layout}>
      <Sider
        width={200}
        className={classNames(isVisibleSider ? "" : styles.none)}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={defaultOpenKeys}
          items={menu}
          className={styles.menu}
        />
      </Sider>
      <Layout className={styles.main}>
        <Breadcrumb className={styles.breadcrumb}>
          <div className={styles.back} onClick={onBack}>
            🔙
          </div>
          {!isEmpty(breadcrumb) ? (
            breadcrumb
              .split("/")
              .map((path: string) => (
                <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
              ))
          ) : (
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          )}
        </Breadcrumb>
        <Content
          className={styles.content}
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
