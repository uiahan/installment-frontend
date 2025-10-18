import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddInstallmentCars() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/installment_cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCar(res.data.installment))
      .catch((err) => console.error("Error fetching car:", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMonth || !notes) return alert("Please fill all fields");

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_URL}/applications/store`,
        {
          installment_id: car.id,
          months: selectedMonth,
          notes,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Installment request sent successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  if (!car)
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        Loading car details...
      </div>
    );

  return (
    <div className="px-44 py-10 bg-base-200 min-h-screen">
      <div className="bg-base-300 p-6 rounded-lg text-center">
        <h1 className="text-5xl font-bold">{car.car}</h1>
        <p className="text-lg mt-1 text-gray-400">Brand : {car.brand}</p>
      </div>

      <div className="bg-base-300 p-6 mt-5 rounded-lg">
        <h2 className="text-xl font-semibold mt-5">
          Price:{" "}
          <span className="bg-primary text-white px-2 py-1 rounded">
            Rp. {car.price.toLocaleString("id-ID")}
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-4">
            <label className="font-medium text-white">Select Months</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              required
              className="border border-gray-700 bg-base-100 text-gray-200 w-full rounded-md py-2 px-3 mt-2"
            >
              <option value="">Choose month</option>
              {car.available_months.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.month} Months - {m.description}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="font-medium text-white">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Explain why your installment should be approved"
              required
              className="border border-gray-700 bg-base-100 text-gray-200 w-full rounded-md py-2 px-3 h-32 mt-2"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary rounded-lg w-32 font-bold"
          >
            {loading ? "Sending..." : "Apply"}
          </button>

          <Link
            to="/list-cars"
            className="btn btn-secondary rounded-lg w-28 ml-2 font-bold"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
