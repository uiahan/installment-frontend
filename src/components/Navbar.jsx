import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Yakin ingin logout?");
    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  }

  return (
    <div className="navbar bg-base-300 shadow-sm px-40">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Installment Cars</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Link</a>
          </li> */}
          <li>
            <button onClick={handleLogout} className="btn btn-warning">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
