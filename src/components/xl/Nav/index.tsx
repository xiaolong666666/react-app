import { NavLink } from "react-router-dom";
import styles from "./index.module.less";

interface Props {
  dataSource: { to: string; label: string }[];
}

const Nav: React.FC<Props> = ({ dataSource = [] }) => {
  return (
    <div className={styles.nav}>
      <ul>
        {dataSource.map(({ to, label }) => {
          return (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? styles.isActive : "")}
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
