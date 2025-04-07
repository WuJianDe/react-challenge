import { Outlet, Link } from "react-router-dom";

const LayoutPage: React.FC = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/one-day", label: "One Day" },
    { to: "/two-day", label: "Two Day" },
    { to: "/three-day", label: "Three Day" },
  ];

  return (
    <div className="layout" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
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
            backgroundColor: "#f0f0f0",
            padding: "20px",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutPage;