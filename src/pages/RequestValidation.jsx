import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RequestValidation = () => {
  const [form, setForm] = useState({
    job: "",
    job_description: "",
    income: "",
    reason_accepted: "",
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
      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/validation/store`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Request data validation send successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Gagal mengirim data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-44 py-10 bg-base-200 min-h-screen">
      <div className="bg-base-300 p-4">
        <h1 className="text-4xl font-semibold">Request Data Validation</h1>
      </div>
      <div className="bg-base-300 p-4 mt-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="font-medium text-white">Are you working?</label>
              <select
                onChange={handleChange}
                required
                className="border border-gray-700 bg-base-100 text-gray-200 w-full rounded-md py-2 px-3 mt-3 transition"
              >
                <option value="yes">Yes, I have</option>
                <option value="no">No</option>
              </select>
              <input
                name="job"
                value={form.job}
                onChange={handleChange}
                type="text"
                placeholder="Your Job"
                className="border border-gray-700 bg-base-100 text-gray-200 w-full rounded-md py-2 px-3 mt-3 transition"
              />
              <textarea
                name="job_description"
                value={form.job_description}
                onChange={handleChange}
                type="text"
                placeholder="Describe what you do in your job"
                className="border border-gray-700 bg-base-100 h-36 text-gray-200 w-full rounded-md py-2 px-3 mt-3 transition"
              />
              <input
                name="income"
                value={form.income}
                onChange={handleChange}
                type="number"
                placeholder="Income (Rp)"
                className="border border-gray-700 bg-base-100 text-gray-200 w-full rounded-md py-2 px-3 mt-3 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-white">Reason Accepted</label>
              <textarea
                name="reason_accepted"
                value={form.reason_accepted}
                onChange={handleChange}
                type="text"
                placeholder="Explain why you should be accepted"
                className="border border-gray-700 bg-base-100 h-64 text-gray-200 w-full rounded-md py-2 px-3 mt-3 transition"
              />
            </div>
          </div>

          <div className="flex justify-start mt-5">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary rounded-lg w-32 font-bold"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
            <Link
              to="/dashboard"
              className="btn btn-primary rounded-lg w-28 ml-2 font-bold"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestValidation;
