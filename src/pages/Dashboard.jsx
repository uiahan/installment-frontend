import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [])

  return (
    <>
      <Navbar />
      <div className="px-44 py-10 bg-base-200 min-h-screen">
        <div className="bg-base-300 p-4">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
        </div>
        <Table />
      </div>
    </>
  );
}

export default Dashboard;
