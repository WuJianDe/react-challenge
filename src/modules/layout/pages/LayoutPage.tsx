import { Outlet, Link } from "react-router-dom";
import styles from "../styles/layout.module.scss";

const LayoutPage: React.FC = () => {
  const links = [
    { to: "/counter", label: "Counter" },
    { to: "/two-way-binding", label: "Two Way Binding" },
    { to: "/todo-lsit", label: "To Do List" },
    { to: "/api-request", label: "API Request" },
    { to: "/message-board", label: "Message Board" }
  ];

  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <div className={styles["header-title"]}>Vic React</div>
      </header>

      <div className={styles["main-content"]}>
        <aside className={styles["sidebar"]}>
          <h3 className={styles["sidebar-title"]}>Basic exercises</h3>
          <nav className={styles["nav"]}>
            {links.map((link, index) => (
              <Link key={index} to={link.to} className={styles["nav-link"]}>
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className={styles["main"]}>
          <div className={styles["outlet-container"]}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutPage;
