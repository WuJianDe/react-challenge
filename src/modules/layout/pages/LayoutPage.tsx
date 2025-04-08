import { Outlet, Link } from "react-router-dom";
import styles from "../styles/layout.module.scss";

const LayoutPage: React.FC = () => {
  const BasicExerciseslinks = [
    { to: "/counter", label: "Counter" },
    { to: "/two-way-binding", label: "Two Way Binding" },
    { to: "/todo-list", label: "Todo List" },
    { to: "/api-request", label: "API Request" },
    { to: "/message-board", label: "Message Board" }
  ];
  const Productlinks = [
    { to: "/todo-list-plus", label: "Todo List Plus" },
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
            {BasicExerciseslinks.map((link, index) => (
              <Link key={index} to={link.to} className={styles["nav-link"]}>
                {link.label}
              </Link>
            ))}
          </nav>
          <h3 className={styles["sidebar-title"]}>Product</h3>
          <nav className={styles["nav"]}>
            {Productlinks.map((link, index) => (
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
