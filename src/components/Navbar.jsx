import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Yakin ingin logout?");
    if (!confirmLogout) return;

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");

      navigate("/")
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal logout dari server!");
    }
  };

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
            <button onClick={handleLogout} className="btn btn-primary rounded-lg">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
