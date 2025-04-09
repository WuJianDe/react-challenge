import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "../../../context/AuthContext";
import styles from "../styles/layout.module.scss";

const LayoutPage: React.FC = () => {
  const location = useLocation();
  const { username } = useAuth();
  const BasicExerciseslinks = [
    { to: "/counter", label: "Counter" },
    { to: "/counter-for-zustand", label: "Counter For Zustand" },
    { to: "/two-way-binding", label: "Two Way Binding" },
    { to: "/todo-list", label: "Todo List" },
    { to: "/api-request", label: "API Request" },
    { to: "/message-board", label: "Message Board" },
    { to: "/router-test", label: "Router Test" },
    { to: "/login", label: "Login" }
  ];
  const Productlinks = [{ to: "/todo-list-plus", label: "Todo List Plus" }];
  const { logout } = useAuth();
  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <div className={styles["header-title"]}>Vic React</div>
        <div className={styles["account"]}>
          {username ? (
            <>
              {`Hello, ${username}`}{" "}
              <Button onClick={()=>{logout()}} color="purple" variant="dashed">
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>

      <div className={styles["main-content"]}>
        <aside className={styles["sidebar"]}>
          <h3 className={styles["sidebar-title"]}>Basic exercises</h3>
          <nav className={styles["nav"]}>
            {BasicExerciseslinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                end={false}
                className={({ isActive }) =>
                  `${styles["nav-link"]} ${
                    isActive ? styles["nav-link-active"] : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <h3 className={styles["sidebar-title"]}>Product</h3>
          <nav className={styles["nav"]}>
            {Productlinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `${styles["nav-link"]} ${
                    isActive ? styles["nav-link-active"] : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className={styles["main"]}>
          <div className={styles["outlet-container"]}>
            <Outlet key={location.key} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutPage;
