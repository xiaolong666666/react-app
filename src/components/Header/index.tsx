import { Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/utils/hooks";
import { getRandomVerifyCode } from "@/utils/tools";
import styles from "./index.module.less";
import logo from "@/logo.svg";
import { useCallback } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("app-token", getRandomVerifyCode);

  const obBackHome = () => navigate("/");

  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const generateRandomToken = useCallback(() => {
    const newToken = getRandomVerifyCode();
    setToken(newToken)
  }, [setToken]);

  return (
    <Layout.Header className={styles.header}>
      <div onClick={obBackHome} className={styles.logo_wrapper}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
      <div onClick={generateRandomToken}>app-token：{token}</div>
      <div>小龙</div>
    </Layout.Header>
  );
};

export default Header;
