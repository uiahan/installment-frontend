import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    id_card_number: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <div className="shadow-xl p-10 w-[33rem] bg-base-300 rounded-xl">
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-4xl font-bold">Installment Cars</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sequi impedit.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-5">
            <label>ID Card</label>
            <input
              name="id_card_number"
              type="text"
              placeholder="Masukan ID Card"
              autoComplete="off"
              value={form.id_card_number}
              onChange={handleChange}
              className="border border-gray-700 w-full rounded-md py-1 px-3 mt-1"
              required
            />
          </div>

          <div className="flex flex-col mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Masukan password"
              value={form.password}
              onChange={handleChange}
              className="border border-gray-700 w-full rounded-md py-1 px-3 mt-1"
              required
            />
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-warning w-full font-bold"
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        {/* <p className="text-black">Copyright © 2025 - LKSP Jabar Web Technologies</p> */}
      </div>
    </div>
  );
}

export default Login;
