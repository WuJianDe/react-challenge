import { Outlet, Link } from "react-router-dom";

const LayoutPage: React.FC = () => {
  const links = [
    { to: "/counter", label: "Counter" },
    { to: "/two-way-binding", label: "Two Way Binding" },
    { to: "/todo-lsit", label: "To Do List" },
    { to: "/api-request", label: "API Request" },
    { to: "/message-board", label: "Message Board" },
  ];

  return (
    <div
      className="layout"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {/* 置頂的 Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>Vic Practice</div>
      </header>

      {/* 主內容區域 */}
      <div style={{ display: "flex", flex: 1, marginTop: "60px" }}>
        {/* 側邊欄 */}

        <aside
          style={{
            width: "200px",
            minWidth: "200px",
            backgroundColor: "#f0f0f0",
            padding: "20px",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ marginBottom: 10, borderBottom: "1px #c2c2c2 solid" }}>
            Practics
          </h3>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                style={{ textDecoration: "none", color: "#333" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* 子路由內容 */}
        <main style={{ flex: 1, padding: "0 0 0 20px " }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f2f5",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutPage;
