import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/installment_cars`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCars(res.data.cars || []))
      .catch((err) => {
        console.error("Error fetching cars data:", err);
        setCars([]);
      });
  }, []);

  return (
    <div className="px-44 py-10 bg-base-200 min-h-screen">
      <div className="bg-base-300 p-4 rounded-lg">
        <h1 className="text-4xl font-semibold rounded-lg">Cars</h1>
      </div>

      <div className="mt-5 bg-base-300 p-4 rounded-lg">
        <h1 className="font-medium text-xl">List of Cars</h1>
        <div className="bg-white h-0.5 mt-5 w-full" />
        {cars.length === 0 ? (
          <div className="mt-5 bg-base-300 p-4">
            <h1 className="font-medium text-xl">No cars data yet</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Cars</th>
                  <th>Avaible Month</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={car.id}>
                    <th>{index + 1}</th>
                    <td>{car.brand}</td>
                    <td>
                      {car.available_months &&
                      car.available_months.length > 0 ? (
                        car.available_months.map((month, idx) => (
                          <div key={idx}>
                            {month.month} Month, {month.description}
                          </div>
                        ))
                      ) : (
                        <span className="text-gray-400">No data</span>
                      )}
                    </td>
                    <td>
                      {car.is_requested ? (
                        <button className="btn btn-disabled" disabled>
                          Installment request has been submitted
                        </button>
                      ) : (
                        <Link
                          to={`/installment/${car.id}`}
                          className="btn btn-primary"
                        >
                          Detail
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
