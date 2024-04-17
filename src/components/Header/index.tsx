import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import logo from "@/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  const obBackHome = () => navigate("/");

  return (
    <header className={styles.header}>
      <button onClick={obBackHome}>返回首页</button>
      <img src={logo} className={styles.logo} alt="logo" />
    </header>
  );
};

export default Header;
