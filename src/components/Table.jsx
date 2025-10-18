import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Table() {
  const [validations, setValidations] = useState([]);
  const [installmentCars, setInstallmentCars] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/validation`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setValidations(res.data.validation || []))
      .catch((err) => {
        console.error("Error fetching validation data:", err);
        setValidations([]);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/applications`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setInstallmentCars(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching installment cars data", err);
        setInstallmentCars([]);
      });
  }, []);

  return (
    <>
      <div>
        <div className="mt-5 bg-base-300 p-4 flex justify-between rounded-lg">
          <h1 className="font-medium text-xl">My Data Validation</h1>
          <Link to="/request-validation" className="btn btn-primary rounded-lg">
            + Request Validation
          </Link>
        </div>

        {validations.length === 0 ? (
          <div className="mt-5 bg-base-300 p-4">
            <h1 className="font-medium text-xl">No validation data yet</h1>
          </div>
        ) : (
          <div className="grid grid-cols-3 mt-5 gap-5">
            {validations.map((val, index) => (
              <div key={val.id}>
                <div className="overflow-x-auto">
                  <table className="table bg-base-300">
                    <thead>
                      <tr>
                        <th>{index + 1}. Data Validation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Status</th>
                        <td>
                          <p
                            className={`badge ${
                              val.status === "accepted"
                                ? "badge-success"
                                : val.status === "rejected"
                                ? "badge-error"
                                : "badge-warning"
                            }`}
                          >
                            {val.status}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>Job</th>
                        <td>{val.job}</td>
                      </tr>
                      <tr>
                        <th>Income/month</th>
                        <td>{val.income}</td>
                      </tr>
                      <tr>
                        <th>Validator</th>
                        <td>{val.validator?.name || "-"}</td>
                      </tr>
                      <tr>
                        <th>Validator Notes</th>
                        <td>{val.validation?.notes || "-"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-20 w-full">
        <div className="mt-10 bg-base-300 p-4 flex justify-between rounded-lg">
          <h1 className="font-medium text-xl">My Installment Cars</h1>
          <Link to="/list-cars" className="btn btn-primary rounded-lg">
            + Add Installment Cars
          </Link>
        </div>

        {installmentCars.length === 0 ? (
          <div className="mt-5 bg-base-300 p-4">
            <h1 className="font-medium text-xl">
              No installment cars data yet
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-7 mt-7">
            {installmentCars.map((item) => (
              <div key={item.id}>
                <div className="overflow-x-auto">
                  <table className="table bg-base-300">
                    <thead>
                      <tr>
                        <th>
                          {item.installment?.brand || "Unknown Brand"} -{" "}
                          {item.installment?.car}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Price</th>
                        <td>
                          Rp{" "}
                          {item.installment?.price?.toLocaleString("id-ID") ||
                            "-"}
                        </td>
                      </tr>

                      {item.installment?.applications?.length > 0 ? (
                        item.installment.applications.map((app, i) => (
                          <React.Fragment key={i}>
                            <tr>
                              <th>Months</th>
                              <td>{app.month}</td>
                            </tr>
                            <tr>
                              <th>Nominal</th>
                              <td>Rp {app.nominal.toLocaleString("id-ID")}</td>
                            </tr>
                            <tr>
                              <th>Status</th>
                              <td>
                                <p
                                  className={`badge ${
                                    app.apply_status === "accepted"
                                      ? "badge-success"
                                      : app.apply_status === "rejected"
                                      ? "badge-error"
                                      : "badge-warning"
                                  }`}
                                >
                                  {app.apply_status}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th>Notes</th>
                              <td>{app.notes || "-"}</td>
                            </tr>
                          </React.Fragment>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="text-gray-400 text-center">
                            No applications yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
